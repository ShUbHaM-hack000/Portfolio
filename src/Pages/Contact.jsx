import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full mb-4 p-2 border rounded"></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
