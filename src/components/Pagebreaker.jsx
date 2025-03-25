import React, { useEffect, useRef } from 'react';

const EnhancedScrollingText = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;
    
    let animationId;
    let position = 0;
    
    const animate = () => {
      position += 1.5; // Speed control
      
      // Create seamless loop
      const firstChildWidth = scrollContainer.firstChild.offsetWidth;
      if (position <= -firstChildWidth) {
        position += firstChildWidth;
      }
      
      scrollContainer.style.transform = `translateX(${position}px)`;
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Create a full repeating section to ensure no gaps during scrolling
  const scrollingContent = (
    <>
      <span className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wider px-4">
        SCROLL TO EXPLORE
      </span>
      <span className="text-4xl md:text-6xl text-white mx-2">✷</span>
    </>
  );
  
  // Calculate how many duplicates we need based on screen size
  // For simplicity we'll just use a reasonable number
  const duplicates = 12;
  
  return (
    <div 
      className="w-full overflow-hidden py-4 relative cursor-pointer backdrop-blur-md bg-black opacity-80"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Add gradient overlay to create fade effect on edges */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <div 
        ref={containerRef} 
        className="whitespace-nowrap inline-flex items-center"
        style={{ willChange: 'transform' }}
      >
        {[...Array(duplicates)].map((_, index) => (
          <div key={index} className="flex items-center">
            {scrollingContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedScrollingText;