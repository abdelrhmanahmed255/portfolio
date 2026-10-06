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
      icon: HiBriefcase
    },
    {
      type: "Experience",
      title: "Frontend Developer",
      institution: "Murashah (KSA)",
      period: "Oct 2024 - Sep 2025",
      description: "Implemented accessible, responsive UI components in React to improve user flows. Collaborated with product and design teams to translate wireframes into performant, pixel-accurate interfaces. Improved page performance and mobile responsiveness through code-splitting and optimization best practices.",
      icon: HiBriefcase
    },
    {
      type: "University",
      title: "Bachelor in Information Technology",
      institution: "Faculty of Computers & Information, Zagazig University",
      period: "Graduated: 2023",
      grade: "Very Good",
      activities: "Head of Student Union — Led cross-functional teams and coordinated initiatives with multiple stakeholders",
      icon: HiAcademicCap
    },
    {
      type: "Certification",
      title: "Backend Development Diploma",
      institution: "Route Academy",
      period: "2024",
      description: "Comprehensive backend development training covering Node.js, Express, MongoDB, and REST APIs.",
      icon: HiStar
    },
    {
      type: "Certification",
      title: "Mendix Rapid Developer Certification",
      institution: "Mendix",
      period: "2024",
      description: "Certified Rapid Developer. Also completed Agile Fundamentals and Low-Code Application Development Lifecycle.",
      icon: HiStar
    },
    {
      type: "Professional Training",
      title: "Front-End Diploma",
      institution: "Route Academy",
      period: "June 2024",
      description: "Focused on modern web development tools and technologies, including React, Next.js, Redux, and Tailwind CSS.",
      icon: HiStar
    },
    {
      type: "Certification",
      title: "AI Career Essentials",
      institution: "ALX Africa",
      period: "Nov 2024",
      description: "Trained in using AI tools across fields for tasks like prompt engineering, data analysis, personal Branding, and automation.",
      icon: HiStar
    }
  ];

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
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
            <span className="inline-block text-indigo-600 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Experience & Background
            </span>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 px-4 tracking-tight"
            >
              Experience & <span className="text-indigo-600">Education</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[3px] bg-indigo-600 mx-auto rounded-full"
            ></motion.div>
            <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto">
              Continuous learning and professional development in computer science and modern web technologies
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline rail */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[9px] top-2 w-px bg-slate-200 hidden md:block"
            ></motion.div>

            <div className="space-y-8">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-0 md:pl-12"
                >
                  {/* Timeline Node — minimal ring */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.25 }}
                    className="hidden md:flex absolute left-0 top-9 w-[19px] h-[19px] rounded-full bg-white border-2 border-indigo-600 items-center justify-center z-10"
                  >
                    <span className="w-[7px] h-[7px] rounded-full bg-indigo-600" />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-indigo-200 transition-[box-shadow,border-color] duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-slate-900 text-white">
                            <item.icon className="text-xl" />
                          </div>
                          <div>
                            <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-md mb-2 text-indigo-700 bg-indigo-50 border border-indigo-100">
                              {item.type}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                              {item.title}
                            </h3>
                            <p className="text-base md:text-lg text-slate-500 font-medium mt-1">
                              {item.institution}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center text-slate-500 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-lg self-start text-sm">
                          <HiCalendar className="mr-2" />
                          <span className="font-medium whitespace-nowrap">{item.period}</span>
                        </div>
                      </div>

                      <div className="pl-0 md:pl-[60px] space-y-3 mt-4">
                        {item.grade && (
                          <div className="flex items-center">
                            <span className="font-semibold text-slate-700 w-24 md:w-32">Grade:</span>
                            <span className="text-indigo-700 font-medium bg-indigo-50 px-3 py-1 rounded-md">{item.grade}</span>
                          </div>
                        )}

                        {item.project && (
                          <div className="flex items-start">
                            <span className="font-semibold text-slate-700 w-24 md:w-32 shrink-0">Graduation Project:</span>
                            <span className="text-slate-600">{item.project}</span>
                          </div>
                        )}

                        {item.description && (
                          <p className="text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {item.activities && (
                          <div className="mt-6 p-5 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="font-semibold text-slate-800 block mb-2">Extracurricular Activities</span>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.activities}</p>
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
