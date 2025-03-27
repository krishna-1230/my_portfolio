import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const mountRef = useRef(null);

  // Utility: Create a circle texture with a radial gradient.
  const generateCircleTexture = (color = 'white') => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    
    // Create a radial gradient from the center to transparent edge.
    const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'transparent');
    context.fillStyle = gradient;
    
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    context.fill();
    
    return new THREE.CanvasTexture(canvas);
  };

  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create a group to hold blue particle layers.
    const particleGroup = new THREE.Group();
    scene.add(particleGroup);

    // Utility: Create a blue particle layer with custom parameters.
    const createLayer = (particleCount, spread, size, color, factor) => {
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * spread;
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const texture = generateCircleTexture(color);
      const material = new THREE.PointsMaterial({
        color: new THREE.Color(color),
        size: size,
        transparent: true,
        opacity: 0.8,
        map: texture,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(geometry, material);
      // Store a custom factor for parallax effect.
      points.userData = { factor };
      return points;
    };

    // Create several blue layers with varying parameters.
    const layers = [];
    const layer1 = createLayer(450, 12, 0.18, '#008cff', 0.9); // Base layer, slowest.
    const layer2 = createLayer(400, 18, 0.17, '#ffffff', 1.2);
    const layer3 = createLayer(350, 24, 0.16, '#008cff', 1.5);
    const layer4 = createLayer(300, 28, 0.19, '#ffffff', 1.7);
    const layer5 = createLayer(300, 32, 0.20, '#008cff', 1.9);
    const layer6 = createLayer(250, 34, 0.21, '#ffffff', 2.1);
    const layer7 = createLayer(200, 36, 0.22, '#008cff', 2.3);
    
    

    
    
    layers.push(layer1, layer2, layer3, layer4, layer5, layer6, layer7);
    layers.forEach(layer => particleGroup.add(layer));

    // Global mouse variables for target rotation.
    let targetRotationX = 0;
    let targetRotationY = 0;
    const onMouseMove = (e) => {
      targetRotationY = ((e.clientX - window.innerWidth / 2) / window.innerWidth) * Math.PI * 0.5;
      targetRotationX = -((e.clientY - window.innerHeight / 2) / window.innerHeight) * Math.PI * 0.5;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Clock for time-based animations.
    const clock = new THREE.Clock();

    // Animation Loop.
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Update each layer's rotation based on mouse movement, scaled by its factor.
      layers.forEach((layer) => {
        layer.rotation.x += (targetRotationX * layer.userData.factor - layer.rotation.x) * 0.1;
        layer.rotation.y += (targetRotationY * layer.userData.factor - layer.rotation.y) * 0.1;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resizing.
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;
