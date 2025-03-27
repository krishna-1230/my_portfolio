function About() {
  return (
    <section className="p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-12 text-center font-poppins">
        About Me
      </h2>
      <div className="border-2 border-gray-800 backdrop-blur-sm p-6 md:p-10 rounded-3xl bg-white/10 max-w-4xl mx-auto">
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-inter">
          Hi, I'm <span className="font-semibold text-white">Krishna Gopal</span>. Welcome to my portfolio website! I'm currently a <span className="font-medium text-white">3rd-year B.Tech IT student</span> with a strong interest in cloud computing, AI, and full-stack development.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-inter mt-6">
          I have experience working with <span className="font-semibold text-white">AWS, Golang, React, and MySQL</span>. I've built projects including an AI-powered chatbot and a prototype resume parser. Additionally, I've completed an AI internship at <span className="font-medium text-white">Ester Infotech</span> and a virtual internship on Generative AI with <span className="font-medium text-white">Skillable</span>.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-inter my-6 md:my-10">
          Currently, I'm working on an <span className="font-semibold text-white">e-commerce platform</span> using Golang for the backend and React + Next.js for the frontend, integrating payment solutions like Razorpay. I'm also preparing for the <span className="font-semibold text-white">AWS Developer Associate certification</span> while exploring Docker and Kubernetes.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-inter">
          Passionate about building scalable applications and solving real-world problems, I enjoy exploring emerging technologies and constantly improving my skills. My goal is to create impactful solutions that enhance user experiences and drive innovation.
        </p>
      </div>
    </section>
  );
}

export default About;
