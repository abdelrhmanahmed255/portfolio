import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STATUS_MESSAGES = [
  { at: 0, label: 'BOOTING CORE' },
  { at: 30, label: 'LINKING MODULES' },
  { at: 62, label: 'DECRYPTING ASSETS' },
  { at: 92, label: 'FINALIZING' }
];

const StageCurtainLoader = ({ onComplete }) => {
  const [stage, setStage] = useState('loading'); // 'loading' | 'unlocked' | 'revealing' | 'complete'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage('unlocked'), 150);
          setTimeout(() => setStage('revealing'), 600);
          return 100;
        }
        return prev + Math.random() * 14 + 10;
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

  const clamped = Math.min(progress, 100);
  const statusLabel =
    stage === 'unlocked' || stage === 'revealing'
      ? 'ACCESS GRANTED'
      : [...STATUS_MESSAGES].reverse().find((m) => clamped >= m.at)?.label || 'BOOTING CORE';

  // Cinematic vault door opening transitions (hardware-accelerated for iOS & PC)
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

  const isOpen = stage === 'revealing';
  const isUnlocked = stage === 'unlocked' || stage === 'revealing';

  // Shared door inner surface (mirrored per side)
  const DoorSurface = ({ side }) => {
    const accent = side === 'left' ? 'rgba(59, 130, 246,' : 'rgba(236, 72, 153,';
    return (
      <>
        {/* Brushed metal diagonal sheen */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, transparent, transparent 2px, rgba(255,255,255,0.35) 2px, rgba(255,255,255,0.35) 3px, transparent 3px, transparent 9px)'
          }}
        />
        {/* Vertical tech grid lines */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 48px, ${accent} 0.15) 48px, ${accent} 0.15) 49px)`
          }}
        />
        {/* Horizontal armor plate seams */}
        <div className="absolute left-0 right-0 top-[22%] h-px bg-white/[0.06] pointer-events-none" />
        <div className="absolute left-0 right-0 top-[22%] mt-px h-px bg-black/40 pointer-events-none" />
        <div className="absolute left-0 right-0 bottom-[22%] h-px bg-white/[0.06] pointer-events-none" />
        <div className="absolute left-0 right-0 bottom-[22%] mb-px h-px bg-black/40 pointer-events-none" />

        {/* Bolt column near the center seam */}
        <div
          className={`absolute top-0 bottom-0 ${side === 'left' ? 'right-5 md:right-8' : 'left-5 md:left-8'} flex flex-col justify-evenly pointer-events-none`}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
              style={{
                background: `radial-gradient(circle at 35% 35%, ${accent} 0.8), ${accent} 0.15) 70%)`,
                boxShadow: `0 0 6px ${accent} 0.45), inset 0 -1px 1px rgba(0,0,0,0.6)`
              }}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <AnimatePresence mode="wait">
      {stage !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed inset-0 w-full w-screen h-full h-screen min-h-[100dvh] z-[99999] overflow-hidden bg-[#090b14] select-none"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100dvh',
            minHeight: '100vh',
            zIndex: 99999,
            backgroundColor: '#090b14',
            touchAction: 'none'
          }}
        >
          {/* Ambient Background Aura behind doors (capped blur for iOS GPU) */}
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
            <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/25 to-pink-600/20 blur-[50px] md:blur-[120px] animate-pulse" />
          </div>

          {/* CENTER SEAM LIGHT BEAM — glows while locked, bursts open on reveal */}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 z-[25] pointer-events-none"
            style={{ width: 4, marginLeft: -2 }}
            initial={{ opacity: 0.5, scaleX: 1 }}
            animate={
              isOpen
                ? { opacity: 0, scaleX: 28, transition: { duration: 0.65, ease: 'easeOut' } }
                : isUnlocked
                ? { opacity: 1, scaleX: 2.6, transition: { duration: 0.3 } }
                : { opacity: [0.35, 0.8, 0.35], transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } }
            }
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(56,189,248,0.0), rgba(56,189,248,0.9) 20%, rgba(168,85,247,1) 50%, rgba(236,72,153,0.9) 80%, rgba(236,72,153,0.0))',
                boxShadow: '0 0 18px 4px rgba(139,92,246,0.55)'
              }}
            />
          </motion.div>

          {/* LEFT VAULT DOOR PANEL */}
          <motion.div
            variants={leftDoorVariants}
            initial="closed"
            animate={isOpen ? 'revealing' : 'closed'}
            className="absolute left-0 top-0 w-1/2 h-full min-h-[100dvh] z-20 overflow-hidden"
            style={{
              height: '100%',
              minHeight: '100dvh',
              background: 'linear-gradient(135deg, #070913 0%, #0d1124 45%, #141230 80%, #1a1535 100%)',
              borderRight: '1px solid rgba(139, 92, 246, 0.35)',
              boxShadow: 'inset -4px 0 35px rgba(59, 130, 246, 0.18)',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              willChange: 'transform'
            }}
          >
            <DoorSurface side="left" />
            {/* Left Edge Neon Seam */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
          </motion.div>

          {/* RIGHT VAULT DOOR PANEL */}
          <motion.div
            variants={rightDoorVariants}
            initial="closed"
            animate={isOpen ? 'revealing' : 'closed'}
            className="absolute right-0 top-0 w-1/2 h-full min-h-[100dvh] z-20 overflow-hidden"
            style={{
              height: '100%',
              minHeight: '100dvh',
              background: 'linear-gradient(225deg, #070913 0%, #0d1124 45%, #141230 80%, #1a1535 100%)',
              borderLeft: '1px solid rgba(236, 72, 153, 0.35)',
              boxShadow: 'inset 4px 0 35px rgba(236, 72, 153, 0.18)',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              willChange: 'transform'
            }}
          >
            <DoorSurface side="right" />
            {/* Right Edge Neon Seam */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.6)]" />
          </motion.div>

          {/* HUD CORNER BRACKETS */}
          <div className="absolute inset-0 z-[26] pointer-events-none p-4 md:p-8">
            {[
              'top-4 left-4 md:top-8 md:left-8 border-t-2 border-l-2 rounded-tl-lg',
              'top-4 right-4 md:top-8 md:right-8 border-t-2 border-r-2 rounded-tr-lg',
              'bottom-4 left-4 md:bottom-8 md:left-8 border-b-2 border-l-2 rounded-bl-lg',
              'bottom-4 right-4 md:bottom-8 md:right-8 border-b-2 border-r-2 rounded-br-lg'
            ].map((cls, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isOpen ? { opacity: 0, scale: 1.3 } : { opacity: 0.5, scale: 1 }}
                transition={{ duration: 0.5, delay: isOpen ? 0 : 0.15 * i }}
                className={`absolute w-8 h-8 md:w-12 md:h-12 border-indigo-400/60 ${cls}`}
              />
            ))}
          </div>

          {/* CENTER CONTENT OVERLAY */}
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <motion.div
              variants={centerContentVariants}
              initial="visible"
              animate={isOpen ? 'exit' : 'visible'}
              className="flex flex-col items-center justify-center px-4 max-w-sm w-full"
            >
              {/* CIRCULAR SEAL / BADGE */}
              <div className="relative w-48 h-48 md:w-52 md:h-52 mb-6 flex items-center justify-center">
                {/* Multi-layered Glowing Rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-lg md:blur-xl opacity-35 animate-pulse" />

                {/* MECHANICAL LOCK RING — tick marks that spin with progress, flash on unlock */}
                <motion.div
                  className="absolute inset-[-22px] rounded-full pointer-events-none"
                  animate={
                    isUnlocked
                      ? { rotate: 90, opacity: [1, 0.2, 1, 0.2, 1], transition: { rotate: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }, opacity: { duration: 0.5 } } }
                      : { rotate: clamped * 2.7, transition: { duration: 0.25, ease: 'easeOut' } }
                  }
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {[...Array(36)].map((_, i) => {
                      const lit = i / 36 <= clamped / 100;
                      return (
                        <line
                          key={i}
                          x1="50"
                          y1="2.5"
                          x2="50"
                          y2={i % 3 === 0 ? '7.5' : '5.5'}
                          stroke={lit ? (isUnlocked ? '#34d399' : '#a855f7') : 'rgba(148,163,184,0.25)'}
                          strokeWidth={i % 3 === 0 ? 1.4 : 0.8}
                          strokeLinecap="round"
                          transform={`rotate(${i * 10} 50 50)`}
                        />
                      );
                    })}
                  </svg>
                </motion.div>

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

                {/* Unlock shockwave ring */}
                <AnimatePresence>
                  {isUnlocked && (
                    <motion.div
                      key="shockwave"
                      className="absolute inset-0 rounded-full border-2 border-emerald-300/70 pointer-events-none"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 1.9, opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  )}
                </AnimatePresence>

                {/* SVG Badge with Curved Typography & Monogram */}
                <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(139,92,246,0.35)]">
                  <div className="w-full h-full rounded-full bg-[#0a0d1a] flex items-center justify-center overflow-hidden border border-purple-500/20">
                    <svg viewBox="0 0 200 200" className="w-full h-full p-1 select-none">
                      <defs>
                        <linearGradient id="badgeNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>

                        {/* Top arc path for "ABDELRHMAN AHMED" (clockwise over top) */}
                        <path id="curveTopPath" d="M 32,100 A 68,68 0 0,1 168,100" fill="none" />

                        {/* Bottom arc path for "FULL STACK DEVELOPER" (clockwise along bottom, right-side up) */}
                        <path id="curveBottomPath" d="M 32,100 A 68,68 0 0,0 168,100" fill="none" />
                      </defs>

                      {/* Inner tech concentric circle */}
                      <circle cx="100" cy="100" r="54" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />

                      {/* Curved Top Text (with both href and xlinkHref for iOS Safari) */}
                      <text fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="3.5px" className="font-sans">
                        <textPath href="#curveTopPath" xlinkHref="#curveTopPath" startOffset="50%" textAnchor="middle">
                          ABDELRHMAN AHMED
                        </textPath>
                      </text>

                      {/* Curved Bottom Text: FULL STACK DEVELOPER */}
                      <text fill="#a78bfa" fontSize="7.8" fontWeight="700" letterSpacing="3.2px" className="font-sans">
                        <textPath href="#curveBottomPath" xlinkHref="#curveBottomPath" startOffset="50%" textAnchor="middle">
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
                  <span className={`flex items-center gap-1.5 transition-colors duration-300 ${isUnlocked ? 'text-emerald-300' : 'text-indigo-300/75'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full inline-block ${isUnlocked ? 'bg-emerald-400' : 'bg-blue-400 animate-ping'}`} />
                    {statusLabel}
                  </span>
                  <span className="text-pink-400 font-semibold">{Math.round(clamped)}%</span>
                </div>

                {/* Progress bar container */}
                <div className="h-1.5 w-full rounded-full bg-[#0d1222] border border-purple-500/25 p-[1px] overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #ec4899 100%)',
                      boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)'
                    }}
                    animate={{ width: `${clamped}%` }}
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
