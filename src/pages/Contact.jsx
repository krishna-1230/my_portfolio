function Contact() {
  return (
    <section className="py-40 bg-transparent">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Contact Me</h2>
      <p className="text-xl text-gray-300 mb-6 text-center max-w-xl mx-auto">
        I'd love to connect with you! Whether you have a question, a project idea, or just want to say hi, feel free to drop me a message below.
      </p>
      <form className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        ></textarea>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
