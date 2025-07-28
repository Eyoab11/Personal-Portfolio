import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
    { href: 'https://eyoabs-blog.vercel.app/', label: 'Blog', special: true },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1060);
    };

    // Initialize
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navBarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled
      ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg'
      : 'bg-transparent border-b border-transparent'
  }`;

  return (
    <nav className={navBarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold tracking-tight text-[#57564F]">
            Eyoab Amare
          </a>

          {/* Desktop Navigation - Hidden when mobile */}
          <div className={`${isMobile ? 'hidden' : 'flex'} items-center space-x-2 lg:space-x-4`}>
            <NavLinks />
          </div>

          {/* Mobile menu button - Only shown when mobile */}
          {isMobile && (
            <div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-black"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && menuOpen && (
          <div className="absolute left-0 right-0 mx-4 mt-2 rounded-xl shadow-xl border bg-white/95 backdrop-blur-lg border-gray-200">
            <div className="flex flex-col items-center px-4 pt-4 pb-6 space-y-4">
              <NavLinks onLinkClick={() => setMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ onLinkClick }) => {
  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={onLinkClick}
          className={`w-full text-center md:w-auto px-4 py-2 rounded-md text-base font-semibold transition-all duration-300 ${
            item.special
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-sky-700 hover:opacity-80 font-bold'
              : 'text-gray-600 hover:text-black hover:bg-gray-200/50'
          }`}
        >
          {item.label}
        </a>
      ))}
      <a
        href="/Eyoab-Amare.pdf"
        download
        className="w-full text-center md:w-auto mt-4 md:mt-0 md:ml-4 px-5 py-2 rounded-full text-base font-semibold transition-all duration-300 shadow-sm bg-[#57564F] text-white hover:bg-black hover:scale-105"
      >
        Download CV
      </a>
    </>
  );
};

export default NavBar;