import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Currency Converter',
      description: 'Developed a responsive currency converter using ReactJS and Tailwind CSS. This application offers real-time currency conversions with a modern, intuitive interface. ReactJS ensures efficient state management, while Tailwind CSS provides a sleek, utility-first design. The tool supports multiple currencies and delivers accurate exchange rates for seamless conversions.',
      link: 'https://currency-converter-nine-cyan.vercel.app/',
    },
    {
      title: 'News App',
      description: 'Created a news app using React.js to keep the code modular and easy to manage. The app pulls in real-time news from various APIs and includes search, category filters, and a design that works well on any device. It highlights skills in React.js, state management, and handling data. The app provides a user-friendly and intuitive experience.',
      link: '',
    },
    {
      title: 'Tic Tac Toe',
      description: 'Developed a classic Tic Tac Toe game using HTML, CSS, and JavaScript, showcasing front-end web development skills. Features include intuitive gameplay, responsive design, and strong game logic. Provides a user-friendly experience across devices. Highlights proficiency in creating engaging web applications.',
      link: '',
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;


