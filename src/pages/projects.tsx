import React from "react";

const projects = [
  {
    title: "Paris Olympics Data Analysis Using Azure",
    description: "Data Engineering project focusing on the analysis of Paris Olympic Data using Microsoft Azure, Azure Data Lake, ADF, Databricks, Power BI",
    link: "#"
  },
  {
    title: "Mandelbrot & Julia Set Fractal Generator",
    description: "Generates stunning mandelbrot and Julia set fratals with color schemes and produces high resolution 16k images and supports 5000 iterations per pixel. Tools used: C++",
    link: "#"
  },
  {
    title: "Spotify Mood Playlist",
    description: "C# web app that lets user login with Spotify, select a mood and recieve a playlist. Tools used are : C#/ ASP.Net Core, Tailwind, SpotifyAPI-NET, SQL.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
