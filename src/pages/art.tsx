import React from "react";

const artworks = [
  {
    title: "Runner in Motion",
    description: "Digital artwork capturing the kinetic energy of track sprinting.",
  },
  {
    title: "Stillness & Sprint",
    description: "A minimalist sketch series reflecting duality in sport and tech.",
  },
  {
    title: "Olympic Dream",
    description: "Poster design inspired by personal goals and global ambition.",
  }
];

export default function Art() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-24 max-w-5xl mx-auto font-sans">
      <h1 className="text-4xl font-bold mb-10">Art & Design</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {artworks.map((art, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition">
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center text-gray-500 dark:text-gray-400">
              Image Placeholder
            </div>
            <h2 className="text-xl font-semibold mb-1">{art.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
