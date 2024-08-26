const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://www.linkedin.com/in/shubham-upadhyaya-927398226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:underline"
          >
            Connect with me on LinkedIn
          </a>
          
          <a
            href="mailto:your-email@example.com"
            className="text-xl text-white hover:underline"
          >
            Email me: shubhamupadhyaya6@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;


