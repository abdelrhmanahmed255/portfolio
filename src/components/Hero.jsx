import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiLocationMarker, HiSparkles } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

const Hero = () => {
  const [showCVDropdown, setShowCVDropdown] = useState(false);

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
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Floating background elements
  const FloatingElement = ({ delay = 0, size = "w-4 h-4", position = "top-20 left-20" }) => (
    <motion.div
      className={`absolute ${position} ${size} bg-white/10 rounded-full blur-sm`}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.3, 0.8, 0.3]
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );

  return (
    <section id="hero" className="min-h-screen relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} size="w-2 h-2" position="top-20 left-[10%]" />
        <FloatingElement delay={1} size="w-3 h-3" position="top-40 right-[15%]" />
        <FloatingElement delay={2} size="w-4 h-4" position="top-60 left-[20%]" />
        <FloatingElement delay={1.5} size="w-2 h-2" position="bottom-40 right-[10%]" />
        <FloatingElement delay={0.5} size="w-3 h-3" position="bottom-60 left-[15%]" />
        <FloatingElement delay={2.5} size="w-5 h-5" position="top-[30%] right-[5%]" />
      </div>

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
                <h2 className="text-2xl md:text-4xl font-light mb-6 text-gray-200">
                  Frontend Developer & 
                  <span className="text-blue-400"> UI/UX Enthusiast</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Passionate Frontend Developer with expertise in React.js ecosystem. 
                  I craft beautiful, responsive user interfaces with clean code and optimal performance.
                  Let's build something amazing together! 🚀
                </p>
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
                    {/* Direct Download Option */}
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
                    
                    {/* Google Drive Option */}
                    <motion.a
                      href="https://drive.google.com/file/d/1Nfws5GOBLGy6syCr-aX9y0sXuWq0kuc9/view?usp=sharing"
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
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Photo container */}
                <motion.div 
                  variants={floatingVariants}
                  animate="animate"
                  className="relative w-80 h-80 md:w-96 md:h-96"
                >
                  {/* Photo frame with gradient border */}
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                    <div className="w-full h-full bg-slate-900 rounded-full p-2">
                      {/* Photo placeholder - replace with your actual photo */}
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
                        {/* Fallback icon shown if image fails to load */}
                        <div
                          style={{ display: 'none' }}
                          className="w-full h-full bg-white rounded-full flex items-center justify-center text-gray-700 text-4xl font-bold"
                        >
                          <FaCode />
                        </div>
                        
                        {/* Half circle at bottom with </> icon - only shows on hover */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/4 bg-gray-800/90 backdrop-blur-sm rounded-b-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          <div className="text-white text-3xl font-bold transform scale-90 group-hover:scale-100 transition-transform duration-200">
                            &lt;/&gt;
                          </div>
                        </div>
                        
                        {/* Hover overlay for professional effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-300 text-center"
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
                <motion.div 
                  className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <p className="mt-2 text-sm font-medium">Explore More</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 