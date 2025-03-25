import React, { useState, useEffect } from "react";

function Header() {
  const [isHome, setIsHome] = useState(true);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
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
    ? "py-4 px-8 bg-black bg-opacity-50 backdrop-blur-lg rounded-full"
    : "py-3 px-6 bg-black bg-opacity-70 backdrop-blur-md rounded-full";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-center items-center mt-4 transition-all duration-300">
        <div className={navContainerClasses}>
          <nav>
            <ul className="flex space-x-8 font-poppins text-white text-lg">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-gray-300 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
