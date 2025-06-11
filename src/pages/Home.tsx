import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const questions = [
  "What drives your curiosity?",
  "What project are you most proud of?",
  "What would Suha build next?",
  "What inspires your creativity?"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % questions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen px-6 py-16 bg-[#fef9f2] dark:bg-[#1a1a1a] text-black dark:text-white font-sans overflow-hidden">
      {/* Star Noise Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

      {/* Floating Blobs */}
      <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] rounded-full bg-accent opacity-20 blur-2xl animate-floatSlow" />
      <div className="absolute bottom-[-80px] right-[-100px] w-[250px] h-[250px] rounded-full bg-accent-light opacity-20 blur-2xl animate-floatSlow2" />

      {/* Floating Question Box */}
      <motion.div
        className="absolute top-[160px] right-[100px] w-[220px] px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-md rounded-md text-sm text-center z-10"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {questions[index]}
      </motion.div>

      {/* Main Text Section */}
      <section className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed space-y-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center md:text-left"
        >
          Hi, I’m <span className="text-[#7d4e57] dark:text-yellow-300">Suha</span>.
        </motion.h1>

        <p className="text-gray-700 dark:text-gray-300">
          I'm a Computer Engineering Graduate from <span className="text-[#7d4e57] dark:text-yellow-300">Toronto Metropolitan University.</span> I'm a curious and driven learner with a strong passion for software development, data engineering, and building systems that solve real-world problems. I enjoy the process of learning new technologies, experimenting with ideas, and turning complex data into meaningful insights.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          Outside of work I really enjoy playing guitar, collecting old film cameras, snowboarding and reading. I have travelled to almost 30 different countries and have biked across Europe. I'm also a distance runner hoping to represent Tunisia in the 2028 LA Olympics.
        </p>

        <div className="flex flex-wrap gap-6 mt-4">
          <Link
            to="/projects"
            className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300"
          >
            See My Work
          </Link>
          <Link
            to="/experience"
            className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300"
          >
            Experience
          </Link>
        </div>
      </section>

      {/* Beep Beep Mountains - Bottom Left */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:block animate-floatSlow">
        <img
          src="/Beep Beep - Little Mountains 2.png"
          alt="mountains"
          className="w-28 sm:w-36"
        />
      </div>

      {/* Beep Beep Clouds - Top Right */}
      <div className="absolute top-8 right-8 z-0 hidden sm:block animate-floatSlow2">
        <img
          src="/Beep Beep - Clouds.png"
          alt="clouds"
          className="w-36 sm:w-44 opacity-70"
        />
      </div>

      {/* Social Links */}
      <section className="max-w-4xl mx-auto mt-12 px-2 relative z-10">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Elsewhere:</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/suha-neshat"
            className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:suhaneshat@gmail.com"
            className="underline hover:text-[#7d4e57] dark:hover:text-yellow-300"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
