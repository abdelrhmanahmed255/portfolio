import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiStar, HiBriefcase } from 'react-icons/hi';

const Education = () => {
  const educationData = [
    {
      type: "Experience",
      title: "Full-Stack Developer",
      institution: "Taqdum Software Technology",
      period: "May 2025 – Present",
      description: "Develop full-stack features for Pupilera, a Next.js school management SaaS platform. Build accessible, responsive dashboard components using Tailwind CSS and shadcn/ui. Integrate Redux Toolkit for global state and next-intl for full Arabic/English RTL internationalization.",
      icon: HiBriefcase,
      color: "blue"
    },
    {
      type: "Experience",
      title: "Frontend Developer",
      institution: "Murashah (KSA)",
      period: "Oct 2024 - Sep 2025",
      description: "Implemented accessible, responsive UI components in React to improve user flows. Collaborated with product and design teams to translate wireframes into performant, pixel-accurate interfaces. Improved page performance and mobile responsiveness through code-splitting and optimization best practices.",
      icon: HiBriefcase,
      color: "blue"
    },
    {
      type: "University",
      title: "Bachelor in Information Technology",
      institution: "Faculty of Computers & Information, Zagazig University",
      period: "Graduated: 2023",
      grade: "Very Good",
      activities: "Head of Student Union — Led cross-functional teams and coordinated initiatives with multiple stakeholders",
      icon: HiAcademicCap,
      color: "blue"
    },
    {
      type: "Certification",
      title: "Backend Development Diploma",
      institution: "Route Academy",
      period: "2024",
      description: "Comprehensive backend development training covering Node.js, Express, MongoDB, and REST APIs.",
      icon: HiStar,
      color: "purple"
    },
    {
      type: "Certification",
      title: "Mendix Rapid Developer Certification",
      institution: "Mendix",
      period: "2024",
      description: "Certified Rapid Developer. Also completed Agile Fundamentals and Low-Code Application Development Lifecycle.",
      icon: HiStar,
      color: "green"
    },
    {
      type: "Professional Training",
      title: "Front-End Diploma",
      institution: "Route Academy",
      period: "June 2024",
      description: "Focused on modern web development tools and technologies, including React, Next.js, Redux, and Tailwind CSS.",
      icon: HiStar,
      color: "green"
    },
    {
      type: "Certification",
      title: "AI Career Essentials",
      institution: "ALX Africa",
      period: "Nov 2024",
      description: "Trained in using AI tools across fields for tasks like prompt engineering, data analysis, personal Branding, and automation.",
      icon: HiStar,
      color: "purple"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-blue-200">
              Experience & Background
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 px-4">
              Experience &{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            ></motion.div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              Continuous learning and professional development in computer science and modern web technologies
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-8 md:left-12 top-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full transform -translate-x-1/2 hidden md:block"
            ></motion.div>

            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative pl-0 md:pl-24"
                >
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className={`hidden md:flex absolute left-12 top-16 w-8 h-8 rounded-full items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-10 ${
                      item.color === 'blue' ? 'bg-blue-500 shadow-blue-300/50' :
                      item.color === 'green' ? 'bg-green-500 shadow-green-300/50' :
                      'bg-purple-500 shadow-purple-300/50'
                    }`}
                  >
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden`}
                  >
                    {/* Top colored accent bar */}
                    <div className={`h-2 w-full ${
                      item.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                      item.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                      'bg-gradient-to-r from-purple-400 to-purple-600'
                    }`}></div>

                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
                            item.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                            item.color === 'green' ? 'bg-green-50 text-green-600' :
                            'bg-purple-50 text-purple-600'
                          }`}>
                            <item.icon className="text-2xl" />
                          </div>
                          <div>
                            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                              item.color === 'blue' ? 'text-blue-700 bg-blue-100' :
                              item.color === 'green' ? 'text-green-700 bg-green-100' :
                              'text-purple-700 bg-purple-100'
                            }`}>
                              {item.type}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                              {item.title}
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 font-medium mt-1">
                              {item.institution}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 bg-gray-100/80 px-4 py-2 rounded-lg self-start">
                          <HiCalendar className="mr-2 text-lg" />
                          <span className="font-medium whitespace-nowrap">{item.period}</span>
                        </div>
                      </div>
                      
                      <div className="pl-0 md:pl-16 space-y-3 mt-4">
                        {item.grade && (
                          <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-24 md:w-32">Grade:</span>
                            <span className="text-green-600 font-medium bg-green-50 px-3 py-1 rounded-md">{item.grade}</span>
                          </div>
                        )}
                        
                        {item.project && (
                          <div className="flex items-start">
                            <span className="font-semibold text-gray-700 w-24 md:w-32 shrink-0">Graduation Project:</span>
                            <span className="text-gray-600">{item.project}</span>
                          </div>
                        )}
                        
                        {item.description && (
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        
                        {item.activities && (
                          <div className="mt-6 p-5 bg-white/50 rounded-xl border border-gray-100 shadow-sm">
                            <span className="font-semibold text-gray-800 block mb-2">Extracurricular Activities</span>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.activities}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
