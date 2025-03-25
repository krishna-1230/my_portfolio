import React from "react";
import projects1 from "../assets/projects/netconf_display.png";
import projects2 from "../assets/projects/matching.jpg"; 
import projects3 from "../assets/projects/customer_onboard_display.png"; // Replace with actual project images

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: projects1,
    description: "A full-stack e-commerce platform with a Golang backend and React + Next.js frontend, integrated with MySQL and Razorpay for payments.",
    github: "https://google.com",
    technologies: ["Golang", "React", "Next.js", "MySQL", "Razorpay"],
  },
  {
    id: 2,
    title: "AI Chatbot",
    image: projects2,
    description: "An AI-powered chatbot using Python and Flask with TensorFlow Keras, trained on JSON datasets for natural language understanding.",
    github: "https://google.com",
    technologies: ["Python", "Flask", "TensorFlow", "Keras", "AI"],
  },
  {
    id: 3,
    title: "Resume Parser",
    image: projects3,
    description: "A prototype AI-powered resume parser designed to extract and structure key information from resumes.",
    github: "https://google.com",
    technologies: ["Python", "NLP", "AI"],
  },
  {
    id: 4,
    title: "LLaMA Model Fine-Tuning",
    image: projects3,
    description: "Fine-tuned Meta's LLaMA model for specialized text generation tasks using custom datasets.",
    github: "https://google.com",
    technologies: ["Python", "LLaMA", "Hugging Face", "Deep Learning"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-6xl font-bold text-center text-white mb-12 serif-font">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-white/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View on GitHub
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
