import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StageCurtainLoader = ({ onComplete }) => {
  const [stage, setStage] = useState('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage('revealing'), 100);
          return 100;
        }
        return prev + Math.random() * 20 + 15;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage === 'revealing') {
      const timer = setTimeout(() => {
        setStage('complete');
        setTimeout(onComplete, 100);
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  // Elegant door opening animations
  const leftDoorVariants = {
    closed: { x: 0 },
    opening: { 
      x: '-105%', 
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const rightDoorVariants = {
    closed: { x: 0 },
    opening: { 
      x: '105%', 
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: { 
      scale: 1, opacity: 1, y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    },
    exit: { 
      scale: 1.1, opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" } 
    }
  };

  return (
    <AnimatePresence mode="wait">
      {stage !== 'complete' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[100] bg-[#0d131f] overflow-hidden flex items-center justify-center"
        >
          {/* Top golden frame */}
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-[#e6c17a] via-[#c29b5a] to-[#8a7040] z-40 shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
          
          {/* Top decorative trim (matching the image's scallops) */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex items-start z-50">
             <div className="w-12 h-4 bg-[#141d2b] rounded-b-full shadow-[0_4px_10px_rgba(194,155,90,0.2)] mx-2 border-b-2 border-x-2 border-[#c29b5a]" />
             <div className="w-20 h-6 bg-[#141d2b] rounded-b-full shadow-[0_4px_15px_rgba(194,155,90,0.3)] mx-2 border-b-2 border-x-2 border-[#c29b5a]" />
             <div className="w-12 h-4 bg-[#141d2b] rounded-b-full shadow-[0_4px_10px_rgba(194,155,90,0.2)] mx-2 border-b-2 border-x-2 border-[#c29b5a]" />
          </div>

          {/* LEFT DOOR */}
          <motion.div
            variants={leftDoorVariants}
            initial="closed"
            animate={stage === 'revealing' ? 'opening' : 'closed'}
            className="absolute left-0 top-0 w-1/2 h-full z-30 flex justify-end"
            style={{
              background: 'linear-gradient(90deg, #121926 0%, #1a2536 100%)',
              boxShadow: 'inset -2px 0 10px rgba(0,0,0,0.6)',
            }}
          >
            {/* Vertical Panels */}
            <div className="absolute inset-0 opacity-30 flex justify-between px-2 pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, transparent 97%, rgba(0, 0, 0, 0.4) 97%, rgba(0, 0, 0, 0.6) 100%)', backgroundSize: '12.5% 100%' }} />
            
            {/* Golden edge */}
            <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#b68c4a] via-[#e2be76] to-[#b68c4a] shadow-[0_0_15px_rgba(226,190,118,0.4)] z-20" />
            
            {/* Handle area */}
            <div className="absolute right-6 top-[15%] flex flex-col items-center z-20">
               {/* Top decorative dot */}
               <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f9df9f] to-[#a38045] shadow-[0_2px_8px_rgba(0,0,0,0.5)] border-2 border-[#8a7040] mb-[-4px] z-10" />
               {/* Vertical bar */}
               <div className="w-2.5 h-32 bg-gradient-to-b from-[#e2be76] via-[#c29b5a] to-[#8a7040] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.4)]" />
               {/* Bottom decorative dot */}
               <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f9df9f] to-[#a38045] shadow-[0_2px_8px_rgba(0,0,0,0.5)] border-2 border-[#8a7040] mt-[-4px] z-10" />
            </div>
          </motion.div>

          {/* RIGHT DOOR */}
          <motion.div
            variants={rightDoorVariants}
            initial="closed"
            animate={stage === 'revealing' ? 'opening' : 'closed'}
            className="absolute right-0 top-0 w-1/2 h-full z-30"
            style={{
              background: 'linear-gradient(270deg, #121926 0%, #1a2536 100%)',
              boxShadow: 'inset 2px 0 10px rgba(0,0,0,0.6)',
            }}
          >
            {/* Vertical Panels */}
            <div className="absolute inset-0 opacity-30 flex justify-between px-2 pointer-events-none" style={{ backgroundImage: 'linear-gradient(270deg, transparent 97%, rgba(0, 0, 0, 0.4) 97%, rgba(0, 0, 0, 0.6) 100%)', backgroundSize: '12.5% 100%' }} />
            
            {/* Golden edge */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#b68c4a] via-[#e2be76] to-[#b68c4a] shadow-[0_0_15px_rgba(226,190,118,0.4)] z-20" />
            
            {/* Handle area */}
            <div className="absolute left-6 top-[15%] flex flex-col items-center z-20">
               {/* Top decorative dot */}
               <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f9df9f] to-[#a38045] shadow-[0_2px_8px_rgba(0,0,0,0.5)] border-2 border-[#8a7040] mb-[-4px] z-10" />
               {/* Vertical bar */}
               <div className="w-2.5 h-32 bg-gradient-to-b from-[#e2be76] via-[#c29b5a] to-[#8a7040] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.4)]" />
               {/* Bottom decorative dot */}
               <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f9df9f] to-[#a38045] shadow-[0_2px_8px_rgba(0,0,0,0.5)] border-2 border-[#8a7040] mt-[-4px] z-10" />
            </div>
          </motion.div>

          {/* CENTER CONTENT (LOGO & LOADER) */}
          <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate={stage === 'loading' ? 'visible' : 'exit'}
              className="text-center"
            >
              {/* Logo Glow Frame */}
              <div className="relative mb-8 flex justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(194, 155, 90, 0.25) 0%, transparent 70%)',
                    filter: 'blur(25px)',
                    transform: 'scale(1.6)'
                  }}
                  animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.4, 1.7, 1.4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div
                  className="relative w-36 h-36 rounded-full overflow-hidden bg-[#0d131f] z-10 flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 0 2px #c29b5a, 0 0 25px rgba(194,155,90,0.6)'
                  }}
                >
                  <img 
                    src="/logo frontend.png" 
                    alt="AA Logo"
                    className="w-full h-full object-contain p-2"
                  />
                </motion.div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-2 tracking-widest text-[#e2be76]" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
                Abdelrhman Ahmed
              </h2>
              <p className="text-sm mb-12 tracking-[0.4em] uppercase font-light text-[#c29b5a]/90">
                Full Stack Developer
              </p>

              {/* Loader */}
              <div className="w-72 mx-auto">
                <div className="flex justify-between text-xs mb-3 font-medium text-[#c29b5a]/80">
                  <span className="tracking-widest">UNLOCKING</span>
                  <span className="tracking-widest">{Math.round(Math.min(progress, 100))}%</span>
                </div>
                
                <div className="h-1.5 rounded-full bg-[#0d131f] shadow-inner overflow-hidden border border-[#c29b5a]/30">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.2 }}
                    className="h-full relative"
                    style={{
                      background: 'linear-gradient(90deg, #8a7040, #f9df9f, #c29b5a)'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)' }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StageCurtainLoader;
