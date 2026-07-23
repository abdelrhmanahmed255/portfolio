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
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  // Curtain animations - 1 second smooth opening
  const leftCurtainVariants = {
    closed: { x: 0, skewX: 0 },
    opening: { 
      x: '-105%', 
      skewX: 3,
      transition: { 
        duration: 1, 
        ease: [0.4, 0, 0.2, 1]
      } 
    }
  };

  const rightCurtainVariants = {
    closed: { x: 0, skewX: 0 },
    opening: { 
      x: '105%', 
      skewX: -3,
      transition: { 
        duration: 1, 
        ease: [0.4, 0, 0.2, 1]
      } 
    }
  };

  const logoVariants = {
    hidden: { scale: 0.7, opacity: 0, y: 30 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.34, 1.56, 0.64, 1]
      } 
    },
    exit: { 
      scale: 1.2, 
      opacity: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeIn" 
      } 
    }
  };

  // Generate fold lines data
  const foldLines = Array.from({ length: 12 }, (_, i) => i);
  const swagItems = Array.from({ length: 5 }, (_, i) => i);

  return (
    <AnimatePresence mode="wait">
      {stage !== 'complete' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed inset-0 z-50"
        >
          {/* Stage background */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'radial-gradient(ellipse at center, #1a2332 0%, #0d1117 100%)'
            }}
          >
            {/* Stage floor reflection */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{
                background: 'linear-gradient(to top, rgba(200, 170, 110, 0.05), transparent)'
              }}
            />
            
            {/* Spotlights - inline instead of component */}
            <motion.div
              className="absolute w-32 h-96 opacity-20"
              style={{
                background: 'linear-gradient(to bottom, rgba(200, 170, 110, 0.8), transparent)',
                left: '20%',
                top: '-20%',
                filter: 'blur(30px)',
                transform: 'rotate(15deg)'
              }}
              animate={{ opacity: [0.1, 0.3, 0.1], x: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-32 h-96 opacity-20"
              style={{
                background: 'linear-gradient(to bottom, rgba(200, 170, 110, 0.8), transparent)',
                left: '50%',
                top: '-20%',
                filter: 'blur(30px)',
                transform: 'rotate(15deg)'
              }}
              animate={{ opacity: [0.1, 0.3, 0.1], x: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-32 h-96 opacity-20"
              style={{
                background: 'linear-gradient(to bottom, rgba(200, 170, 110, 0.8), transparent)',
                left: '75%',
                top: '-20%',
                filter: 'blur(30px)',
                transform: 'rotate(15deg)'
              }}
              animate={{ opacity: [0.1, 0.3, 0.1], x: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
            />
          </div>

          {/* Left Curtain */}
          <motion.div
            variants={leftCurtainVariants}
            initial="closed"
            animate={stage === 'revealing' ? 'opening' : 'closed'}
            className="absolute left-0 top-0 w-1/2 h-full z-30 origin-left"
            style={{
              background: `linear-gradient(135deg, 
                #1a2332 0%, 
                #232f3e 20%, 
                #2a3a4d 40%, 
                #232f3e 60%, 
                #1a2332 80%,
                #0d1117 100%
              )`,
              boxShadow: '4px 0 30px rgba(0,0,0,0.5), inset -15px 0 30px rgba(0,0,0,0.3)'
            }}
          >
            {/* Curtain folds - inline */}
            <div className="absolute inset-0 overflow-hidden">
              {foldLines.map((i) => (
                <div
                  key={`left-fold-${i}`}
                  className="absolute top-0 bottom-0"
                  style={{
                    left: `${i * 8.5}%`,
                    width: '2px',
                    background: `linear-gradient(to bottom, 
                      transparent 0%, 
                      rgba(0,0,0,0.15) 20%, 
                      rgba(0,0,0,0.25) 50%, 
                      rgba(0,0,0,0.15) 80%, 
                      transparent 100%
                    )`
                  }}
                />
              ))}
            </div>
            {/* Gold trim on edge */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-1"
              style={{
                background: 'linear-gradient(to bottom, #c8aa6e, #a08050, #c8aa6e, #a08050, #c8aa6e)'
              }}
            />
            {/* Gold rope decoration */}
            <motion.div
              className="absolute right-4 top-8"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-3 h-20 rounded-full" style={{ background: 'linear-gradient(to bottom, #c8aa6e, #8a7040)' }} />
              <div className="w-8 h-8 rounded-full -ml-2.5 mt-1" style={{ background: 'radial-gradient(circle, #c8aa6e, #8a7040)' }} />
            </motion.div>
          </motion.div>

          {/* Right Curtain */}
          <motion.div
            variants={rightCurtainVariants}
            initial="closed"
            animate={stage === 'revealing' ? 'opening' : 'closed'}
            className="absolute right-0 top-0 w-1/2 h-full z-30 origin-right"
            style={{
              background: `linear-gradient(225deg, 
                #1a2332 0%, 
                #232f3e 20%, 
                #2a3a4d 40%, 
                #232f3e 60%, 
                #1a2332 80%,
                #0d1117 100%
              )`,
              boxShadow: '-4px 0 30px rgba(0,0,0,0.5), inset 15px 0 30px rgba(0,0,0,0.3)'
            }}
          >
            {/* Curtain folds - inline */}
            <div className="absolute inset-0 overflow-hidden">
              {foldLines.map((i) => (
                <div
                  key={`right-fold-${i}`}
                  className="absolute top-0 bottom-0"
                  style={{
                    right: `${i * 8.5}%`,
                    width: '2px',
                    background: `linear-gradient(to bottom, 
                      transparent 0%, 
                      rgba(0,0,0,0.15) 20%, 
                      rgba(0,0,0,0.25) 50%, 
                      rgba(0,0,0,0.15) 80%, 
                      transparent 100%
                    )`
                  }}
                />
              ))}
            </div>
            {/* Gold trim on edge */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{
                background: 'linear-gradient(to bottom, #c8aa6e, #a08050, #c8aa6e, #a08050, #c8aa6e)'
              }}
            />
            {/* Gold rope decoration */}
            <motion.div
              className="absolute left-4 top-8"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="w-3 h-20 rounded-full" style={{ background: 'linear-gradient(to bottom, #c8aa6e, #8a7040)' }} />
              <div className="w-8 h-8 rounded-full -ml-2.5 mt-1" style={{ background: 'radial-gradient(circle, #c8aa6e, #8a7040)' }} />
            </motion.div>
          </motion.div>

          {/* Top valance/pelmet */}
          <div 
            className="absolute top-0 left-0 right-0 h-16 z-40"
            style={{
              background: 'linear-gradient(to bottom, #1a2332, #232f3e)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            {/* Gold trim bottom */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1.5"
              style={{
                background: 'linear-gradient(to right, #8a7040, #c8aa6e, #e0d4a8, #c8aa6e, #8a7040)'
              }}
            />
            {/* Decorative swags - inline */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              {swagItems.map((i) => (
                <motion.div
                  key={`swag-${i}`}
                  className="w-40 h-6 -mb-3 mx-4"
                  style={{
                    background: 'linear-gradient(to bottom, #232f3e, #1a2332)',
                    borderRadius: '0 0 50% 50%',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                  }}
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>

          {/* Center content - Logo and loading */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate={stage === 'loading' ? 'visible' : 'exit'}
              className="text-center"
            >
              {/* Logo with theatrical glow */}
              <div className="relative mb-8">
                {/* Outer glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(200, 170, 110, 0.4) 0%, transparent 60%)',
                    filter: 'blur(25px)',
                    transform: 'scale(2)'
                  }}
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1.8, 2.2, 1.8]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Logo frame */}
                <motion.div
                  className="relative w-36 h-36 mx-auto rounded-full overflow-hidden bg-[#1a2332]"
                  style={{
                    boxShadow: `
                      0 0 0 4px rgba(200, 170, 110, 0.6),
                      0 0 0 8px rgba(200, 170, 110, 0.2),
                      0 0 50px rgba(200, 170, 110, 0.4),
                      0 0 100px rgba(200, 170, 110, 0.2)
                    `
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 0 4px rgba(200, 170, 110, 0.6), 0 0 0 8px rgba(200, 170, 110, 0.2), 0 0 50px rgba(200, 170, 110, 0.4), 0 0 100px rgba(200, 170, 110, 0.2)`,
                      `0 0 0 4px rgba(200, 170, 110, 0.9), 0 0 0 10px rgba(200, 170, 110, 0.4), 0 0 70px rgba(200, 170, 110, 0.6), 0 0 120px rgba(200, 170, 110, 0.3)`,
                      `0 0 0 4px rgba(200, 170, 110, 0.6), 0 0 0 8px rgba(200, 170, 110, 0.2), 0 0 50px rgba(200, 170, 110, 0.4), 0 0 100px rgba(200, 170, 110, 0.2)`
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img 
                    src="/logo frontend.png" 
                    alt="AA Logo"
                    className="w-full h-full object-contain p-1"
                    style={{ imageRendering: 'auto' }}
                  />
                </motion.div>

                {/* Rotating star accents */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute -top-2 left-1/2 w-1.5 h-1.5 bg-[#c8aa6e] rounded-full transform -translate-x-1/2" 
                       style={{ boxShadow: '0 0 10px #c8aa6e' }} />
                  <div className="absolute -bottom-2 left-1/2 w-1 h-1 bg-[#c8aa6e]/60 rounded-full transform -translate-x-1/2" />
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-1/2 -left-2 w-1 h-1 bg-[#c8aa6e]/80 rounded-full transform -translate-y-1/2" />
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#c8aa6e] rounded-full transform -translate-y-1/2"
                       style={{ boxShadow: '0 0 10px #c8aa6e' }} />
                </motion.div>
              </div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl font-bold mb-2 tracking-wide"
                style={{ 
                  color: '#c8aa6e',
                  textShadow: '0 0 20px rgba(200, 170, 110, 0.5)'
                }}
              >
                Abdelrhman Ahmed
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm mb-10 tracking-[0.3em] uppercase"
                style={{ color: 'rgba(200, 170, 110, 0.6)' }}
              >
                Full Stack Developer
              </motion.p>

              {/* Progress section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-72 mx-auto"
              >
                <div className="flex justify-between text-xs mb-3 font-medium" style={{ color: 'rgba(200, 170, 110, 0.5)' }}>
                  <span className="tracking-wider">LOADING</span>
                  <span>{Math.round(Math.min(progress, 100))}%</span>
                </div>
                
                {/* Progress bar container */}
                <div 
                  className="h-1 rounded-full overflow-hidden"
                  style={{ 
                    background: 'rgba(200, 170, 110, 0.1)',
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full rounded-full relative"
                    style={{
                      background: 'linear-gradient(90deg, #8a7040, #c8aa6e, #e0d4a8, #c8aa6e)',
                      boxShadow: '0 0 10px rgba(200, 170, 110, 0.5)'
                    }}
                  >
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>

                {/* Status */}
                <motion.p
                  className="mt-4 text-xs tracking-wide"
                  style={{ color: 'rgba(200, 170, 110, 0.4)' }}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {progress < 25 && "✦ Preparing the stage..."}
                  {progress >= 25 && progress < 50 && "✦ Setting up the spotlight..."}
                  {progress >= 50 && progress < 75 && "✦ Arranging the scene..."}
                  {progress >= 75 && progress < 95 && "✦ Final touches..."}
                  {progress >= 95 && "✦ Curtains rising..."}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StageCurtainLoader;
