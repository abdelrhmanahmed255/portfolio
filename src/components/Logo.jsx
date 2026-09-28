import React from 'react';

const Logo = ({ className = "w-11 h-11", showGlow = true }) => {
  return (
    <div className={`relative ${className} select-none`}>
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-[8px] opacity-40 -z-10" />
      )}
      <img
        src="/logo-fullstack.svg"
        alt="Abdelrhman Ahmed - Full Stack Developer Logo"
        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(139,92,246,0.3)]"
      />
    </div>
  );
};

export default Logo;
