import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Direct GitHub raw file link
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1hJonndxS2n1Lx4U2hLfAgRtgPjIjbDwx";
    
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Krishna_Gopal_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="p-6 pt-20 md:p-20 md:pt-12">
      <section className="flex items-center justify-center min-h-screen w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-1 w-full max-w-[90rem] px-4 py-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              HI, I'M <span className="text-blue-400">KRISHNA GOPAL V.S</span>
              <br />
              <span className="text-gray-200 text-5xl md:text-5xl">VIBE CODER,</span>
              <br />
              <span className="text-gray-200 text-5xl md:text-5xl">TECH ENTHUSIAST</span>
            </h1>
            
            <p className="text-lg mt-8 mb-10">
              I create beautiful and functional web applications with a focus on user experience and performance.
            </p>
            
            <div className="flex gap-6 mb-10">
              <a href="https://github.com/krishna-1230" aria-label="GitHub" className="text-white hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/krishna-gopal-v-s-/" aria-label="LinkedIn" className="text-white hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a href="mailto:krishspyk1230@gmail.com" aria-label="Email" className="text-white hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("projects")} 
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 transition-colors rounded-full text-white font-medium"
              >
                View Projects
              </button>
              <button 
                onClick={downloadResume} 
                className="px-8 py-4 border bg-blue-500/20 border-blue-400/50 backdrop-blur-sm hover:bg-blue-500/30 transition-all rounded-full text-white font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </button>


              <button 
                onClick={() => scrollToSection("contact")} 
                className="px-8 py-4 border bg-zinc-900/70 border-gray-700 backdrop-blur-sm hover:border-blue-500 hover:text-blue-500 transition-all rounded-full text-white font-medium"
              >
                Contact Me
              </button>
              
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 rounded-3xl bg-zinc-900/30 backdrop-blur-md p-8 border border-zinc-800/90">
            <h2 className="text-3xl font-bold mb-6">What I Do</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold">Cloud Computing</h3>
                </div>
                <p className="text-gray-400 ml-5">
                Exploring AWS cloud services and deployment techniques to understand and enhance cloud infrastructure and system scalability.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold">Web Development</h3>
                </div>
                <p className="text-gray-400 ml-5">
                  Creating responsive and performant web applications with modern technologies and best practices.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold">Automation</h3>
                </div>
                <p className="text-gray-400 ml-5">
                  Developing efficient automation solutions to streamline everyday tasks and improve productivity.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold">Generative AI</h3>
                </div>
                <p className="text-gray-400 ml-5">
                  Leveraging AI tools to enhance creativity and generate unique content across various domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
