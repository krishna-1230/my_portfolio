import { FaEnvelope, FaLinkedin, FaGithub, FaReddit } from 'react-icons/fa';
import emailjs from 'emailjs-com';

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
  // EmailJS handler
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,      // EmailJS Service ID from .env
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,     // EmailJS Template ID from .env
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY       // EmailJS Public Key from .env
    )
    .then(() => {
      alert('Message sent!');
      e.target.reset();
    }, () => {
      alert('Failed to send message.');
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
        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl transition-colors" title="Email">
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
      <form
        className="max-w-md mx-auto bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-lg"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          required
        ></textarea>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
