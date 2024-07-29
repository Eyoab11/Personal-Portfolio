// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';

import portfolio from '../assets/portfolio.png';
import mestawetimg from '../assets/mestawet.png';
import anbessafitimg from '../assets/anbessafitimg.jpg';
import tictactoeimg from '../assets/tictactoe.png';
import weatherimg from '../assets/weather.png';
import discoverethiopiaimg from '../assets/discoverEthiopia.png';
import memariyaimg from '../assets/memariya.com.png';
import bootstrapimg from '../assets/bootstrap.png';
import backendd from '../assets/backend.png'
const projectData = {
  mestawet: {
    title: 'Social Media Website : Mestawet',
    tech: 'React, Tailwind CSS, Appwrite, ReactQuery, TypeScript',
    status: 'Completed',
    githubLink: 'https://github.com/Eyoab11/mestawet',
    deployedLink: 'https://mestawet-app.vercel.app/',
    image: mestawetimg,
    workType: 'Individual',
  },
  personalPortfolio: {
    title: 'Personal Portfolio',
    tech: 'React, Tailwind CSS',
    status: 'Completed',
    githubLink: 'https://github.com/Eyoab11/portfolio',
    image: portfolio,
    workType: 'Individual',
  },
  anbessaFit: {
    title: 'Backend for Fitness Website',
    tech: 'NestJS, mySQL',
    status: 'Completed',
    githubLink: 'https://github.com/Eyoab11/',
    image: backendd,
    workType: 'Individual',
  },
  fitnessApp: {
    title: 'Fitness Mobile App',
    tech: 'Flutter',
    status: 'Completed',
    githubLink: 'https://github.com/Eyoab11/flutter-2024-AnbessaFit',
    image: anbessafitimg,
    workType: 'Team',
  },
  ticTacToe: {
    title: 'Tic-Tac-Toe',
    tech: 'React, Tailwind, AI Integration',
    status: 'Completed',
    githubLink: 'https://github.com/Eyoab11/PRODIGY_WD_03',
    image: tictactoeimg,
    workType: 'Individual',
  },
  weatherApp: {
    title: 'Weather App',
    tech: 'React, Tailwind, API Integration',
    status: 'Completed',
    githubLink: 'https://github.com/Eyoab11/PRODIGY_WD_05',
    image: weatherimg,
    workType: 'Individual',
  },
  discoverEthiopia: {
    title: 'Discover Ethiopia - Travel Website',
    tech: 'HTML, CSS, JavaScript',
    status: 'Completed',
    githubLink: 'https://github.com/Eyoab11/Discover-Ethiopia',
    deployedLink: 'https://eyoab11.github.io/Discover-Ethiopia/',
    image: discoverethiopiaimg,
    workType: 'Team',
  },
  bootstrapPortfolio: {
    title: 'Portfolio',
    tech: 'Bootstrap',
    status: 'Completed',
    githubLink: 'https://github.com/Eyoab11/UGR-5756-14-bootstrap',
    image: bootstrapimg,
    workType: 'Individual',
  },
  memariya: {
    title: 'Educational Platform - Memariya.com',
    tech: 'MongoDB, React, Tailwind, ExpressJs',
    status: 'Completed',
    githubLink: 'https://github.com/Bemnet-13/Memariya.com',
    image: memariyaimg,
    workType: 'Team',
  },
};

const Projects = () => {
  return (
    <section className="px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(projectData).map(([key, project]) => (
          <div
            className="bg-white rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg relative"
            key={key}
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-xl mb-4"
              />
              <div className="mb-6">
                <div className="text-gray-600 my-2">{project.tech}</div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              <h3 className="text-indigo-500 mb-2">{project.workType} Work</h3>
              <div className="border border-gray-100 mb-5"></div>
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div
                  className={`mb-3 text-lg ${
                    project.status === 'Completed'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  <i className="fa-solid fa-location-dot"></i> {project.status}
                </div>
                <Link
                  to={`/project/${key}`}
                  className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Projects;
