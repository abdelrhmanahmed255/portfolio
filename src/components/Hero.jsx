import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiLocationMarker, HiSparkles } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaCode, FaReact, FaJs, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Hero = () => {
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Full Stack Node.js Developer";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.cv-dropdown-container')) {
        setShowCVDropdown(false);
      }
    };

    if (showCVDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showCVDropdown]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const photoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Helper to render typed text with different colors
  const renderTypedText = () => {
    const firstPart = "Full Stack ";
    if (typedText.length <= firstPart.length) {
      return <span>{typedText}</span>;
    }
    return (
      <>
        <span>{firstPart}</span>
        <span className="text-blue-400">{typedText.substring(firstPart.length)}</span>
      </>
    );
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative bg-slate-900 overflow-hidden"
    >
      {/* 1. Aurora gradient mesh background */}
      <motion.div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/30 rounded-full blur-[120px]"
          animate={{ x: [0, 25, 0], y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px]"
          animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"
          animate={{ x: [0, 15, 0], y: [0, -25, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-pink-600/20 rounded-full blur-[120px]"
          animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* 4. Floating tech icons in background */}
        <motion.div className="hidden md:block absolute top-[20%] left-[15%] text-6xl text-white opacity-5"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <FaReact />
        </motion.div>
        <motion.div className="hidden md:block absolute top-[60%] left-[8%] text-5xl text-white opacity-5"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <FaJs />
        </motion.div>
        <motion.div className="hidden md:block absolute top-[15%] right-[25%] text-6xl text-white opacity-5"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }} transition={{ duration: 5.5, repeat: Infinity }}>
          <FaNodeJs />
        </motion.div>
        <motion.div className="hidden md:block absolute bottom-[25%] right-[15%] text-7xl text-white opacity-5"
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity }}>
          <SiMongodb />
        </motion.div>
        <motion.div className="hidden md:block absolute bottom-[15%] left-[25%] text-5xl text-white opacity-5"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
          <FaGitAlt />
        </motion.div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20 pb-10">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
          >
            {/* Left side - Text content */}
            <div className="text-white space-y-8 relative" style={{ zIndex: 10 }}>
              <motion.div variants={itemVariants}>
                <motion.div 
                  className="inline-flex items-center bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <HiSparkles className="mr-2 text-purple-300" />
                  <span className="text-sm font-medium text-purple-200">Available for opportunities</span>
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Abdelrhman
                  </span>
                </h1>
                
                <div className="flex items-center text-lg md:text-xl text-gray-300 mt-4">
                  <HiLocationMarker className="mr-2 text-purple-400" />
                  <span>Cairo, Egypt</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl md:text-4xl font-light mb-6 text-gray-200 min-h-[40px] md:min-h-[48px]">
                  {renderTypedText()}
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[2px] h-[1em] bg-blue-400 ml-1 align-middle"
                  />
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Passionate Full Stack Developer with expertise in React.js and Node.js ecosystems. I build end-to-end web applications with beautiful frontends and robust backends. Let's build something amazing together! 🚀
                </p>

                {/* 6. Inline stats badges */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-xl backdrop-blur-md flex items-center shadow-lg shadow-blue-500/5 hover:bg-blue-500/20 transition-all duration-300">
                    <span className="text-blue-400 font-bold text-xl mr-2">10+</span> 
                    <span className="text-gray-300 text-sm font-medium">Projects</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-4 py-2 rounded-xl backdrop-blur-md flex items-center shadow-lg shadow-purple-500/5 hover:bg-purple-500/20 transition-all duration-300">
                    <span className="text-purple-400 font-bold text-xl mr-2">1+</span> 
                    <span className="text-gray-300 text-sm font-medium">Years Exp.</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:abdelrhmanahmedd2018@gmail.com"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center shadow-lg"
                >
                  <HiMail className="mr-2 text-xl" />
                  Get In Touch
                </motion.a>
                
                {/* CV Download with Dropdown */}
                <div className="relative cv-dropdown-container">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCVDropdown(!showCVDropdown)}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center shadow-lg relative"
                  >
                    <HiDownload className="mr-2 text-xl" />
                    Download CV
                    <motion.div
                      animate={{ rotate: showCVDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      ▼
                    </motion.div>
                  </motion.button>
                  
                  {/* Animated Dropdown */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: showCVDropdown ? 1 : 0,
                      y: showCVDropdown ? 0 : 10,
                      scale: showCVDropdown ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute bottom-full left-0 mb-2 w-64 md:w-72 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 ${
                      showCVDropdown ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                    style={{ 
                      zIndex: 9999
                    }}
                  >
                    <motion.a
                      href="/cv/Abdelrhman-Ahmed-CV.pdf"
                      download="Abdelrhman_Ahmed_CV.pdf"
                      onClick={() => setShowCVDropdown(false)}
                      whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                      className="flex items-center px-6 py-4 text-gray-800 hover:text-green-600 border-b border-gray-100/50 transition-all duration-200"
                    >
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <HiDownload className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Direct Download</div>
                        <div className="text-sm text-gray-600">Download PDF to your device</div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href="https://drive.google.com/file/d/1uO7P1lAuWyDv3xr0VMYJHzioeqZuAGKF/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowCVDropdown(false)}
                      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                      className="flex items-center px-6 py-4 text-gray-800 hover:text-blue-600 transition-all duration-200"
                    >
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-lg">☁️</span>
                      </div>
                      <div>
                        <div className="font-semibold text-lg">View on Google Drive</div>
                        <div className="text-sm text-gray-600">Preview online without downloading</div>
                      </div>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex space-x-6 pt-4">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5, color: "#0077B5" }}
                  href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-blue-400 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5, color: "#333" }}
                  href="https://github.com/abdelrhmanahmed255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-gray-400 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>
                
              </motion.div>
            </div>

            {/* Right side - Photo */}
            <motion.div 
              variants={photoVariants}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glowing background circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl" />
                
                {/* Photo container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 hover:-translate-y-2 transition-transform duration-500">
                  {/* 3. Double-ring animation */}
                  <motion.div
                    className="hidden md:block absolute inset-[-15px] rounded-full border-[2px] border-dashed border-blue-400/60"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="hidden md:block absolute inset-[-30px] rounded-full border-[2px] border-dotted border-purple-400/60"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Photo frame with gradient border */}
                  <div className="relative w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 z-10">
                    <div className="w-full h-full bg-slate-900 rounded-full p-2">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-gray-700 text-6xl overflow-hidden relative group cursor-pointer">
                        <img 
                          src="/me.png" 
                          alt="Abdelrhman Ahmed Mohamed" 
                          className="w-full h-full object-cover object-top rounded-full"
                          style={{ objectPosition: '50% 20%' }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div
                          style={{ display: 'none' }}
                          className="w-full h-full bg-white rounded-full flex items-center justify-center text-gray-700 text-4xl font-bold"
                        >
                          <FaCode />
                        </div>
                        
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/4 bg-gray-800/90 backdrop-blur-sm rounded-b-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          <div className="text-white text-3xl font-bold transform scale-90 group-hover:scale-100 transition-transform duration-200">
                            &lt;/&gt;
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 5. Better scroll indicator (sleeker mouse icon) */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className="w-[26px] h-[42px] rounded-full border-2 border-white/50 flex justify-center p-[2px]">
                <motion.div 
                  className="w-[4px] h-[8px] bg-white rounded-full"
                  animate={{ 
                    y: [0, 16, 0], 
                    opacity: [1, 0, 1] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <p className="mt-3 text-xs font-medium tracking-widest text-white/70 uppercase">Scroll</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;