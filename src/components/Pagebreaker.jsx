import React from "react";

const EnhancedScrollingText = () => {
  // Create a full repeating section to ensure no gaps during scrolling
  const scrollingContent = (
    <>
      <span className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wider px-4">
        SCROLL TO EXPLORE
      </span>
      <span className="text-4xl md:text-6xl text-white mx-2">✷</span>
    </>
  );

  return (
    <div
      className="w-full overflow-hidden py-4 relative cursor-pointer backdrop-blur-md bg-black opacity-80"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Add gradient overlay to create fade effect on edges */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10"></div>

      {/* Scrolling container */}
      <div className="overflow-hidden whitespace-nowrap flex">
        <div className="flex items-center animate-scroll">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex items-center">
              {scrollingContent}
            </div>
          ))}
        </div>
        <div className="flex items-center animate-scroll" aria-hidden="true">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex items-center">
              {scrollingContent}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedScrollingText;