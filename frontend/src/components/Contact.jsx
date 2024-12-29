import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-md" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded-md"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-md">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
