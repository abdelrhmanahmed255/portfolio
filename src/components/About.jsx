import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker, HiCode, HiLightBulb, HiSparkles } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaReact, FaJs, FaCss3Alt } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: "1+", label: "Year Experience", icon: HiCode },
    { number: "10+", label: "Projects Completed", icon: HiLightBulb },
    { number: "3+", label: "Technologies Mastered", icon: HiSparkles }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-32 h-32 md:w-72 md:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 md:opacity-30 animate-pulse"></div>
        <div className="absolute top-20 right-4 md:top-40 md:right-10 w-24 h-24 md:w-72 md:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 md:opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-16 left-8 md:-bottom-32 md:left-20 w-28 h-28 md:w-72 md:h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 md:opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <motion.span 
              className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-600 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Get to know me
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 px-4">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl mb-3 md:mb-4">
                  <stat.icon className="text-white text-lg md:text-2xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left side - Content */}
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center">
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-2 md:mr-3"></span>
                  My Journey
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    I'm a passionate <span className="font-semibold text-blue-600">Frontend Developer</span> with a love for creating 
                    stunning, user-centric web experiences. My journey began with curiosity about how websites work, 
                    and it has evolved into a dedicated pursuit of crafting digital solutions that make a difference.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    With a strong foundation in <span className="font-semibold text-purple-600">modern JavaScript frameworks </span> 
                     and a keen eye for design, I specialize in building responsive, accessible, and performant web applications. 
                    I believe in writing clean, maintainable code and staying current with the latest industry trends.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I'm always excited about the next challenge and 
                    the opportunity to bring innovative ideas to life.
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Technologies I Love</h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {[
                    { name: "React.js", icon: FaReact, color: "text-blue-500" },
                    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
                    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" }
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center bg-white px-3 py-2 md:px-4 md:py-2 rounded-full shadow-md border border-gray-100"
                    >
                      <tech.icon className={`${tech.color} text-base md:text-lg mr-1 md:mr-2`} />
                      <span className="text-gray-700 font-medium text-sm md:text-base">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Education</h4>
                  <p className="text-gray-700 font-medium text-sm md:text-base">Bachelor of Information Technology</p>
                  <p className="text-gray-500 text-xs md:text-sm">Zagazig University</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Experience</h4>
                  <p className="text-gray-700 font-medium text-sm md:text-base">1 Year</p>
                  <p className="text-gray-500 text-xs md:text-sm">Frontend Development</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact Card */}
            <motion.div variants={cardVariants}>
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden mt-8 lg:mt-0">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 md:-translate-y-16 translate-x-10 md:translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4">
                      <HiMail className="text-white text-lg md:text-xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      Let's Connect
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                    I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                    or simply chat about the latest in web development.
                  </p>
                  
                  <div className="space-y-4 md:space-y-6">
                    <motion.div
                      whileHover={{ x: 10, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                      className="flex items-center p-3 md:p-4 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                        <HiMail className="text-blue-600 text-lg md:text-xl" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800 text-sm md:text-base">Email</p>
                        <p className="text-gray-600 text-xs md:text-sm break-all">abdelrhmanahmedd2018@gmail.com</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                      className="flex items-center p-3 md:p-4 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                        <HiPhone className="text-green-600 text-lg md:text-xl" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800 text-sm md:text-base">Phone</p>
                        <p className="text-gray-600 text-xs md:text-sm">+201270755944</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10, backgroundColor: "rgba(168, 85, 247, 0.05)" }}
                      className="flex items-center p-3 md:p-4 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                        <HiLocationMarker className="text-purple-600 text-lg md:text-xl" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800 text-sm md:text-base">Location</p>
                        <p className="text-gray-600 text-xs md:text-sm">Cairo, Egypt</p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Follow me</h4>
                    <div className="flex space-x-3 md:space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)" }}
                        href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 md:p-4 rounded-xl shadow-lg transition-all duration-300"
                      >
                        <FaLinkedin className="text-lg md:text-xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 10px 20px rgba(75, 85, 99, 0.3)" }}
                        href="https://github.com/abdelrhmanahmed255"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-3 md:p-4 rounded-xl shadow-lg transition-all duration-300"
                      >
                        <FaGithub className="text-lg md:text-xl" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 