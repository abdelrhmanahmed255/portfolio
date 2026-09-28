import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StageCurtainLoader = ({ onComplete }) => {
  const [stage, setStage] = useState('loading'); // 'loading' | 'unlocked' | 'revealing' | 'complete'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage('unlocked'), 150);
          setTimeout(() => setStage('revealing'), 450);
          return 100;
        }
        return prev + Math.random() * 18 + 14;
      });
    }, 55);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage === 'revealing') {
      const timer = setTimeout(() => {
        setStage('complete');
        if (onComplete) onComplete();
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  // Cinematic vault door opening transitions
  const leftDoorVariants = {
    closed: { x: 0 },
    revealing: {
      x: '-102%',
      transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] }
    }
  };

  const rightDoorVariants = {
    closed: { x: 0 },
    revealing: {
      x: '102%',
      transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] }
    }
  };

  const centerContentVariants = {
    visible: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      scale: 1.08,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {stage !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#090b14] select-none"
        >
          {/* Ambient Background Aura behind doors */}
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/25 to-pink-600/20 blur-[120px] animate-pulse" />
          </div>

          {/* LEFT VAULT DOOR PANEL */}
          <motion.div
            variants={leftDoorVariants}
            initial="closed"
            animate={stage === 'revealing' ? 'revealing' : 'closed'}
            className="absolute left-0 top-0 w-1/2 h-full z-20 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #070913 0%, #0d1124 50%, #15112d 100%)',
              borderRight: '1px solid rgba(139, 92, 246, 0.35)',
              boxShadow: 'inset -2px 0 25px rgba(59, 130, 246, 0.15)'
            }}
          >
            {/* Subtle Tech Grid lines */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(139, 92, 246, 0.15) 48px, rgba(139, 92, 246, 0.15) 49px)'
              }}
            />
            {/* Left Edge Neon Seam */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
          </motion.div>

          {/* RIGHT VAULT DOOR PANEL */}
          <motion.div
            variants={rightDoorVariants}
            initial="closed"
            animate={stage === 'revealing' ? 'revealing' : 'closed'}
            className="absolute right-0 top-0 w-1/2 h-full z-20 overflow-hidden"
            style={{
              background: 'linear-gradient(225deg, #070913 0%, #0d1124 50%, #15112d 100%)',
              borderLeft: '1px solid rgba(236, 72, 153, 0.35)',
              boxShadow: 'inset 2px 0 25px rgba(236, 72, 153, 0.15)'
            }}
          >
            {/* Subtle Tech Grid lines */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(236, 72, 153, 0.15) 48px, rgba(236, 72, 153, 0.15) 49px)'
              }}
            />
            {/* Right Edge Neon Seam */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.6)]" />
          </motion.div>

          {/* CENTER CONTENT OVERLAY */}
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <motion.div
              variants={centerContentVariants}
              initial="visible"
              animate={stage === 'revealing' ? 'exit' : 'visible'}
              className="flex flex-col items-center justify-center px-4 max-w-sm w-full"
            >
              {/* CIRCULAR SEAL / BADGE */}
              <div className="relative w-48 h-48 md:w-52 md:h-52 mb-6 flex items-center justify-center">
                {/* Multi-layered Glowing Rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-35 animate-pulse" />

                {/* Counter-rotating tech rings */}
                <motion.div
                  className="absolute inset-[-6px] rounded-full border border-dashed border-blue-400/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-[-14px] rounded-full border border-dotted border-purple-400/35"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                />

                {/* SVG Badge with Curved Typography & Monogram */}
                <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(139,92,246,0.35)]">
                  <div className="w-full h-full rounded-full bg-[#0a0d1a]/90 backdrop-blur-md flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 200 200" className="w-full h-full p-1 select-none">
                      <defs>
                        <linearGradient id="badgeNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>

                        {/* Top arc path for "ABDELRHMAN AHMED" (clockwise over top) */}
                        <path id="curveTopPath" d="M 32,100 A 68,68 0 0,1 168,100" fill="none" />

                        {/* Bottom arc path for "FRONTEND" (clockwise along bottom, right-side up) */}
                        <path id="curveBottomPath" d="M 32,100 A 68,68 0 0,0 168,100" fill="none" />
                      </defs>

                      {/* Inner tech concentric circle */}
                      <circle cx="100" cy="100" r="54" fill="rgba(15, 23, 42, 0.7)" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />

                      {/* Curved Top Text */}
                      <text fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="3.5px" className="font-sans">
                        <textPath href="#curveTopPath" startOffset="50%" textAnchor="middle">
                          ABDELRHMAN AHMED
                        </textPath>
                      </text>

                      {/* Curved Bottom Text: FULL STACK DEVELOPER */}
                      <text fill="#a78bfa" fontSize="7.8" fontWeight="700" letterSpacing="3.2px" className="font-sans">
                        <textPath href="#curveBottomPath" startOffset="50%" textAnchor="middle">
                          FULL STACK DEVELOPER
                        </textPath>
                      </text>

                      {/* Accent dots on sides */}
                      <circle cx="28" cy="100" r="2.5" fill="#38bdf8" />
                      <circle cx="172" cy="100" r="2.5" fill="#ec4899" />

                      {/* Central Initials "AA" */}
                      <text
                        x="100"
                        y="94"
                        textAnchor="middle"
                        fontSize="32"
                        fontWeight="900"
                        fill="url(#badgeNeonGrad)"
                        letterSpacing="1px"
                        className="font-sans"
                        style={{ filter: 'drop-shadow(0 2px 10px rgba(139, 92, 246, 0.6))' }}
                      >
                        AA
                      </text>

                      {/* Central Full-Stack Symbol: Code bracket </> and Server Stack Nodes */}
                      <g transform="translate(100, 116)">
                        {/* Frontend Code Bracket </> */}
                        <text x="-16" y="3" textAnchor="middle" fontSize="11" fontWeight="700" fill="#38bdf8" fontFamily="ui-monospace, monospace">
                          &lt;/&gt;
                        </text>

                        {/* Connection node */}
                        <circle cx="0" cy="0" r="1.8" fill="#a855f7" />

                        {/* Backend Server / Database stack layers */}
                        <g transform="translate(15, -4)">
                          <path d="M -8,0 C -8,-2 8,-2 8,0 C 8,2 -8,2 -8,0 Z" fill="#ec4899" opacity="0.95" />
                          <path d="M -8,0 L -8,3.5 C -8,5.5 8,5.5 8,3.5 L 8,0" fill="none" stroke="#ec4899" strokeWidth="1.3" />
                          <path d="M -8,4.5 L -8,8 C -8,10 8,10 8,8 L 8,4.5" fill="none" stroke="#ec4899" strokeWidth="1.3" opacity="0.85" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* NAME & SUBTITLE */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200 mb-1"
                style={{ textShadow: '0 4px 20px rgba(139,92,246,0.3)' }}
              >
                Abdelrhman Ahmed
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-indigo-300/80 mb-8"
              >
                Full Stack Developer
              </motion.p>

              {/* PROGRESS BAR SECTION */}
              <div className="w-full max-w-[280px]">
                <div className="flex justify-between items-center text-[11px] font-mono tracking-wider mb-2 font-medium">
                  <span className="text-indigo-300/75 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping inline-block" />
                    {stage === 'unlocked' ? 'UNLOCKED' : 'UNLOCKING'}
                  </span>
                  <span className="text-pink-400 font-semibold">{Math.round(Math.min(progress, 100))}%</span>
                </div>

                {/* Progress bar container */}
                <div className="h-1.5 w-full rounded-full bg-[#0d1222] border border-purple-500/25 p-[1px] overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #ec4899 100%)',
                      boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)'
                    }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    {/* Dynamic High-Velocity Shimmer Light Ray */}
                    <motion.div
                      className="absolute inset-0 w-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)'
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
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
