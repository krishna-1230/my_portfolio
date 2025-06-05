function About() {
  return (
    <section className="p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-12 text-center font-poppins">
        About Me
      </h2>
      <div className="border-2 border-gray-800 backdrop-blur-sm p-6 md:p-10 rounded-3xl bg-white/5 max-w-4xl mx-auto">
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-inter">
          Hi, I'm <span className="font-semibold text-white">Krishna Gopal</span> — a passionate <span className="font-medium text-white">Full Stack Developer</span> and <span className="font-medium text-white">AI Enthusiast</span> based in India. Currently, I'm a 3rd-year B.Tech IT student, always eager to learn, build, and innovate.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-inter mt-6">
          My journey so far includes hands-on experience with <span className="font-semibold text-white">AWS, Golang, React, and MySQL</span>. I've built an AI-powered chatbot, a resume parser, and I'm now developing a scalable e-commerce platform using Golang and Next.js, with Razorpay integration.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-inter my-6 md:my-10">
          I've interned at <span className="font-medium text-white">Ether Infotech</span> (AI) and completed a virtual internship in Generative AI with <span className="font-medium text-white">Skillable</span>. I'm also preparing for the <span className="font-semibold text-white">AWS Developer Associate certification</span> and exploring Docker and Kubernetes.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-inter">
          I love solving real-world problems with code, exploring new tech, and collaborating on impactful projects. When I'm not coding, you'll find me gaming or lost in music. Let's connect and create something amazing!
        </p>
      </div>
    </section>
  );
}

export default About;
