import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import StageCurtainLoader from './components/StageCurtainLoader';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoading) return;
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isLoading]);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading && (
          <StageCurtainLoader onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Scroll Progress Bar */}
          <div 
            className="scroll-progress" 
            style={{ width: `${scrollProgress}%` }} 
          />
          
          {/* Cursor Follower */}
          <div 
            className="cursor-follower" 
            style={{ left: mousePos.x, top: mousePos.y }} 
          />
          
          <Header />
          <main className="min-h-screen">
            <Hero />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
