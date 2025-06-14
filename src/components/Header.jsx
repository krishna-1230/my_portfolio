import React, { useState, useEffect } from "react";

function Header() {
  const [isHome, setIsHome] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        setIsHome(window.scrollY < homeHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust the navigation container style based on scroll position
  const navContainerClasses = isHome
    ? "py-4 px-6 bg-zinc-900/40 backdrop-blur-sm rounded-full"
    : "py-3 px-5 bg-zinc-900/40 backdrop-blur-sm rounded-full";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-center items-center mt-4 px-4 transition-all duration-300">
        <div className={`${navContainerClasses} relative w-full max-w-screen-lg flex justify-between items-center`}>
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Logo/Brand - Optional */}
          <span className="md:hidden text-blue-400 font-bold">KG</span>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block mx-auto">
            <ul className="flex space-x-8 font-poppins text-white text-lg">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          
          {/* Spacer for mobile layout */}
          <div className="md:hidden w-6"></div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden">
            <div className="bg-black bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg p-4">
              <ul className="space-y-3 font-poppins text-white">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="w-full text-left py-2 px-4 hover:bg-zinc-800 rounded-lg transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="w-full text-left py-2 px-4 hover:bg-zinc-800 rounded-lg transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="w-full text-left py-2 px-4 hover:bg-zinc-800 rounded-lg transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="w-full text-left py-2 px-4 hover:bg-zinc-800 rounded-lg transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full text-left py-2 px-4 hover:bg-zinc-800 rounded-lg transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
