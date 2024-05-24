import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="project" element={<Project />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default Routing;
