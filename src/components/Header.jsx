import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiArrowRight } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'education', 'projects', 'skills', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }, 250);
  };

  const menuVariants = {
    closed: { opacity: 0, transition: { duration: 0.25, when: 'afterChildren' } },
    open: { opacity: 1, transition: { duration: 0.25, staggerChildren: 0.06, delayChildren: 0.1 } }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 18, transition: { duration: 0.15 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-transparent'
          : scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-5 md:px-6 py-3.5 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer relative z-[70]"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/logo-fullstack.svg"
                  alt="Full Stack Developer Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
            <div className="hidden sm:block">
              <div className={`text-lg font-bold ${isOpen ? 'text-white' : scrolled ? 'text-slate-900' : 'text-white'}`}>
                Abdelrhman
              </div>
              <div className={`text-xs -mt-0.5 ${isOpen ? 'text-slate-400' : scrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                Full Stack Developer
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? scrolled
                      ? 'text-indigo-600'
                      : 'text-white'
                    : scrolled
                    ? 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full ${
                      scrolled ? 'bg-indigo-600' : 'bg-white'
                    }`}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <motion.a
            href="mailto:abdelrhmanahmedd2018@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden lg:flex items-center px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold shadow-lg transition-colors duration-300"
          >
            <HiCode className="mr-2" />
            Let's Talk
          </motion.a>

          {/* Mobile Menu Button — animated hamburger/X */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className={`md:hidden relative z-[70] w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
              isOpen
                ? 'bg-white/10 text-white'
                : scrolled
                ? 'bg-slate-100 text-slate-900'
                : 'bg-white/10 text-white backdrop-blur-sm'
            }`}
          >
            <span className="relative block w-5 h-4">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute top-0 left-0 w-5 h-[2px] rounded-full bg-current"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[7px] left-0 w-5 h-[2px] rounded-full bg-current"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute top-[14px] left-0 w-5 h-[2px] rounded-full bg-current"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden fixed inset-0 z-[60] bg-slate-950 flex flex-col"
            style={{ height: '100dvh' }}
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 pt-16">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    variants={menuItemVariants}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center justify-between py-3.5 text-left border-b border-white/[0.06]"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-slate-600">0{index + 1}</span>
                      <span
                        className={`text-2xl font-bold tracking-tight transition-colors ${
                          isActive ? 'text-indigo-400' : 'text-white group-active:text-indigo-300'
                        }`}
                      >
                        {item.name}
                      </span>
                    </span>
                    <HiArrowRight
                      className={`text-lg transition-all ${
                        isActive ? 'text-indigo-400 opacity-100' : 'text-slate-600 opacity-60'
                      }`}
                    />
                  </motion.button>
                );
              })}
            </nav>

            {/* Bottom: CTA + socials */}
            <motion.div variants={menuItemVariants} className="px-8 pb-10 space-y-5">
              <a
                href="mailto:abdelrhmanahmedd2018@gmail.com"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 active:bg-indigo-500 text-white rounded-xl font-semibold transition-colors"
              >
                <HiCode className="text-lg" />
                Get In Touch
              </a>

              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 text-slate-300 flex items-center justify-center"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/abdelrhmanahmed255"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 text-slate-300 flex items-center justify-center"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://wa.me/201270755944"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 text-slate-300 flex items-center justify-center"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
