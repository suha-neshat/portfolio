import React from "react";
import { Link } from "react-router-dom";
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-16 bg-[#fef9f2] dark:bg-[#1a1a1a] text-black dark:text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I’m <span className="text-[#7d4e57] dark:text-yellow-300">Suha</span>.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a Computer Engineering Graduate from  <span className="text-[#7d4e57] dark:text-yellow-300">Toronto Metropolitan University.</span> I'm a curious and driven learner with a strong passion for software development, data engineering, and building systems that solve real-world problems. I enjoy the process of learning new technologies, experimenting with ideas, and turning complex data into meaningful insights.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
  Outside of work I really enjoy playing guitar, collecting old film cameras, doing bikepacking trip and reading. 
</p>
        <div className="space-x-4">
  <Link to="/projects" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">See My Work</Link>
  <Link to="/experience" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">Experience</Link>
</div>

      </section>


      {/* Social Section */}
      <section className="max-w-3xl mx-auto mt-12 px-2">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Elsewhere:</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="https://github.com/suha-neshat" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">GitHub</a>
          <a href="https://linkedin.com" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">LinkedIn</a>
          <a href="mailto:suhaneshat@gmail.com" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">Email</a>
        </div>
      </section>
    </div>
  );
}
