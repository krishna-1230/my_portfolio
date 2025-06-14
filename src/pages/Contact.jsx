import { useState, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaReddit } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Custom Hugging Face SVG Icon
const HuggingFaceIcon = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="currentColor" />
    <ellipse cx="11.5" cy="15.5" rx="1.5" ry="2" fill="#000" />
    <ellipse cx="20.5" cy="15.5" rx="1.5" ry="2" fill="#000" />
    <path d="M10 20c1.5 2 6.5 2 8 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <ellipse cx="16" cy="24" rx="6" ry="2" fill="currentColor" />
  </svg>
);

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  // EmailJS handler
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Get environment variables - in Vite, all env variables must be prefixed with VITE_
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // Log the values for debugging (remove in production)

    // Fallback to hardcoded values if env vars are not available
    const finalServiceId = serviceId;
    const finalTemplateId = templateId;
    const finalPublicKey = publicKey;

    emailjs.sendForm(
      finalServiceId,
      finalTemplateId,
      form.current,
      {
        publicKey: finalPublicKey,
      }
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      form.current.reset();
      setLoading(false);
    }, (error) => {
      console.log('FAILED...', error.text);
      setStatus({
        submitted: true,
        success: false,
        message: `There was an error sending your message: ${error.text}. Please try again later.`
      });
      setLoading(false);
    });
  };

  return (
    <section className="py-40 bg-transparent">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Contact Me</h2>
      <p className="text-xl text-gray-300 mb-6 text-center max-w-xl mx-auto">
        I'd love to connect with you! Whether you have a question, a project idea, or just want to say hi, feel free to drop me a message below or reach out through any of the platforms below.
      </p>
      {/* Contact Links */}
      <div className="flex justify-center gap-6 mb-10">
        <a href="mailto:krishspyk1230@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl transition-colors" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/krishna-gopal-v-s-/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl transition-colors" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/krishna-1230" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl transition-colors" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.reddit.com/user/Longjumping_Rub_2874/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl transition-colors" title="Reddit">
          <FaReddit />
        </a>
        <a href="https://huggingface.co/krishspyk123" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl transition-colors" title="Hugging Face">
          <HuggingFaceIcon style={{ display: 'inline', verticalAlign: 'middle', marginTop: '-9px', position: 'relative', top: '-2px' }} />
        </a>
      </div>
      
      {/* Contact Form */}
      <div className="max-w-md mx-auto bg-zinc-900/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-zinc-800/100">
        {status.submitted ? (
          <div className={`p-4 mb-4 rounded-md ${status.success ? 'bg-blue-500/20 text-blue-200' : 'bg-red-500/20 text-red-200'}`}>
            <p>{status.message}</p>
            {status.success && (
              <button 
                onClick={() => setStatus({ submitted: false, success: false, message: '' })}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Another Message
              </button>
            )}
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="user_name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-700 rounded-md bg-zinc-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="user_email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-700 rounded-md bg-zinc-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-700 rounded-md bg-zinc-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <span className="inline-block animate-spin mr-2">⟳</span>
              ) : null}
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
