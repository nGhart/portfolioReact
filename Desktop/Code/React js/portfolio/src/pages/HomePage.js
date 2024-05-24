import React from 'react';
import Skills from '../components/skills/Skills';
import About from '../components/about/About';
import Project from '../components/projects/Project';
import Contact from '../components/contact/Contact';
import './homepage.scss';

const HomePage = () => {
  return (
    <section className="home">
      <div className="homeSection">
        <About />
      </div>
      <div className="homeSectionSkills">
        <Skills />
      </div>
      <div className="homeSectionProject">
        <Project />
      </div>
      <div className="homeSectionContact">
        <Contact />
      </div>
    </section>
  );
};

export default HomePage;
