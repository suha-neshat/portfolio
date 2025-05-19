import React from "react";

const projects = [
  {
    title: "Olympics Data Analysis with Azure",
    description: "Built predictive models and dashboards for athlete performance analytics.",
    link: "#"
  },
  {
    title: "Invoice Tracker RAG App",
    description: "Extracted and summarized invoice data using LangChain and OpenAI.",
    link: "#"
  },
  {
    title: "Running Shoe Recommender",
    description: "A web app using TypeScript that suggests shoes based on user input.",
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
