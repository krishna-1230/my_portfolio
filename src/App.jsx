import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
// import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Pagebreaker from "./components/Pagebreaker";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function SectionWrapper({ id, children, direction = "left" }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  const initialX = direction === "left" ? -120 : 120;

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={controls}
      className="min-h-screen w-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

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
            <SectionWrapper id="home" direction="left">
              <Home />
            </SectionWrapper>
            {/* <Pagebreaker/> */}
            <SectionWrapper id="about" direction="right">
              <About />
            </SectionWrapper>
            <SectionWrapper id="experience" direction="left">
              <Experience />
            </SectionWrapper>
            <SectionWrapper id="projects" direction="right">
              <Projects />
            </SectionWrapper>
            <SectionWrapper id="contact" direction="left">
              <Contact />
            </SectionWrapper>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
