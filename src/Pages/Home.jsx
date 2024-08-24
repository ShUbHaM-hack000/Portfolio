// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm [SHUBHAM UPADHYAYA]</h2>
      <p className="mt-4 text-lg md:text-xl">A passionate web developer.</p>
      <a href="#projects" className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
        View My Work
      </a>
    </section>
  );
};

export default Home;
