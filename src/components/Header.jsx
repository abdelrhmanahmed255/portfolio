import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiCode } from 'react-icons/hi';
import { FaLaptopCode } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      setIsOpen(false);

      // Use setTimeout to ensure menu is closed before scrolling
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Try smooth scrolling first, fallback to instant scroll
        try {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } catch (error) {
          // Fallback for browsers that don't support smooth scrolling
          window.scrollTo(0, offsetPosition);
        }
      }, 300); // Wait for menu close animation
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <FaLaptopCode className="text-white text-xl" />
              </motion.div>
              {/* Animated dot indicator */}
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </div>
              <div className="text-xs text-gray-500 -mt-1">Frontend Dev</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white hover:text-blue-300 hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <motion.a
            href="mailto:abdelrhmanahmedd2018@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <HiCode className="mr-2" />
            Let's Talk
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="md:hidden mobile-menu-container">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className={`relative p-3 rounded-xl transition-all duration-300 shadow-lg ${
                scrolled
                  ? 'bg-white/90 backdrop-blur-md text-gray-700 border border-gray-200 hover:bg-white hover:shadow-xl'
                  : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
              } ${isOpen ? 'bg-blue-500 text-white shadow-blue-500/25' : ''}`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-6 h-6"
              >
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                  className="absolute top-1 left-0 w-6 h-0.5 bg-current block transform origin-center transition-all duration-300"
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="absolute top-3 left-0 w-6 h-0.5 bg-current block transform origin-center transition-all duration-300"
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                  className="absolute top-5 left-0 w-6 h-0.5 bg-current block transform origin-center transition-all duration-300"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Complete Redesign */}
        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed inset-0 z-40 ${isOpen ? 'block' : 'hidden'}`}
        >
          {/* Full Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 0.6 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(false);
            }}
          />

          {/* Menu Panel - Solid Background */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? 0 : '100%' }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.4
            }}
            className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl border-l border-gray-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {/* Menu Header - Solid Background */}
            <div className="bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FaLaptopCode className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Portfolio</h3>
                    <p className="text-sm text-gray-500">Frontend Developer</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <HiX className="text-xl" />
                </button>
              </div>
            </div>

            {/* Navigation Items - Solid Backgrounds */}
            <div className="bg-white py-4">
              <nav className="px-6 space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        x: isOpen ? 0 : 20
                      }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.3
                      }}
                      whileHover={{ x: 4, backgroundColor: "#f8fafc" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        scrollToSection(item.id);
                      }}
                      className={`w-full flex items-center justify-between p-4 rounded-xl font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full transition-colors ${
                          isActive ? 'bg-blue-500' : 'bg-gray-300'
                        }`} />
                        <span className="text-left font-medium">{item.name}</span>
                      </div>
                      {isActive && (
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              {/* CTA Section - Solid Background */}
              <div className="bg-white px-6 pt-6 pb-8 border-t border-gray-100 mt-4">
                <motion.a
                  href="mailto:abdelrhmanahmedd2018@gmail.com"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 10
                  }}
                  transition={{
                    delay: navItems.length * 0.08,
                    duration: 0.3
                  }}
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <HiCode className="mr-2 text-lg" />
                  Get In Touch
                </motion.a>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-6">
                  <motion.a
                    href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      scale: isOpen ? 1 : 0.8
                    }}
                    transition={{
                      delay: (navItems.length + 1) * 0.08,
                      duration: 0.3
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://github.com/abdelrhmanahmed255"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      scale: isOpen ? 1 : 0.8
                    }}
                    transition={{
                      delay: (navItems.length + 2) * 0.08,
                      duration: 0.3
                    }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Mobile Menu Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: scrolled ? 1 : 0,
          opacity: scrolled ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="md:hidden fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-blue-500/25 transition-all duration-300 floating-menu-btn border-2 border-white/20"
        >
          <motion.div
            animate={{
              rotate: isOpen ? 45 : 0,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 0.3 },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-6 h-6"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="absolute top-1 left-0 w-6 h-0.5 bg-white block transform origin-center transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="absolute top-3 left-0 w-6 h-0.5 bg-white block transform origin-center transition-all duration-300"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="absolute top-5 left-0 w-6 h-0.5 bg-white block transform origin-center transition-all duration-300"
            />
          </motion.div>
        </motion.button>

        {/* Floating button tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: scrolled && !isOpen ? 1 : 0,
            x: scrolled && !isOpen ? 0 : 10
          }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
        >
          Menu
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header; 