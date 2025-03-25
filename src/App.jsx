import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Pagebreaker from "./components/Pagebreaker";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen">
          <ParticleBackground />
          <Header />
          <main className="flex-grow flex flex-col justify-center items-center text-white font-sans">
            <AnimatePresence mode="wait">
              <div id="home">
                <Home key="home" />
               
              </div>
            </AnimatePresence>
            <div id="about" className="min-h-screen">
              <About />
            </div>
            <div id="projects" className="min-h-screen">
              <Projects />
            </div>
            <div id="contact" className="min-h-screen">
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
