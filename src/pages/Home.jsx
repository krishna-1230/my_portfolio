import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="flex items-center justify-center h-screen w-full overflow-hidden">
        <div className="container flex items-center justify-center px-4">
          <div className="bg-black z-10 opacity-80 p-10 rounded-3xl border-2 border-gray-800 w-full max-w-4xl">
            <h1 className="text-5xl font-bold text-white serif-font">
              Hi, I'm Krishna Gopal V.S
            </h1>
            <p className="text-white text-xl mt-4 sans-serif-font">
              I am an aspiring Full Stack Developer & AI Enthusiast currently based in India.
              <br />
              <br />🛠️ What I Do <br />
              🔹 Passionate about building scalable web applications and seamless user experiences.
              <br />
              🔹 Enthusiastic about AI, automation, and cutting-edge technologies.
              <br />
              <br />🧠 My Approach<br />
              I am detail-oriented and enjoy solving complex problems with efficient solutions. Always eager to learn and innovate.
              <br />
              <br />🎮🎵 Beyond Tech<br />
              Outside of coding, I love playing video games 🎮 and immersing myself in music 🎵.
            </p>
          </div>
        </div>
      </section>
      {isVisible && (
        <motion.footer
          className="fixed bottom-0 w-full bg-black text-white text-center py-2"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          ABOUT ME ✨
        </motion.footer>
      )}
    </motion.div>
  );
};

export default Home;
