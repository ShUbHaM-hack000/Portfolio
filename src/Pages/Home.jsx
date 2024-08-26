import React from 'react';
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white">
      <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Shubham Upadhyaya</h2>
      <p className="mt-4 text-lg md:text-xl">A passionate web developer.</p>
      <a href="#projects" className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
        View My Work
      </a>
      <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/file/d/1ftZsxcmiL8U-GKeMmiZjW8Mx93_njNY4/view?usp=drivesdk" // Replace with the URL to your CV file
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Download CV
          </a>
        </div>
    </section>
  );
};

export default Home;


