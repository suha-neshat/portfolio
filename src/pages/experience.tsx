
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Ontario Teachers’ Pension Plan",
    type: "Internship",
    date: "Jan 2025 – April 2025",
    points: [
      "Built an AI system using embeddings, cosine similarity, and LLMs to analyze tech trends and update insights via a Streamlit dashboard.",
      "Implemented data pipelines with SQL and Snowflake to enhance data flow and accessibility.",
      "Developed and tuned LlamaIndex agents to run MDX queries, visualize risk exposure."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Ontario Teachers’ Pension Plan",
    type: "Internship",
    date: "Jan 2024 – Aug 2024",
    points: [
      "Automated workflows using C#, SQL and Jenkins, contributed to deployment workflows AKS",
      "Created POCs for Airflow and pipelines on AKS"
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
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-15px] top-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-white dark:border-black" />

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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
