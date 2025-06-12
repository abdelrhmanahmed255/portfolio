import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiCalendar, HiStar } from 'react-icons/hi';

const Education = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const educationData = [
    {
      type: "University",
      title: "Bachelor of Information Technology",
      institution: "Faculty of Computer Science, Zagazig University",
      period: "Sep 2019 – May 2023",
      grade: "Very Good",
      project: "Smart Library System",
      activities: "Head of FCI Zagazig University Student Union - Led cross-functional teams and executed feedback from multiple stakeholders",
      icon: HiAcademicCap,
      color: "blue"
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
      title: "AI Career Essential",
      institution: "ALX",
      period: "Nov 2024",
      description: "Trained in using AI tools across fields for tasks like prompt engineering, data analysis, personal Branding, and automation.",
      icon: HiStar,
      color: "purple"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Education & Training
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              Continuous learning and professional development in computer science and modern web technologies
            </p>
          </motion.div>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    item.color === 'blue' ? 'bg-blue-100' :
                    item.color === 'green' ? 'bg-green-100' :
                    'bg-purple-100'
                  }`}>
                    <item.icon className={`text-2xl ${
                      item.color === 'blue' ? 'text-blue-600' :
                      item.color === 'green' ? 'text-green-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  
                  <div className="flex-grow">
                                         <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${
                       item.color === 'blue' ? 'border-blue-500' :
                       item.color === 'green' ? 'border-green-500' :
                       'border-purple-500'
                     }`}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                                                     <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 ${
                             item.color === 'blue' ? 'text-blue-600 bg-blue-100' :
                             item.color === 'green' ? 'text-green-600 bg-green-100' :
                             'text-purple-600 bg-purple-100'
                           }`}>
                            {item.type}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-lg text-gray-600 font-medium">
                            {item.institution}
                          </p>
                        </div>
                        <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                          <HiCalendar className="mr-2" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      
                      {item.grade && (
                        <div className="mb-3">
                          <span className="font-semibold text-gray-700">Grade: </span>
                          <span className="text-green-600 font-medium">{item.grade}</span>
                        </div>
                      )}
                      
                      {item.project && (
                        <div className="mb-3">
                          <span className="font-semibold text-gray-700">Graduation Project: </span>
                          <span className="text-gray-600">{item.project}</span>
                        </div>
                      )}
                      
                      {item.description && (
                        <p className="text-gray-600 mb-3">
                          {item.description}
                        </p>
                      )}
                      
                      {item.activities && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <span className="font-semibold text-gray-700">Extracurricular Activities: </span>
                          <p className="text-gray-600 mt-1">{item.activities}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 