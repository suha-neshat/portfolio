import React from "react";

const experiences = [
  {
    title: "Professional Athlete",
    company: "HOKA",
    type: "Full-time",
    date: "April 2025 – Present",
    points: [
      "Training professionally with HOKA to qualify for the 2028 Olympics.",
      "Specializing in mid-distance running with a 5K personal record of 15:05."
    ]
  },
  
  {
    title: "Software Developer Intern",
    company: "Ontario Teachers’ Pension Plan",
    type: "Internship",
    date: "Jan 2025 – April 2025",
    points: [
      "Built an AI newsletter chatbot using OpenAI, Python, ChromaDB, SQLite, and Streamlit.",
      "Automated biweekly newsletter delivery using Airflow to surface cloud, AI, and data analytics articles."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Ontario Teachers’ Pension Plan",
    type: "Internship",
    date: "Jan 2024 – May 2024",
    points: [
      "Developed a testing utility using Java, JavaScript, HTML/CSS, SQL, and RPG."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Nike",
    type: "Internship",
    date: "May 2022 – April 2023",
    points: [
      "Contributed to optimizing CI/CD pipelines to support faster and more reliable deployments.",
      "Assisted in building tools to automate reporting of deployment quality metrics.",
      "Collaborated with the Cloud Acceleration and Finance teams on features for Nike’s global tax platform."
    ]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#fef9f2] dark:bg-[#1a1a1a] text-black dark:text-white px-6 py-20 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h1>

      <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-6 space-y-12 max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-[-15px] top-1 w-3.5 h-3.5 rounded-full bg-rose-600 border-2 border-white dark:border-black" />

            {/* Entry */}
            <p className="text-sm text-gray-500 dark:text-gray-400 capitalize tracking-wide">{exp.date}</p>
            <h2 className="text-lg md:text-xl font-semibold mt-1">{exp.title}</h2>
            <p className="text-sm text-[#7d4e57] dark:text-yellow-300 font-medium mb-2">
              {exp.company} · {exp.type}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
