import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="p-6 md:p-20">
      <section className="flex items-center justify-center h-screen w-full overflow-hidden">
        <div className="border-2 border-gray-800 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl bg-white/5 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white serif-font">
            Hi, I'm Krishna Gopal V.S
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4">
            I'm a <span className="text-white font-semibold">Full Stack Developer</span> & <span className="text-white font-semibold">AI Enthusiast</span> from India, passionate about building scalable web apps and exploring the future of technology.<br /><br />
            <span className="font-semibold text-white">What drives me?</span><br />
            🚀 Turning ideas into seamless digital experiences<br />
            🤖 Diving deep into AI, automation, and innovation<br />
            🧠 Solving complex problems with creative, efficient code<br /><br />
            <span className="font-semibold text-white">Beyond the screen:</span><br />
            🎮 Gamer at heart & music lover<br /><br />
            Always learning, always building. Let's connect and create something awesome!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
