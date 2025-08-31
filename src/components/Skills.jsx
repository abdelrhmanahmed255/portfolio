import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap,
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux,
  SiFormik, SiReactquery, SiAxios
} from 'react-icons/si';
import { HiCode, HiCog, HiGlobeAlt, HiLightBulb } from 'react-icons/hi';
import { MdDesignServices } from 'react-icons/md';

const Skills = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

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
                 { name: "Material UI", icon: MdDesignServices, level: 80 }
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
        { name: "Axios", icon: SiAxios, level: 85 }
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
    }
  ];

  const languages = [
    { name: "Arabic", level: 100, description: "Native" },
    { name: "English", level: 75, description: "Intermediate" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              Technical proficiency and tools that drive innovative web solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                                   <div className={`w-12 h-12 ${
                   category.color === 'blue' ? 'bg-blue-100' :
                   category.color === 'green' ? 'bg-green-100' :
                   category.color === 'purple' ? 'bg-purple-100' :
                   'bg-orange-100'
                 } rounded-xl flex items-center justify-center mr-4`}>
                   <category.icon className={`text-2xl ${
                     category.color === 'blue' ? 'text-blue-600' :
                     category.color === 'green' ? 'text-green-600' :
                     category.color === 'purple' ? 'text-purple-600' :
                     'text-orange-600'
                   }`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {skill.icon && <skill.icon className="text-lg mr-2 text-gray-600" />}
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                                                 <motion.div
                           initial={{ width: 0 }}
                           animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                           transition={{ duration: 1, delay: idx * 0.1 }}
                           className={`h-2 rounded-full ${
                             category.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                             category.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                             category.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                             'bg-gradient-to-r from-orange-400 to-orange-600'
                           }`}
                         ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages Section */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                <HiGlobeAlt className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Languages</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{language.name}</span>
                    <span className="text-sm text-gray-500">
                      {language.description} ({language.level}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${language.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-2 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 