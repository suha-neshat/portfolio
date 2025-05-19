import React from "react";

export default function Experience() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-24 max-w-4xl mx-auto font-sans">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Ontario Teachers’ Pension Plan</h2>
          <p className="text-gray-700 dark:text-gray-300 italic">Software Developer Intern</p>
          <p className="text-gray-800 dark:text-gray-200 mt-2">
            Designed UI features, built internal tools, and contributed to scalable front-end architecture using JavaScript and React.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Transport Canada</h2>
          <p className="text-gray-700 dark:text-gray-300 italic">Data Engineer</p>
          <p className="text-gray-800 dark:text-gray-200 mt-2">
            Streamlined ETL pipelines, automated data workflows using Python and SQL, and deployed dashboards to visualize transportation metrics.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Freelance Projects</h2>
          <p className="text-gray-700 dark:text-gray-300 italic">Backend Developer & Designer</p>
          <p className="text-gray-800 dark:text-gray-200 mt-2">
            Delivered full-stack solutions and optimized APIs for education and fitness sector clients.
          </p>
        </div>
      </div>
    </div>
  );
}
