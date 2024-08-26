import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full p-8" style={{ backgroundColor: '#F0E68C' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-center text-lg mb-4">
          Hi, I'm Shubham Upadhyaya. Welcome to my portfolio! I’m a passionate web developer with a strong focus on front-end development. My expertise lies in creating dynamic and responsive web applications using modern technologies like ReactJS, Tailwind CSS, and JavaScript.
        </p>
        <p className="text-center text-lg">
          I thrive on solving complex problems through clean, efficient code and have a keen eye for detail when it comes to UI/UX design. Whether it's building sleek interfaces or ensuring a seamless user experience, I am dedicated to crafting web experiences that are both functional and visually appealing.
        </p>
      </div>
    </section>
  );
};

export default About;


