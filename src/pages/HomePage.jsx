// src/pages/HomePage.jsx
import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience'
import Certificates from '../components/Certificates';
// We REMOVED the NavBar import from here

const HomePage = () => {
  return (
    // We don't need the outer fragment anymore.
    // The main container for all your sections.
    <div className="bg-transparent">
      {/* We REMOVED the <NavBar /> from here. It's now in App.jsx */}

      {/* Each section is a direct child */}
      <div id="home">
        <Home />
      </div>
      
      <div id="about" className="pt-24">
        <About />
      </div>
      
      <div id="experience" className="pt-24">
        <Experience />
      </div>
      
      <div id="certificates" className="pt-24">
        <Certificates />
      </div>

      <div  id="projects" className="pt-24">
        <Projects />
      </div>
      
      {/* Removed Contact section. The CTA now links to Upwork. */}
    </div>
  );
};

export default HomePage;