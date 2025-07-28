// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import unoImage from '../assets/uno.jpg';

const About = () => {
  // No more theme logic needed here.

  return (
    // The main section is transparent to show the global background.
    <section className="relative w-full flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 overflow-hidden bg-transparent">
      
      {/* Main content container with animation */}
      <motion.div
        className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Image - It now looks like it's "peeking" out from behind the card */}
        <motion.div 
          className="flex-shrink-0 z-10"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src={unoImage}
            alt="Eyoab Amare portrait"
            className="w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/50"
          />
        </motion.div>

        {/* Frosted Glass Card for Text */}
        <div 
          className="relative flex-1 bg-white/60 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-xl 
                     p-8 md:p-10 text-center md:text-left md:-ml-8 mt-[-4rem] md:mt-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#57564F]">
            About Me
          </h2>
          <p className="text-lg md:text-xl font-medium text-[#7A7A73] leading-relaxed">
            I am a proactive Software Engineer, known for my fast learning abilities and eagerness to delve deeply into the world of technology. My dedication to leaving a significant and impactful footprint in the software industry fuels my relentless pursuit of excellence. This commitment drives me to consistently strive for the highest standards in my work, and to approach every challenge with a solution-oriented mindset. I am passionate about leveraging my skills and knowledge to make meaningful contributions to the field of software engineering.
          </p>
        </div>

      </motion.div>
    </section>
  );
};

export default About;