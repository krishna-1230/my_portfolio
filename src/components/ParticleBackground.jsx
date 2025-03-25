import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const devicePixelRatio = window.devicePixelRatio || 1;

    // Set up canvas dimensions for sharp rendering on retina devices
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    
    updateCanvasSize();

    // Configuration object for easy adjustments
    const config = {
      gap: 30,
      friction: 0.85,
      ease: 0.2,
      // Adjusted mouse radius for device pixel ratio
      mouseRadius: 300 * devicePixelRatio
    };

    class Particle {
      constructor(x, y, effect) {
        this.originX = x;
        this.originY = y;
        this.effect = effect;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        // Random size between 2 and 5
        this.size = Math.random() * 3 + 2;
      }

      draw() {
        this.effect.ctx.fillStyle = 'darkslategray';
        this.effect.ctx.fillRect(this.x, this.y, this.size, this.size);
      }
      

      update() {
        // Calculate difference between mouse position and particle
        const dx = this.effect.mouse.x - this.x;
        const dy = this.effect.mouse.y - this.y;
        const distanceSq = dx * dx + dy * dy;
        const radiusSq = config.mouseRadius * config.mouseRadius;

        if (distanceSq < radiusSq) {
          // Get actual distance
          const distance = Math.sqrt(distanceSq);
          // Normalize force based on how close the particle is to the mouse
          const force = (config.mouseRadius - distance) / config.mouseRadius;
          const angle = Math.atan2(dy, dx);
          this.vx += force * Math.cos(angle);
          this.vy += force * Math.sin(angle);
        }
        
        // Apply friction and ease the particle back to its original position
        this.vx *= config.friction;
        this.vy *= config.friction;
        this.x += this.vx + (this.originX - this.x) * config.ease;
        this.y += this.vy + (this.originY - this.y) * config.ease;
        
        this.draw();
      }
    }

    class Effect {
      constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.particles = [];
        this.mouse = {
          // Start with the mouse in the center of the canvas
          x: width / 2,
          y: height / 2
        };
        this.init();
      }

      init() {
        this.particles = [];
        // Create a grid of particles based on the gap
        for (let x = 0; x < this.width; x += config.gap) {
          for (let y = 0; y < this.height; y += config.gap) {
            this.particles.push(new Particle(x, y, this));
          }
        }
      }

      update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.particles.forEach(particle => particle.update());
      }
    }

    // Initialize the effect
    let effect = new Effect(canvas.width, canvas.height, ctx);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      effect.update();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Mouse move event handler
    const handleMouseMove = (e) => {
      effect.mouse.x = e.clientX * devicePixelRatio;
      effect.mouse.y = e.clientY * devicePixelRatio;
    };

    // Window resize event handler
    const handleResize = () => {
      updateCanvasSize();
      effect.width = canvas.width;
      effect.height = canvas.height;
      effect.init();
    };

    // Mobile touch support
    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      effect.mouse.x = touch.clientX * devicePixelRatio;
      effect.mouse.y = touch.clientY * devicePixelRatio;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: 'black'
      }}
    />
  );
};

export default ParticleBackground;
