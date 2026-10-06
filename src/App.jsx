import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import Header from './components/Header';
import StageCurtainLoader from './components/StageCurtainLoader';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

/*
 * Scroll progress + cursor glow write straight to the DOM via refs so they
 * never trigger a React re-render of the whole app tree on scroll/mousemove.
 */
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(progress, 1)})`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" />;
};

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    // Skip entirely on touch devices — the element is hidden there anyway
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    let x = -500;
    let y = -500;
    const update = () => {
      raf = 0;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={glowRef} className="cursor-follower" />;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <MotionConfig reducedMotion="user">
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
          <ScrollProgress />
          <CursorGlow />

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
    </MotionConfig>
  );
}

export default App;
