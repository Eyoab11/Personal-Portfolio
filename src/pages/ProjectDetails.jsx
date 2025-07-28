// src/components/ProjectDetails.jsx
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import all your project images
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

import mestawerimg from "../assets/mestawet.png"
import anbessafitimgg from '../assets/anbessafitimg.jpg';
import discoverethiopiaimgg from '../assets/discoverEthiopia.png';
import memariyaimgg from '../assets/memariya.com.png';
import dh from '../assets/dh.png'
import taitu from '../assets/taitu.png'
import machine from '../assets/machine.jpg'


const projectData = {
    mestawet: {
        title: 'Social Media Website : Mestawet',
        description: "Mestawet is a cool social media platform built using React, Tailwind CSS, Appwrite, and ReactQuery. It lets users create profiles, post updates, and connect with others easily. The React framework ensures the site is dynamic and responsive, while Tailwind CSS keeps the design sleek and consistent. Appwrite powers the backend, providing services like user authentication, database management, and real-time data handling. This setup makes sure everything runs smoothly and securely. ReactQuery also plays a big role in managing data fetching and state, which means the user experience is always top-notch. What makes Mestawet special is the thoughtful use of these modern technologies. It's not just a social media platform; it's a showcase of how current web development tools can come together to create an engaging user experience. Working on this project has been a great opportunity to apply and enhance my skills in both front-end and back-end development.",
        tech: ['React', 'Tailwind CSS', 'Appwrite', 'ReactQuery', 'TypeScript'],
        githubLink: 'https://github.com/Eyoab11/mestawet',
        deployedLink: 'https://mestawet-app.vercel.app/',
        image: mestawerimg,
    },
    phdMonitoringSystem: {
      title: 'PhD Monitoring System - Addis Ababa University',
      description: "The PhD Monitoring System revolutionizes Addis Ababa University's doctoral program management by replacing manual processes with an efficient software solution. As a full-stack developer in the team, I contributed to building this comprehensive platform using React and Tailwind CSS for the frontend, with Express.js and MongoDB powering the backend. The system streamlines the entire PhD journey - from application and progress tracking to thesis submission and evaluation. Our solution eliminates paper-based workflows, reduces administrative overhead, and provides real-time progress visibility for students, advisors, and administrators. The React framework ensures a responsive user interface, while Tailwind CSS maintains a consistent and accessible design across all components. On the backend, Express.js handles robust API development and MongoDB manages complex academic data with flexibility. This project demonstrated my ability to collaborate effectively in a team while handling both frontend and backend responsibilities.",
      tech: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Node.js', 'REST API'],
      image: phdMonitoringImg, // You would define this image import
    },
    anbessaFit: {
        title: 'Backend for Fitness Website',
        description: "For the backend of this fitness website, I used NestJS and MySQL to create a robust and scalable system. NestJS's modular architecture makes it easy to organize and manage various features of the application. MySQL handles the data storage and management, ensuring efficient and reliable performance. Key modules of the application focus on different aspects, including user management, authentication, and specific fitness-related features like workout planning, as well as weight loss and gain planning. This setup ensures a well-structured and maintainable backend, ready for future enhancements and scalability. The combination of NestJS and MySQL provides a powerful foundation for developing a comprehensive fitness platform.",
        tech: ['NestJS', 'MySQL'],
        githubLink: 'https://github.com/Eyoab11/AnbessaFit',
        image: anbessafitimgg,
    },
    machineLearning: {
        title: 'Machine Learning Projects',
        description: 'This project involves the implementation of various supervised and unsupervised learning algorithms to analyze data and build predictive models using Python. The focus is on developing intelligent systems capable of identifying patterns, making predictions, and extracting meaningful insights from complex datasets. Through this project, I have gained experience in data preprocessing, model training, evaluation, and optimization, ensuring efficient and accurate results in different machine learning applications.',
        tech: ['Python'],
        githubLink: 'https://github.com/Eyoab11/Machine-Learning',
        image: machine,
    },
    DHJava: {
        title: 'DH Java Implementation',
        description: 'This project is a Java-based implementation of the Diffie-Hellman key exchange algorithm, designed to enable secure communication between a client and a server over an insecure network. The system generates secure key pairs using a prime modulus and generator, computes a shared secret via modular exponentiation, and encrypts/decrypts messages using Triple DES (3DES) for enhanced security. By integrating network communication and cryptographic protocols, this project showcases my ability to work with secure data transmission, encryption techniques, and backend development in Java.',
        tech: ['Java'],
        githubLink: 'https://github.com/Eyoab11/dh-java',
        image: dh,
    },
    taituHotel: {
        title: 'Taitu Hotel',
        description: "Noticing that the original website for Taitu Hotel, Ethiopia's first hotel, lacked a modern and user-friendly design, I took on a personal challenge to redesign and develop a better version. Built with React for component-based UI development and Tailwind CSS for a clean, responsive layout, the website integrates Google Maps Embed to provide a seamless location view. The biggest challenges were sourcing high-quality images and gathering accurate information, requiring extensive research and creativity. My approach focused on making the design intuitive and accessible, particularly for older users, ensuring smooth navigation and readability. This project highlights my frontend development expertise, ability to work with third-party integrations, and strong focus on user experience design.",
        tech: ['React', 'Tailwind', 'Google Maps Embed'],
        githubLink: 'https://github.com/Eyoab11/',
        deployedLink: 'https://taitu-hotel.vercel.app/',
        image: taitu,
    },
    fitnessApp: {
        title: 'Fitness Mobile App',
        description: "Our fitness mobile app, developed with Flutter, offers a user-friendly interface designed to make fitness planning easy and enjoyable. The app's sleek and intuitive UI ensures that you can navigate through your fitness routines and nutrition plans effortlessly, whether you're on an Android or iOS device. The workout planner is designed with simplicity in mind, allowing you to set up and manage your exercise schedules with ease. The nutrition page provides helpful suggestions and an organized layout to help you make informed dietary choices. Additionally, the nutrition planner is designed to help you map out your meals and track your intake in a straightforward manner. Our focus was on creating a clean, functional UI that enhances your fitness experience without any hassle. With its well-designed interface, the app makes it easy for you to stay on top of your fitness and nutrition goals.",
        tech: ['Flutter'],
        githubLink: 'https://github.com/Eyoab11/flutter-2024-AnbessaFit',
        image: anbessafitimgg,
    },
    aauPartnershipSystem: {
      title: 'AAU Partnership Management System',
      description: "The AAU Partnership Management System transforms Addis Ababa University's manual partnership tracking into an efficient digital platform. As both a backend developer and cybersecurity analyst in the team, I implemented core functionalities while ensuring robust security measures. The system centralizes partnership agreements, collaboration tracking, and reporting between the university and external organizations. Using Express.js for the backend API and MongoDB Atlas for secure cloud database management, I built the foundation for this critical system. My dual role involved developing key features like authentication, data encryption, and role-based access control while continuously testing for vulnerabilities and implementing security best practices. The transition from paper-based to software-based management has significantly improved efficiency, reduced errors, and enhanced data security for sensitive partnership information.",
      tech: ['Express.js', 'MongoDB Atlas', 'Node.js', 'JWT', 'Security Testing', 'REST API'], 
      image: partnership, 
  },
    discoverEthiopia: {
        title: 'Discover Ethiopia - Travel Website',
        description: "The 'Discover Ethiopia' travel website is a beautifully crafted platform built with HTML, CSS, and JavaScript. The site highlights Ethiopia's rich cultural and natural heritage, offering users a visual and immersive experience. With stunning imagery and engaging content, it provides an inviting glimpse into the diverse landscapes and traditions of Ethiopia. The website utilizes responsive design principles to ensure that it looks and functions flawlessly across all devices, from smartphones to desktop computers. JavaScript is employed to add interactive elements, enhancing user engagement with features like dynamic content loading and smooth transitions. These interactive aspects make exploring the site both enjoyable and informative. This project combines effective design with functional interactivity.",
        tech: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/Eyoab11/Discover-Ethiopia',
        deployedLink: 'https://eyoab11.github.io/Discover-Ethiopia/',
        image: discoverethiopiaimgg,
    },
    ethDelivery: {
      title: 'EthDelivery - E-commerce Mobile App',
      description: "EthDelivery is a user-friendly e-commerce mobile application built with Flutter, designed to provide seamless shopping experiences for Ethiopian consumers. As a mobile developer in the team, I focused on creating an intuitive UI that makes the app accessible to users of all technical levels. We transformed the traditional shopping process into a convenient digital solution with features like product browsing, cart management, secure checkout, and order tracking. My contributions included implementing clean navigation flows, optimizing the product display interface, and ensuring smooth interactions throughout the app. The Flutter framework enabled us to deliver consistent performance across both iOS and Android platforms while maintaining an attractive visual design. Particular attention was given to minimizing cognitive load for users through thoughtful information architecture and clear visual hierarchies. The result is an e-commerce platform that feels familiar yet innovative, removing barriers to digital commerce adoption.",
      tech: ['Flutter', 'Dart','REST API'],
      deployedLink: 'Currently under playstore testing', // Add store link if published
      image: ethdelivery, 
    },
    talentDiscovery: {
      title: 'Talent Discovery - Ethiopian Entertainment Hub',
      description: "Talent Discovery is Ethiopia's pioneering mobile platform connecting entertainment industry professionals with job opportunities and equipment rental services. As a lead Flutter developer, I architected the entire mobile application from UI design to backend integration using Riverpod for state management. The app serves as a dual marketplace - bridging casting directors with talented individuals while also providing a platform to rent entertainment equipment. I designed an intuitive user interface that simplifies complex networking processes, with specialized screens for talent profiles, job postings, and equipment listings. The implementation of Riverpod ensured efficient state management across various app features including user authentication, real-time notifications, and search functionality. My work enabled seamless data flow between the frontend and backend services while maintaining optimal performance. This innovative solution addresses a critical gap in Ethiopia's entertainment industry by digitalizing talent discovery and resource sharing.",
      tech: ['Flutter', 'Dart', 'Riverpod','REST API'],
      image: talentmobile, // You would define this image import
    },
    talentDiscoveryFront: {
      title: 'Talent Discovery - Ethiopian Entertainment Hub (Frontend)',
      description: "Developed the frontend for Ethiopia's premier talent connection platform using modern web technologies. Built with React and TypeScript, I created a responsive and interactive user interface styled with Tailwind CSS that serves both talent seekers and job finders in the entertainment industry. The platform features dynamic talent profiles, equipment rental listings, and job postings with robust search and filtering capabilities. I implemented complex UI components like interactive dashboards, real-time messaging interfaces, and media-rich profile displays while maintaining optimal performance. TypeScript ensured type safety across the codebase, reducing runtime errors, while Tailwind CSS enabled rapid UI development with consistent design patterns. The frontend seamlessly integrates with backend services through RESTful APIs, handling data for user authentication, talent matching, and transaction processing. My focus on accessibility and mobile-first design ensures the platform is usable by all entertainment professionals across Ethiopia.",
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: talentfront,
    },
    financialNewsAnalysis: {
      title: 'Financial News & Stock Market Analysis AI',
      image: financialnews, // Define this image import
      description: "AI-powered platform analyzing correlations between financial news sentiment and stock movements using NLP and technical analysis. Features include financial news processing pipelines, multi-dimensional sentiment analysis (VADER/TextBlob), technical indicator calculations (MA/RSI/MACD), and interactive visualizations. The methodology combines text preprocessing, keyword extraction, sentiment scoring, and event-driven backtesting to reveal market patterns.",
      tech: [
          'Python', 
          'NLTK', 
          'TextBlob', 
          'Pandas', 
          'NumPy', 
          'TA-Lib', 
          'Matplotlib', 
          'Seaborn'
      ],
      githubLink: 'https://github.com/Eyoab11/financial-news-analysis',
      deployedLink: 'https://[your-deployment].com' 
    },
    stockMarketAnalysis: {
      title: 'Predicting Stock Price Moves with News Sentiment (B5W1 Challenge)',
      image: stockmarket, // Define this image import
      description: "Developed for Nova Financial Solutions, this AI system analyzes correlations between financial news sentiment and stock market movements using NLP and technical indicators. The project processed 10,000+ news headlines, calculating sentiment scores with TextBlob and technical indicators (SMA, RSI, MACD) with TA-Lib. Key features include publisher activity analysis, time-series sentiment tracking, and Pearson correlation between news sentiment and stock returns. The methodology combined data engineering (news preprocessing), financial analytics (technical indicators), and machine learning (sentiment classification) to reveal actionable market insights.",
      tech: [
          'Python',
          'TextBlob',
          'TA-Lib',
          'Pandas',
          'NLTK',
          'Matplotlib',
          'Seaborn',
          'Jupyter Notebooks',
          'Statistical Correlation'
      ],
      githubLink: 'https://github.com/Eyoab11/stock-market-analysis',
    },
    fintechReviewsAnalytics: {
      title: 'Fintech Reviews Analytics - Ethiopian Banking Apps',
      image: fintechreview, // Define this image import
      description: "A comprehensive analytics platform analyzing 1,200+ customer reviews for Ethiopia's top banking apps (CBE, BOA, Dashen) to drive product improvements. As a data analyst at Omega Consultancy, I built an end-to-end solution featuring Play Store review scraping, hybrid sentiment analysis (VADER + TextBlob), thematic categorization, and Oracle database integration. The system identifies key satisfaction drivers like UI/UX quality and pain points such as transaction performance, delivering actionable insights through automated visualizations. My implementation included robust data pipelines handling review collection, NLP processing, and enterprise-grade data storage, culminating in strategic recommendations to reduce churn and guide feature development.",
      tech: [
          'Python',
          'Oracle XE',
          'VADER',
          'TextBlob',
          'Pandas',
          'Play Store Scraping',
          'NLP',
          'Sentiment Analysis',
          'Data Visualization'
      ],
      githubLink: 'https://github.com/Eyoab11/fintech-reviews-analytics',
    },
    insuranceRiskAnalytics: {
      title: 'Insurance Risk Analytics - AlphaCare Insurance Solutions',
      image: insurance, // Define this image import
      description: "Developed a comprehensive risk assessment platform for AlphaCare Insurance Solutions analyzing historical car insurance data to optimize marketing and identify low-risk segments. The project encompassed exploratory data analysis (EDA) of 500MB+ insurance records, advanced hypothesis testing (Chi-Squared, ANOVA, T-Tests) validating geographic risk patterns, and predictive modeling using Linear Regression/Random Forest/XGBoost. Key achievements included identifying Limpopo as the highest-risk province (p-value: 8.25e-17), detecting effective hyper-local pricing in ZIP code analysis, and uncovering critical data leakage in premium modeling. The solution combined statistical rigor with business insights, recommending regional pricing strategies and gender-neutral policies based on empirical evidence.",
      tech: [
          'Python',
          'Pandas',
          'Scipy',
          'Statsmodels',
          'Machine Learning',
          'DVC',
          'Hypothesis Testing',
          'SHAP',
          'Data Visualization'
      ],
      githubLink: 'https://github.com/Eyoab11/insurance-risk-analytics',
      deployedLink: '' // Add if you have a dashboard
      },

      ethioMartVendorAnalytics: {
        title: 'EthioMart - Amharic E-commerce Analytics Platform',
        image: ethiomart, // Define this image import
        description: "Built an end-to-end Amharic e-commerce analytics platform extracting business entities (products, prices, locations) from Telegram channels to create a unified vendor database. Developed a custom data pipeline with Telegram scraping (50+ channels), NLP preprocessing, and multilingual NER model fine-tuning (BERT, XLM-Roberta). Despite model limitations from small labeled datasets, successfully created a vendor scorecard system evaluating posting frequency (7-22 posts/week) and market reach (5K-43K views/post) to identify top micro-lending candidates. The project established a scalable framework for Ethiopian e-commerce data extraction, with clear roadmap for enhancing the NER system through expanded training data.",
        tech: [
            'Python',
            'Telethon',
            'HuggingFace',
            'BERT',
            'XLM-Roberta',
            'Pandas',
            'NER',
            'Amharic NLP',
            'Data Pipelines'
        ],
        githubLink: 'https://github.com/Eyoab11/ethiomart-vendor-analytics',
    },
    bankCreditScoring: {
      title: 'Alternative Data Credit Risk Model for Banking',
      image: bankcredit, // Define this image import
      description: "Developed an end-to-end credit scoring system using alternative transaction data to predict customer default risk. Engineered RFM (Recency, Frequency, Monetary) features from raw transaction logs and created a proxy target variable via K-Means clustering. Implemented MLflow for experiment tracking of Logistic Regression and Random Forest models, achieving perfect ROC-AUC (1.0) while identifying data leakage challenges. Built a Dockerized FastAPI service with CI/CD pipeline (GitHub Actions) for model deployment, complemented by comprehensive unit testing. The solution addresses Basel II compliance requirements through interpretable modeling while demonstrating how transactional behavior can predict creditworthiness in absence of traditional credit history.",
      tech: [
          'Python',
          'Scikit-learn',
          'MLflow',
          'FastAPI',
          'Docker',
          'RFM Analysis',
          'K-Means Clustering',
          'CI/CD',
          'Unit Testing'
      ],
      githubLink: 'https://github.com/Eyoab11/bank-credit-scoring',

    },
    crediTrustFeedbackBot: {
      title: 'CrediTrust Feedback Bot - Financial Complaint Analysis',
      image: creditrust, // Define this image import
      description: "Built an AI-powered RAG (Retrieval-Augmented Generation) system to analyze 9.6M+ CFPB financial complaints, focusing on credit products. Processed 200K+ complaint narratives through advanced NLP pipelines including text chunking (LangChain Recursive Splitter), semantic embedding (all-MiniLM-L6-v2 model), and FAISS vector indexing. The system enables precise querying of financial complaints with traceable results, handling complex customer narratives averaging 176 words (up to 6K words). Key achievements include developing a metadata-rich vector store (350K chunks) and implementing context-preserving chunking strategies that improved semantic search accuracy by 32% compared to whole-document approaches.",
      tech: [
          'Python',
          'LangChain',
          'FAISS',
          'sentence-transformers',
          'NLP',
          'RAG',
          'Text Chunking',
          'Semantic Search',
          'Financial Analytics'
      ],
      githubLink: 'https://github.com/Eyoab11/creditrust-feedback-bot',
    },

    karaHealthELT: {
      title: 'Kara Health - Ethiopian Medical Data Pipeline',
      image: kara, // Define this image import
      description: "Built an end-to-end ELT pipeline processing Ethiopian medical Telegram channels into actionable insights. The system scrapes public health channels (Telethon), structures raw data in a partitioned data lake, transforms it via dbt into an analytics-ready star schema, enriches images with YOLOv8 object detection, and exposes insights through a FastAPI service. Orchestrated with Dagster, the containerized solution handles the full data lifecycle from ingestion to API delivery, enabling Kara Solutions to track pharmaceutical trends, channel activity, and product mentions across Ethiopia's digital health ecosystem.",
      tech: [
          'Python',
          'PostgreSQL',
          'dbt',
          'Dagster',
          'FastAPI',
          'YOLOv8',
          'Telethon',
          'Docker',
          'Data Modeling'
      ],
      githubLink: 'https://github.com/Eyoab11/kara-health-elt-pipeline',
  
  },
    memariya: {
        title: 'Educational Platform - Memariya.com',
        description: "Memariya.com is an exciting educational platform we developed as a team, packed with features designed to make learning engaging and effective. We used MongoDB to handle all the data, ensuring that everything from course materials to student progress is managed smoothly and reliably. React powers the dynamic user interfaces, giving users a smooth and interactive experience, while Tailwind CSS adds a stylish and modern look to the whole site. On the server side, Express.js keeps everything running efficiently, making sure the platform is responsive and quick. The platform isn't just about static content—it offers interactive courses that make learning fun, personalized learning paths tailored to individual needs, and a robust student management system to keep track of everyone's progress. Overall, Memariya.com is a showcase of how modern tech can come together to create a rich and flexible learning environment. It's a great example of how teamwork and tech can build something truly useful and engaging!",
        tech: ['MongoDB', 'React', 'Tailwind', 'ExpressJs'],
        githubLink: 'https://github.com/Bemnet-13/Memariya.com',
        image: memariyaimgg,
    },
    personalBlog: {
      key: 'personal-blog',
      title: 'Eyoab Amare - Fullstack Blog Platform',
      image: blog,
      description: "A modern fullstack blog platform built with React, Vite, and Tailwind CSS, powered by Supabase and MongoDB. The platform features dynamic content management with categorized posts and filtering, a complete newsletter subscription system with automated email notifications via Resend API, and contact forms with backend storage. Supabase Edge Functions trigger realtime updates for subscribers when new content publishes. The responsive design delivers a GutenVerse-inspired reading experience across all devices, while the full-featured CMS capabilities allow seamless content updates through a secure backend interface.",
      tech: [
          'React',
          'Vite',
          'Tailwind CSS',
          'Supabase',
          'MongoDB',
          'Resend API',
          'Edge Functions'
      ],
      githubLink: 'https://github.com/Eyoab11/personal-blog',
      deployedLink: 'https://eyoab-blog.vercel.app', 
  },
  debalE: {
    title: 'DebalE - Ethiopian Roommate Finder App',
    image: debale,
    description: "**🏆 3rd Place Winner at Cursor Hackathon 2025** - A roommate matching mobile app addressing Ethiopia's housing crisis through trust-driven connections. As lead mobile developer, I built the MVP using React Native that connects room seekers with providers using location-based matching and community verification features. The app focuses on cultural compatibility and safety measures tailored for Ethiopian urban dwellers, with plans to expand into a full housing platform. Currently in active development with core matching functionality operational and user onboarding flows implemented.",
    tech: [
        'React Native', 
        'Firebase',
        'Google Maps API',
        'Context API',
        'Geolocation',
        'Social Auth'
    ],
    githubLink: 'https://github.com/Eyoab11/debale-app',
},
};


const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Project Not Found</h1>
          <p className="text-lg text-gray-700">The project you're looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const cardClasses = 'bg-white/60 backdrop-blur-md border border-gray-200/50';
  const techPillClasses = 'bg-gray-200 text-gray-800';
  const headingClasses = 'text-gray-900';
  const paragraphClasses = 'text-gray-700';
  const linkClasses = 'text-gray-600 hover:text-black';

  const motionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const handleBackToProjects = () => {
    // First navigate to home
    navigate('/', { 
      state: { scrollToProjects: true },
      replace: true
    });
    
    // Then update the URL with hash after navigation is complete
    setTimeout(() => {
      window.location.hash = 'projects';
    }, 50);
  };

  return (
    <div className="min-h-screen bg-transparent">
      <section className="pt-28 px-6">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={handleBackToProjects}
            className={`inline-flex items-center transition-colors duration-200 font-semibold ${linkClasses}`}
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </button>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div {...motionProps} className={`${cardClasses} rounded-3xl shadow-2xl overflow-hidden`}>
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </motion.div>
          
          <motion.div {...motionProps} className={`${cardClasses} rounded-3xl shadow-xl p-8`}>
            <h2 className={`text-3xl font-bold mb-6 ${headingClasses}`}>About</h2>
            <p className={`text-lg leading-relaxed ${paragraphClasses}`}>{project.description}</p>
          </motion.div>
          
          <motion.div {...motionProps} className={`${cardClasses} rounded-3xl shadow-xl p-8`}>
            <h2 className={`text-3xl font-bold mb-6 ${headingClasses}`}>Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className={`${techPillClasses} px-4 py-2 rounded-full font-semibold text-sm`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div {...motionProps} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.deployedLink && (
              <div className={`${cardClasses} rounded-3xl shadow-xl p-6`}>
                <h3 className={`text-xl font-bold mb-4 ${headingClasses}`}>Website</h3>
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center font-semibold transition-colors duration-200 ${linkClasses}`}>
                  <FaExternalLinkAlt className="mr-2" /> Visit Website
                </a>
              </div>
            )}
            <div className={`${cardClasses} rounded-3xl shadow-xl p-6 ${!project.deployedLink ? 'md:col-span-2' : ''}`}>
              <h3 className={`text-xl font-bold mb-4 ${headingClasses}`}>GitHub</h3>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center font-semibold transition-colors duration-200 ${linkClasses}`}>
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;