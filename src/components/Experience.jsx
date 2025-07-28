import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "YBS Software Development",
    role: "Frontend and Mobile Developer",
    date: "01/2025 – Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Built and maintained web and mobile applications using React and Flutter.",
  },
  {
    company: "Information Network Security Agency",
    role: "CyberSecurity Engineer",
    date: "03/2025 – 06/2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed an AI-powered cybersecurity tool for real-time threat detection using traffic analysis, log monitoring, and file inspection. Integrated machine learning models for automated threat detection and response using Python.",
  },
  {
    company: "Addis Ababa Institute of Technology",
    role: "Software Engineer",
    date: "12/2024 – 05/2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Designed and built full-stack web applications with the MERN stack. Managed documentation and project requirements for robust, scalable solutions.",
  },
  {
    company: "Ethio Advise Group",
    role: "Software Engineer",
    date: "02/2025 – Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed and maintained full-stack web applications using PHP frameworks and JavaScript. Implemented DevOps practices for efficient, scalable solutions.",
  },
  {
    company: "ITSC",
    role: "UI/UX Designer",
    date: "08/2024 – 11/2024",
    location: "Addis Ababa, Ethiopia",
    description:
      "Designed user-friendly, visually appealing interfaces for web and mobile apps using Figma. Collaborated with developers and stakeholders to deliver high-quality designs.",
  },
  {
    company: "Freelance",
    role: "Developer",
    date: "07/2023 – 2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed full-stack websites for private clients, covering frontend and backend. Managed testing and the entire development process from start to finish.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Experience = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[60vh] py-16 bg-transparent overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#57564F] mb-12 text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Professional Experience
      </motion.h2>
      <motion.div
        className="w-full max-w-6xl flex flex-col gap-12 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 rgba(87,86,79,0.15)" }}
            whileTap={{ scale: 1.05 }}
            className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 px-6 py-10 md:px-12 md:py-14 rounded-3xl bg-white/80 border-l-8 border-[#F8F3CE] shadow-2xl transition-all duration-300 w-full min-h-[220px] md:min-h-[260px] lg:min-h-[300px]"
          >
            {/* Vertical accent bar for mobile */}
            <div className="absolute left-0 top-6 bottom-6 w-2 bg-[#F8F3CE] rounded-full md:hidden" />
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#57564F] mb-1">{exp.role}</h3>
              <div className="text-lg md:text-2xl font-semibold text-[#7A7A73] mb-1">{exp.company}</div>
              <div className="text-sm md:text-base text-[#7A7A73] mb-2">{exp.date} | {exp.location}</div>
              <p className="text-[#57564F] text-base md:text-lg lg:text-xl leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
