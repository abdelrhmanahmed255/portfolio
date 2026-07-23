import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap, FaNodeJs
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux,
  SiFormik, SiReactquery, SiAxios, SiExpress, SiMongodb
} from 'react-icons/si';
import { HiCode, HiCog, HiGlobeAlt, HiLightBulb, HiSparkles, HiServer } from 'react-icons/hi';
import { MdDesignServices } from 'react-icons/md';

const getSkillLabel = (level) => {
  if (level >= 95) return "Expert";
  if (level >= 85) return "Advanced";
  if (level >= 75) return "Proficient";
  return "Intermediate";
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: HiCode,
      color: "blue",
      skills: [
        { name: "JavaScript", icon: FaJsSquare, level: 90 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "HTML5", icon: FaHtml5, level: 95 },
        { name: "CSS3", icon: FaCss3Alt, level: 90 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: HiCog,
      color: "green",
      skills: [
        { name: "React", icon: FaReact, level: 95 },
        { name: "Next.js", icon: SiNextdotjs, level: 85 },
        { name: "Redux", icon: SiRedux, level: 80 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
        { name: "Bootstrap", icon: FaBootstrap, level: 85 },
        { name: "Material UI", icon: MdDesignServices, level: 80 },
        { name: "Node.js", icon: FaNodeJs, level: 85 },
        { name: "Express.js", icon: SiExpress, level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: HiGlobeAlt,
      color: "purple",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 85 },
        { name: "Formik", icon: SiFormik, level: 80 },
        { name: "React Query", icon: SiReactquery, level: 75 },
        { name: "Axios", icon: SiAxios, level: 85 },
        { name: "MongoDB", icon: SiMongodb, level: 80 }
      ]
    },
    {
      title: "AI Tools",
      icon: HiLightBulb,
      color: "orange",
      skills: [
        { name: "Prompt Engineering", level: 85 },
        { name: "Data Analysis", level: 75 },
        { name: "Workflow Automation", level: 80 },
        { name: "Google Analytics", level: 70 }
      ]
    },
    {
      title: "Backend & Database",
      icon: HiServer,
      color: "teal",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 85 },
        { name: "Express.js", icon: SiExpress, level: 80 },
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "REST APIs", icon: HiCode, level: 85 }
      ]
    }
  ];

  const languages = [
    { name: "Arabic", level: 100, description: "Native" },
    { name: "English", level: 75, description: "Intermediate" }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-300/10 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-300/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-6 shadow-sm"
            >
              <HiSparkles className="mr-2" /> Technical Proficiency
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              Skills & Expertise
            </h2>
            
            <div className="relative flex justify-center items-center mb-8">
              <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600"
                />
              </div>
            </div>
            
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A comprehensive toolkit that drives innovative web solutions and robust applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const bgGlowMap = {
                blue: 'hover:bg-blue-50/50 hover:shadow-blue-500/10',
                green: 'hover:bg-green-50/50 hover:shadow-green-500/10',
                purple: 'hover:bg-purple-50/50 hover:shadow-purple-500/10',
                orange: 'hover:bg-orange-50/50 hover:shadow-orange-500/10',
                teal: 'hover:bg-teal-50/50 hover:shadow-teal-500/10',
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 relative group overflow-hidden`}
                >
                  {/* Subtle top border accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                    category.color === 'blue' ? 'from-blue-400 to-blue-600' :
                    category.color === 'green' ? 'from-green-400 to-green-600' :
                    category.color === 'purple' ? 'from-purple-400 to-purple-600' :
                    category.color === 'teal' ? 'from-teal-400 to-teal-600' :
                    'from-orange-400 to-orange-600'
                  } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`} />
                  
                  <div className="flex items-center mb-8">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                      className={`w-14 h-14 ${
                        category.color === 'blue' ? 'bg-blue-100 shadow-blue-200' :
                        category.color === 'green' ? 'bg-green-100 shadow-green-200' :
                        category.color === 'purple' ? 'bg-purple-100 shadow-purple-200' :
                        category.color === 'teal' ? 'bg-teal-100 shadow-teal-200' :
                        'bg-orange-100 shadow-orange-200'
                      } rounded-2xl flex items-center justify-center mr-5 shadow-inner`}
                    >
                      <category.icon className={`text-2xl ${
                        category.color === 'blue' ? 'text-blue-600' :
                        category.color === 'green' ? 'text-green-600' :
                        category.color === 'purple' ? 'text-purple-600' :
                        category.color === 'teal' ? 'text-teal-600' :
                        'text-orange-600'
                      }`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className={`space-y-2 p-2 -mx-2 rounded-xl transition-all duration-300 ${bgGlowMap[category.color]}`}>
                        <div className="flex items-center justify-between px-2">
                          <div className="flex items-center">
                            {skill.icon && <skill.icon className="text-lg mr-2.5 text-gray-500 group-hover:text-gray-700 transition-colors" />}
                            <span className="font-medium text-gray-700">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                              {getSkillLabel(skill.level)}
                            </span>
                            <span className="text-sm font-bold text-gray-400 w-10 text-right">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden mx-2 relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                            className={`h-full rounded-full relative overflow-hidden ${
                              category.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                              category.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                              category.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                              category.color === 'teal' ? 'bg-gradient-to-r from-teal-400 to-teal-600' :
                              'bg-gradient-to-r from-orange-400 to-orange-600'
                            }`}
                          >
                            {/* Shimmer sweep effect */}
                            <motion.div
                              className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                              initial={{ x: '-100%' }}
                              whileInView={{ x: '200%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 1 + (idx * 0.15), ease: "easeInOut" }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Languages Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            
            <div className="flex items-center mb-8">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-indigo-100 shadow-indigo-200 rounded-2xl flex items-center justify-center mr-5 shadow-inner"
              >
                <HiGlobeAlt className="text-2xl text-indigo-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">Languages</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {languages.map((language, index) => (
                <div key={index} className="space-y-3 p-3 -mx-3 rounded-xl hover:bg-indigo-50/50 hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="flex items-center justify-between px-2">
                    <span className="font-semibold text-gray-700 text-lg">{language.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700">
                        {language.description}
                      </span>
                      <span className="text-sm font-bold text-gray-400">{language.level}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden mx-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full relative overflow-hidden"
                    >
                      {/* Shimmer sweep effect */}
                      <motion.div
                        className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '200%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1 + (index * 0.2), ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
