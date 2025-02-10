import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Freelance",
      role: "Website Developer",
      date: "07/2024 – Present",
      location: "Addis Ababa, Ethiopia",
      description:
        "Develop websites for private clients, handling both frontend and backend development, and run tests, managing the entire development process.",
    },
    {
      company: "ITSC",
      role: "UI/UX Designer",
      date: "08/2024 – 11/2024",
      location: "Addis Ababa, Ethiopia",
      description:
        "Designed user-friendly and visually appealing interfaces for web and mobile apps using Figma. Worked closely with developers and stakeholders to bring ideas to life.",
    },
    {
      company: "YBS Software Development",
      role: "Full-Stack Developer",
      date: "01/2025 – Present",
      location: "Addis Ababa, Ethiopia",
      description:
        "Build and maintain web applications using Next.js, React, Node.js, and Django. Work on both frontend and backend, creating responsive interfaces and reliable systems.",
    },
  ];

  return (
    <section className="px-4 py-10 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ company, role, date, location, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 transition-transform transform hover:-translate-y-2 hover:shadow-lg">
    <h3 className="text-xl font-bold text-indigo-600">{company}</h3>
    <p className="text-gray-800 font-semibold">{role}</p>
    <p className="text-gray-500 text-sm">{date} | {location}</p>
    <div className="border-b border-gray-200 my-4"></div>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Experience;
