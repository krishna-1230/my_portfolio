import React from "react";
import { motion } from "framer-motion";

function TimelineItem({ year, title, company, description, skills }) {
  return (
    <motion.div 
      className="relative pl-8 sm:pl-12 py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-7 sm:top-8 h-4 w-4 rounded-full bg-blue-500 border-2 border-zinc-900"></div>
      
      {/* Timeline line */}
      <div className="absolute left-[7px] sm:left-[7px] top-0 h-full w-[3px] bg-blue-500/40"></div>
      
      {/* Content */}
      <motion.div 
        className="bg-zinc-900/40 backdrop-blur-sm p-5 rounded-lg border border-zinc-800/50 hover:border-blue-500/40 transition-all duration-300"
        whileHover={{ scale: 1.00 }}
      >
        <span className="text-blue-400 text-sm font-medium">{year}</span>
        <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        <p className="text-white/90 font-medium mt-1">{company}</p>
        <p className="text-gray-300 mt-3">{description}</p>
        {skills && (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function Experience() {
  const experiences = [
    {
      year: "2024 December - Present",
      title: "Full Stack Developer",
      company: "Freelancer",
      description: "Developed a multi-role e-commerce platform enabling seamless customer shopping, streamlined merchant onboarding, and efficient admin management.",
      skills: ["React", "Next.js", "Golang", "MySQL", "Postman"]
    },
    {
      year: "November - December 2024",
      title: "Full Stack Developer Intern",
      company: "HappyPlus",
      description: "Worked as a Full Stack Intern, gaining hands-on experience by building projects like a task manager app and a blog website using modern web technologies.",
      skills: ["React", "JavaScript", "Python", "MySQL", "Git"]
    },
    {
      year: "August 2024",
      title: "Prompt Engineering Intern",
      company: "Skillible",
      description: "Completed an internship in prompt engineering, gaining hands-on experience in crafting and fine-tuning prompts for optimized generative AI outputs.",
      skills: ["Prompt Engineering", "GenAI", "AI Tools"]
    },    
    {
      year: "July 2024",
      title: "AI enginner Intern",
      company: "Ether Infotech",
      description: "Fine-tuned a LLaMA model using a custom dataset for domain-specific generative tasks.",
      skills: ["LLaMA", "GenAI", "Finetuning"]
    }
  ];

  return (
    <section id="experience" className="border-2 border-gray-800 rounded-3xl p-4 md:p-16 backdrop-blur-sm bg-white/5">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-10 text-center text-white-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            year={exp.year}
            title={exp.title}
            company={exp.company}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience; 