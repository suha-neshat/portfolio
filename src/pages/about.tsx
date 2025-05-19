import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white px-6 py-24 max-w-4xl mx-auto font-sans">
      <h1 className="text-5xl font-semibold mb-6">Suha Neshat</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl">
        I’m a software developer, designer, and future Olympian blending creativity and code to build powerful, people-centered digital products.
      </p>
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-2">About Me</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
          With a background in software engineering and design, I focus on creating intuitive, thoughtful, and impactful applications. Whether it's building scalable back-end systems or pixel-perfect front-end interfaces, I aim to make meaningful products that enhance people's lives.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-2">Tech Stack</h2>
        <p className="text-gray-800 dark:text-gray-200">
          TypeScript, React, Next.js, Python, SQL, Azure, Power BI, C#, Java, Git, Tailwind CSS, Figma
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-2">Experience</h2>
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1">
          <li>Software Developer Intern @ Ontario Teachers’ Pension Plan</li>
          <li>Data Engineer @ Transport Canada</li>
          <li>Back-End Developer | Freelance & Personal Projects</li>
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-2">Outside the Screen</h2>
        <p className="text-gray-800 dark:text-gray-200">
          When I’m not coding, I’m training to qualify for the 2028 Olympics, exploring cafés, or catching up on new tech trends.
        </p>
      </section>
      <section className="flex flex-wrap gap-4">
        <a href="mailto:suha@example.com" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200">
          Let's Connect
        </a>
        <Link to="/projects" className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          View Projects
        </Link>
        <Link to="/contact" className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          Contact
        </Link>
      </section>
    </div>
  );
}
