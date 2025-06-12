import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker, HiCode, HiLightBulb, HiSparkles } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaReact, FaJs, FaCss3Alt } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
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
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Get to know me
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                  <stat.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-3"></span>
                  My Journey
                </h3>
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    I'm a passionate <span className="font-semibold text-blue-600">Frontend Developer</span> with a love for creating 
                    stunning, user-centric web experiences. My journey began with curiosity about how websites work, 
                    and it has evolved into a dedicated pursuit of crafting digital solutions that make a difference.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    With a strong foundation in <span className="font-semibold text-purple-600">modern JavaScript frameworks </span> 
                     and a keen eye for design, I specialize in building responsive, accessible, and performant web applications. 
                    I believe in writing clean, maintainable code and staying current with the latest industry trends.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I'm always excited about the next challenge and 
                    the opportunity to bring innovative ideas to life.
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Technologies I Love</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "React.js", icon: FaReact, color: "text-blue-500" },
                    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
                    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" }
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center bg-white px-4 py-2 rounded-full shadow-md border border-gray-100"
                    >
                      <tech.icon className={`${tech.color} text-lg mr-2`} />
                      <span className="text-gray-700 font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">Education</h4>
                  <p className="text-gray-700 font-medium">Bachelor of Information Technology</p>
                  <p className="text-gray-500 text-sm">Zagazig University</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">Experience</h4>
                  <p className="text-gray-700 font-medium">1 Year</p>
                  <p className="text-gray-500 text-sm">Frontend Development</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact Card */}
            <motion.div variants={cardVariants}>
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <HiMail className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Let's Connect
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                    or simply chat about the latest in web development.
                  </p>
                  
                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ x: 10, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                      className="flex items-center p-4 rounded-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <HiMail className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">abdelrhmanahmedd2018@gmail.com</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                      className="flex items-center p-4 rounded-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <HiPhone className="text-green-600 text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-gray-600">+201270755944</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10, backgroundColor: "rgba(168, 85, 247, 0.05)" }}
                      className="flex items-center p-4 rounded-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <HiLocationMarker className="text-purple-600 text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Location</p>
                        <p className="text-gray-600">Cairo, Egypt</p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-4">Follow me</h4>
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)" }}
                        href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-lg transition-all duration-300"
                      >
                        <FaLinkedin className="text-xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 10px 20px rgba(75, 85, 99, 0.3)" }}
                        href="https://github.com/abdelrhmanahmed255"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-4 rounded-xl shadow-lg transition-all duration-300"
                      >
                        <FaGithub className="text-xl" />
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