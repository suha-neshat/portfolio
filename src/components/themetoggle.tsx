import React, { useEffect, useState } from "react";
import { Lightbulb, LightbulbOff } from "lucide-react";


export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-2/3 sm:top-1/2 right-2 transform -translate-y-1/2 z-50">

      <div
        className="relative h-48 w-6 flex flex-col items-center cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        {/* Vertical wire */}
        <div className="h-full w-0.5 bg-gray-400 dark:bg-gray-300 rounded" />
        {/* Bulb */}
        <div
          className={`absolute w-8 h-8 flex items-center justify-center rounded-full shadow transition-all duration-300 ${
            darkMode
              ? "top-2 bg-yellow-300 text-black"
              : "bottom-2 bg-gray-300 text-white"
          }`}
        >
          {darkMode ? <Lightbulb size={18} /> : <LightbulbOff size={18} />}
        </div>
      </div>
    </div>
  );
}
