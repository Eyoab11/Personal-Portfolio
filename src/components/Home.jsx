// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
// The import for useTheme should already be deleted.

const Home = () => {
  // The line `const { isDarkMode } = useTheme();` should already be deleted.

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen py-24 px-4 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight drop-shadow-lg">
          {/* FIX: Hardcoded class, removed conditional logic */}
          <TypeAnimation
            sequence={["Hi, I'm Eyoab."]}
            wrapper="span"
            speed={40}
            cursor={true}
            className={'text-[#57564F]'}
          />
          <br />
          {/* FIX: Hardcoded class, removed conditional logic */}
          <TypeAnimation
            sequence={[1800, 'A Software Engineer.']}
            wrapper="span"
            speed={40}
            cursor={true}
            className={'bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-sky-700'}
          />
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 4.0 }}
        >
            {/* FIX: Hardcoded class, removed conditional logic */}
            <p
              className={'mt-6 text-lg md:text-xl text-center max-w-2xl font-medium text-[#7A7A73]'}
            >
              I'm passionate about crafting experiences that are engaging, accessible, and user-centric. 
              My goal is to deliver business value while leveling up my skills as a developer in a collaborative environment.
            </p>
            {/* FIX: Link to Upwork profile instead of contact section */}
            <a
              href="https://www.upwork.com/freelancers/~017f037b52b209159c"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center justify-center mt-10 text-lg font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300
                bg-[#57564F] text-[#F8F3CE] hover:bg-black
                transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-800/50
              `}
            >
              Hire Me on Upwork
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;