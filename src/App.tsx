import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Projects from "./pages/projects";
import Experience from "./pages/experience";

import Contact from "./pages/contact";
import ThemeToggle from "./components/themetoggle"; 

export default function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
