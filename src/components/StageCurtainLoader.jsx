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
      }, 1000); // Give it a full second to open the doors
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
          className="fixed inset-0 z-[100] bg-[#0b1121] overflow-hidden flex items-center justify-center"
        >
          {/* Top golden frame */}
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#e6c17a] via-[#c8aa6e] to-[#8a7040] z-40 shadow-lg border-b border-[#e6c17a]/50" />
          
          {/* Top arch decoration (like the uploaded image) */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-start z-50">
             <div className="w-16 h-8 bg-[#0f172a] rounded-b-full border-b border-x border-[#c8aa6e] shadow-[0_4px_15px_rgba(200,170,110,0.3)] mx-4" />
             <div className="w-24 h-10 bg-[#0f172a] rounded-b-full border-b border-x border-[#c8aa6e] shadow-[0_4px_20px_rgba(200,170,110,0.4)] mx-4" />
             <div className="w-16 h-8 bg-[#0f172a] rounded-b-full border-b border-x border-[#c8aa6e] shadow-[0_4px_15px_rgba(200,170,110,0.3)] mx-4" />
          </div>

          {/* LEFT DOOR */}
          <motion.div
            variants={leftDoorVariants}
            initial="closed"
            animate={stage === 'revealing' ? 'opening' : 'closed'}
            className="absolute left-0 top-0 w-1/2 h-full z-30"
            style={{
              background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)',
              boxShadow: 'inset -2px 0 10px rgba(0,0,0,0.5)',
            }}
          >
            {/* Vertical Panels */}
            <div className="absolute inset-0 opacity-40 flex justify-between px-2" style={{ backgroundImage: 'linear-gradient(90deg, transparent 96%, rgba(200, 170, 110, 0.1) 96%, rgba(200, 170, 110, 0.2) 100%)', backgroundSize: '10% 100%' }} />
            
            {/* Golden edge */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8a7040] via-[#e6c17a] to-[#8a7040] shadow-[0_0_10px_rgba(200,170,110,0.5)]" />
            
            {/* Handle */}
            <div className="absolute right-4 top-1/4 transform -translate-y-1/2 flex flex-col items-center">
               <div className="w-2 h-12 bg-gradient-to-b from-[#e6c17a] via-[#f9df9f] to-[#a38045] rounded-full shadow-lg" />
               <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#f9df9f] to-[#a38045] shadow-lg mt-[-8px] border-2 border-[#8a7040]" />
            </div>
          </motion.div>

          {/* RIGHT DOOR */}
          <motion.div
            variants={rightDoorVariants}
            initial="closed"
            animate={stage === 'revealing' ? 'opening' : 'closed'}
            className="absolute right-0 top-0 w-1/2 h-full z-30"
            style={{
              background: 'linear-gradient(270deg, #0f172a 0%, #1e293b 100%)',
              boxShadow: 'inset 2px 0 10px rgba(0,0,0,0.5)',
            }}
          >
            {/* Vertical Panels */}
            <div className="absolute inset-0 opacity-40 flex justify-between px-2" style={{ backgroundImage: 'linear-gradient(270deg, transparent 96%, rgba(200, 170, 110, 0.1) 96%, rgba(200, 170, 110, 0.2) 100%)', backgroundSize: '10% 100%' }} />
            
            {/* Golden edge */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8a7040] via-[#e6c17a] to-[#8a7040] shadow-[0_0_10px_rgba(200,170,110,0.5)]" />
            
            {/* Handle */}
            <div className="absolute left-4 top-1/4 transform -translate-y-1/2 flex flex-col items-center">
               <div className="w-2 h-12 bg-gradient-to-b from-[#e6c17a] via-[#f9df9f] to-[#a38045] rounded-full shadow-lg" />
               <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#f9df9f] to-[#a38045] shadow-lg mt-[-8px] border-2 border-[#8a7040]" />
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
                    background: 'radial-gradient(circle, rgba(200, 170, 110, 0.3) 0%, transparent 60%)',
                    filter: 'blur(20px)',
                    transform: 'scale(1.5)'
                  }}
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.3, 1.6, 1.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div
                  className="relative w-32 h-32 rounded-full overflow-hidden bg-[#0f172a] z-10 flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 0 2px #c8aa6e, 0 0 20px rgba(200,170,110,0.5)'
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
              <h2 className="text-3xl font-bold mb-2 tracking-wide text-[#e6c17a]" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                Abdelrhman Ahmed
              </h2>
              <p className="text-sm mb-10 tracking-[0.3em] uppercase text-[#c8aa6e]/80">
                Full Stack Developer
              </p>

              {/* Loader */}
              <div className="w-64 mx-auto">
                <div className="flex justify-between text-xs mb-2 font-medium text-[#c8aa6e]/70">
                  <span className="tracking-wider">UNLOCKING</span>
                  <span>{Math.round(Math.min(progress, 100))}%</span>
                </div>
                
                <div className="h-1 rounded-full bg-[#0f172a] shadow-inner overflow-hidden border border-[#c8aa6e]/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.2 }}
                    className="h-full relative"
                    style={{
                      background: 'linear-gradient(90deg, #8a7040, #f9df9f, #c8aa6e)'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
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
