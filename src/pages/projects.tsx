
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Skateboard Classifier",
    description:
      "Final project for Computer Vision: A Python-based computer vision project that classifies skateboard tricks from video input using CNNs. Users can upload clips or record real-time footage, and the system identifies tricks like kickflips, heelflips, or ollies. It also logs trick success rates and displays predictions on video.",
    tools: "Python, Julia",
    link: "https://skateboard.herokuapp.com/",
  },
  {
    title: "Mandelbrot & Julia Set Fractal Generator",
    description:
      "Generates Mandelbrot and Julia set fractals with custom color schemes. Supports up to 5000 iterations per pixel and renders high-resolution 16K images.",
    tools: "C++",
    link: "https://fg.herokuapp.com/",
  },
  {
    title: "Spotify Mood Playlist",
    description:
      "A C# web app where users log in with Spotify, select a mood, and receive a tailored playlist.",
    tools: "C#/ASP.NET Core, Tailwind, SpotifyAPI-NET, SQL",
    link: "https://spotifyplaylist.herokuapp.com/",
  },
];

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {project.description}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              <strong>Tools used:</strong> {project.tools}
            </p>
            <a
              href={project.link}
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
