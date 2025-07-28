// Projects.js
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Import project images

import financialnews from "../assets/financial-news-sentiment.png"
import creditrust from "../assets/creditrust.png"
import ethiomart from "../assets/ethiomart.png"
import bankcredit from "../assets/bank-credit.png"
import fintechreview from "../assets/fintech-review.png"
import insurance from "../assets/insurance.png"
import kara from "../assets/kara.png"
import stockmarket from "../assets/stock-market-analysis.png"

import phdMonitoringImg from "../assets/phdmonitoringimg.jpg"
import talentmobile from "../assets/talentdiscoverymobile.jpg"
import debale from "../assets/debale.jpg"
import blog from "../assets/blog.png"
import partnership from "../assets/partnership.png"
import talentfront from "../assets/talentdiscoveryfront.png"
import ethdelivery from "../assets/ethdelivery.jpg"
import mestawetimg from '../assets/mestawet.png';
import anbessafitimg from '../assets/anbessafitimg.jpg';

import discoverethiopiaimg from '../assets/discoverEthiopia.png';
import memariyaimg from '../assets/memariya.com.png';

import backendd from '../assets/backend.png';
import dh from '../assets/dh.png';
import taitu from '../assets/taitu.png';
import machine from '../assets/machine.jpg';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'fullstack', label: 'Fullstack' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'ai', label: 'AI' },
  { key: 'cybersecurity', label: 'Cybersecurity' },
];

// --- CORRECTED projectData ARRAY ---
const projectData = [
  {
    key: 'mestawet',
    title: 'Social Media Website : Mestawet',
    tech: 'React, Tailwind CSS, Appwrite, ReactQuery, TypeScript',
    image: mestawetimg,
    category: ['fullstack'],
  },
  {
    key: 'phdMonitoringSystem',
    title: 'PhD Monitoring System',
    tech: 'React, Tailwind CSS, ExpressJs, MongoDB, NodeJs',
    image: phdMonitoringImg,
    category: ['fullstack'],
  },
  {
    key: 'machineLearning',
    title: 'Machine Learning Projects',
    tech: 'Python',
    image: machine,
    category: ['ai'],
  },
  {
    key: 'anbessaFit',
    title: 'Backend for Fitness Website',
    tech: 'NestJS, MySQL',
    image: backendd,
    category: ['backend'],
  },
  {
    key: 'DHJava',
    title: 'DH Java Implementation',
    tech: 'Java',
    image: dh,
    category: ['cybersecurity'],
  },
  {
    key: 'taituHotel',
    title: 'Taitu Hotel',
    tech: 'React, Tailwind, Google Maps Embed',
    deployedLink: 'https://taitu-hotel.vercel.app/',
    image: taitu,
    category: ['frontend'],
  },
  {
    key: 'fitnessApp',
    title: 'Fitness Mobile App',
    tech: 'Flutter',
    image: anbessafitimg,
    category: ['mobile'],
  },
  {
    key: 'aauPartnershipSystem',
    title: 'AAU Partnership Management System',
    tech: 'MongoDB, ExpressJs, NodeJs',
    image: partnership,
    category: ['backend', 'cybersecurity'],
  },
  {
    key: 'ethDelivery',
    title: 'EthDelivery',
    tech: 'flutter',
    image: ethdelivery,
    category: ['mobile'],
  },
  {
    key: 'discoverEthiopia',
    title: 'Discover Ethiopia - Travel Website',
    tech: 'HTML, CSS, JavaScript',
    deployedLink: 'https://eyoab11.github.io/Discover-Ethiopia/',
    image: discoverethiopiaimg,
    category: ['frontend'],
  },
  {
    key: 'talentDiscovery',
    title: 'Talent Discovery Mobile',
    tech: 'Flutter, Riverpod',
    image: talentmobile,
    category: ['mobile'],
  },
  {
    key: 'talentDiscoveryFront',
    title: 'Talent Discovery Frontend',
    tech: 'React, Tailwind, Typescript',
    image: talentfront,
    category: ['frontend'],
  },
  {
    key: 'memariya',
    title: 'Educational Platform - Memariya.com',
    tech: 'MongoDB, React, Tailwind, ExpressJs',
    image: memariyaimg,
    category: ['fullstack'],
  },
  {
    key: 'financialNewsAnalysis',
    title: 'Financial News Analysis Project',
    tech: 'Python, Pandas, NLTK, TextBlob, TA-Lib',
    image: financialnews,
    category: ['ai'],
  },
  {
    key: 'stockMarketAnalysis',
    title: 'Stock Market Analysis with News Sentiment',
    tech: 'Python, TA-Lib, TextBlob, NLTK, Pandas',
    image: stockmarket,
    category: ['ai'],
  },
  {
    key: 'fintechReviewsAnalytics',
    title: 'Fintech Reviews Analytics - Ethiopian Banks',
    tech: 'Python, Oracle XE, VADER, TextBlob, Pandas',
    image: fintechreview,
    category: ['ai'],
  },
  {
    key: "insuranceRiskAnalytics",
    title: "Car Insurance Risk Analysis & Predictive Modeling",
    tech: "Python, DVC, Scikit-learn, SHAP, Pandas",
    image: insurance,
    category: ['ai'],
  },
  {
    key: "ethioMartVendorAnalytics",
    title: "EthioMart: Amharic E-commerce Data Extractor",
    tech: "Python, Hugging Face Transformers, Telethon, PyTorch",
    image: ethiomart,
    category: ['ai'],
  },
  {
    key: "bankCreditScoring",
    title: "Alternative Data Credit Risk Model",
    tech: "Python, Scikit-learn, MLflow, FastAPI, Docker",
    image: bankcredit,
    category: ['ai'],
  },
  {
    key: "crediTrustFeedbackBot",
    title: "CrediTrust Feedback Bot - CFPB Complaints Analysis",
    tech: "Python, Pandas, LangChain, HuggingFace, FAISS, CFPB Dataset",
    image: creditrust,
    category: ['ai'],
  },
  {
    key: "karaHealthELT",
    title: "Kara Health - Medical Telegram Analytics Pipeline",
    tech: "Python, PostgreSQL, dbt, FastAPI, Dagster, YOLOv8, Docker",
    image: kara,
    category: ['ai'],
  },
  {
    key: 'personalBlog',
    title: 'Personal Blog Website',
    tech: 'React, Tailwind, Supabase, MongoDB',
    image: blog,
    category: ['fullstack'],
  },
  {
    key: 'debalE',
    title: 'DebalE: Roommates finder website',
    tech: 'Flutter',
    image: debale,
    category: ['mobile'],
  },
];
// --- END CORRECTED DATA ---

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hovered, setHovered] = useState(null);
  const [tapped, setTapped] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projectData;
    }
    return projectData.filter(project => 
      project.category.some(cat => cat === activeCategory)
    );
  }, [activeCategory]);
  const handleCardTap = (e, key) => {
    if (e.target.closest('a')) {
      return;
    }
    e.preventDefault();
    setTapped(tapped === key ? null : key);
  };

  return (
    <section id="projects" className="relative w-full flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-transparent overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#57564F] mb-12 text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        My Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 z-10 px-4">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2 rounded-full font-semibold text-base md:text-lg transition-all duration-300 border-2
              ${activeCategory === cat.key
                ? 'bg-[#57564F] text-[#F8F3CE] border-[#57564F] shadow-lg scale-105'
                : 'bg-[#F8F3CE] text-[#57564F] border-transparent hover:bg-[#DDDAD0] hover:border-[#7A7A73]'}
            `}
            aria-pressed={activeCategory === cat.key}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 z-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project, idx) => {
            const isOverlay = hovered === project.key || tapped === project.key;
            return (
              <motion.div
                layout
                key={project.key}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative bg-white/80 rounded-3xl shadow-2xl overflow-hidden h-[450px] md:h-[500px] border-l-8 border-[#F8F3CE] cursor-pointer group"
                onMouseEnter={() => setHovered(project.key)}
                onMouseLeave={() => setHovered(null)}
                onTouchStart={(e) => handleCardTap(e, project.key)}
              >
                <div className="absolute inset-0 flex flex-col">
                  <div className="w-full h-3/4 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center px-6 py-4">
                    <h3 className="text-xl md:text-2xl font-bold text-[#57564F] text-center">{project.title}</h3>
                  </div>
                </div>

                <AnimatePresence>
                  {isOverlay && (
                    <motion.div
                      className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 z-20"
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      variants={overlayVariants}
                    >
                      <div className="text-center">
                        <h4 className="text-[#F8F3CE] text-xl md:text-2xl font-semibold mb-2">Tech Stack</h4>
                        <p className="text-[#DDDAD0] text-base md:text-lg mb-8">{project.tech}</p>
                        <Link
                          to={`/project/${project.key}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#F8F3CE] text-[#57564F] rounded-full font-bold text-lg hover:bg-white transition-colors duration-200 shadow-md"
                        >
                          View Details <FaArrowRight />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;