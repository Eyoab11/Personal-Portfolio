import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import SmoothScroll from './components/SmoothScroll';
import ThreeBackground from './components/ThreeBackground';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectDetails from './pages/ProjectDetails';
import Loading from './components/Loading';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectDetailsPage = location.pathname.startsWith('/project/');
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#projects' || location.state?.scrollToProjects) {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          // Small timeout to ensure DOM is ready
          setTimeout(() => {
            projectsSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
        // Clear the state to prevent scrolling on subsequent renders
        window.history.replaceState({}, document.title);
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading />}
      </AnimatePresence>

      {!isLoading && (
        <SmoothScroll>
          <div className="relative min-h-screen bg-white">
            <ThreeBackground isActive={isHomePage} />
            {!isProjectDetailsPage && <NavBar />}
            <main>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={
                    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                      <HomePage />
                    </motion.div>
                  } />
                  <Route path="/project/:id" element={
                    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                      <ProjectDetails />
                    </motion.div>
                  } />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
        </SmoothScroll>
      )}
    </>
  );
}

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;