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
          I craft thoughtful digital experiences as a software developer, engineer, and runner in training for the 2028 Olympics.
          My work lives at the intersection of performance, design, and problem-solving.
        </p>
        <div className="space-x-4">
          <Link to="/projects" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">See My Work</Link>
          <Link to="/contact" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">Contact</Link>
        </div>
      </section>

      {/* TLDR Section */}
      <section className="max-w-3xl mx-auto mt-16 space-y-4 text-sm text-gray-600 dark:text-gray-400 px-2">
        <h2 className="font-semibold uppercase tracking-wide text-xs text-[#7d4e57] dark:text-yellow-300">TL;DR</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Currently building full-stack apps using React, TypeScript, and Python</li>
          <li>Fascinated by the overlap of storytelling and software</li>
          <li>Training for long-distance running (5K, 10K)</li>
        </ul>
      </section>

      {/* Social Section */}
      <section className="max-w-3xl mx-auto mt-12 px-2">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Elsewhere:</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="https://github.com" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">GitHub</a>
          <a href="https://linkedin.com" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">LinkedIn</a>
          <a href="mailto:suha@example.com" className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300">Email</a>
        </div>
      </section>
    </div>
  );
}
