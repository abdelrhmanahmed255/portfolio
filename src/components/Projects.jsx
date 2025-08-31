import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode, HiStar } from 'react-icons/hi';
import { FaReact, FaStripe, FaRobot } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiRedux } from 'react-icons/si';

const Projects = () => {
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const projects = [
    {
      title: "Resume Creator - AI-Powered Resume Generator",
      description: "Designed a responsive application enabling users to create professional resumes with AI-driven suggestions for content optimization. Integrated Stripe as a secure payment gateway to provide watermark-free downloadable resumes after successful transactions.",
      type: "Web Site",
      company: "Murashah Company (Saudi Arabia)",
      link: "https://murashah.com/",
      technologies: ["React.js", "Tailwind CSS", "Formik", "Yup", "Axios", "PDF-Lib", "Docx"],
      features: [
        "AI-driven content optimization",
        "Secure Stripe payment integration",
        "Watermark-free PDF generation",
        "Responsive design"
      ],
      icon: HiStar,
      color: "blue",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "SCAI - School AI Assistant",
      description: "Developed an intelligent assistant to streamline educational workflows and enhance classroom management. Implemented natural language processing capabilities to provide personalized responses to student and teacher queries.",
      type: "Platform",
      link: "https://scai-vert.vercel.app/",
      technologies: ["React.js", "Tailwind CSS", "Web Speech API"],
      features: [
        "Natural language processing",
        "Voice recognition integration",
        "Text-to-speech features",
        "Multi-device accessibility",
        "Intuitive interface design"
      ],
      icon: FaRobot,
      color: "green",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "E-commerce Application - Online Marketplace",
      description: "Developed a responsive e-commerce platform with optimized, user-friendly interfaces to ensure a seamless shopping experience. Built with clean, well-documented code to ensure maintainability.",
      type: "Github Demo",
      link: "https://abdelrhmanahmed255.github.io/Freshcart",
      technologies: ["React.js", "React hooks", "Tailwind CSS", "Axios", "Formik", "Yup", "React Query"],
      features: [
        "Responsive design",
        "Clean, maintainable code",
        "Optimized user interfaces",
        "Seamless shopping experience"
      ],
      icon: HiCode,
      color: "purple",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Next Book - Online Social Media Platform",
      description: "Developed an interactive platform for managing and discovering posts with user-friendly navigation and responsive design. Implemented with Material UI for sleek design and Redux for state management.",
      type: "Github Repo",
      link: "https://github.com/abdelrhmanahmed255/nextbookmedia",
      technologies: ["Next.js", "Material UI", "Redux"],
      features: [
        "Interactive post management",
        "User-friendly navigation",
        "Material UI design system",
        "Redux state management"
      ],
      icon: SiNextdotjs,
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "MadrasaPro - Educational Platform",
      description: "Developed a comprehensive frontend for an Arabic educational platform to streamline student learning and assessment workflows. Designed a dynamic student dashboard displaying real-time data (scores, progress, learning styles, recent activities) fetched from backend APIs, with responsive UI and progress tracking. Built an interactive test-taking system with timers, question navigation, flagging, and submission features, supporting multiple subjects and difficulty levels. Created a fully responsive interface with Arabic RTL support, modern animations, and mobile-first design.",
      type: "Web Site",
      link: "https://madrasapro.vercel.app",
      technologies: ["React.js", "Tailwind CSS", "Axios", "React Router", "React Query", "Formik", "Yup", "Web Speech API"],
      features: [
        "Dynamic student dashboard with real-time data",
        "Interactive test-taking system",
        "Arabic RTL support",
        "Responsive design"
      ],
      icon: HiCode,
      color: "green",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "HIRSTO – Integrated Health Platform",
      description: "Built a unified healthcare platform connecting doctors, pharmacies, and insurers with patient-facing experiences. Implemented AI-powered pre-diagnosis, secure telehealth, EMR features, and smart booking. Integrated e-prescriptions, pharmacy fulfillment, and drug interaction checks for safe medication workflows. Automated insurance verification, claims processing, and approval workflows with analytics dashboards. Delivered a consistent, responsive UI/UX with shared navbar, hero gradient, and reusable components.",
      type: "Web Site",
      link: "https://hirsto.vercel.app/",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router", "React Query"],
      features: [
        "AI-powered pre-diagnosis",
        "Secure telehealth and EMR",
        "E-prescriptions and pharmacy integration",
        "Insurance verification and claims processing"
      ],
      icon: FaRobot,
      color: "red",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      'React.js': FaReact,
      'Tailwind CSS': SiTailwindcss,
      'Next.js': SiNextdotjs,
      'Redux': SiRedux,
      'Stripe': FaStripe
    };
    return iconMap[tech] || HiCode;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              Showcase of recent projects demonstrating expertise in modern web development and AI integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white`}>
                      <project.icon className="text-xl" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {project.company && (
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-500">Client: </span>
                      <span className="text-blue-600 font-medium">{project.company}</span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => {
                        const IconComponent = getTechIcon(tech);
                        return (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            <IconComponent className="mr-1" />
                            {tech}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-shadow`}
                    >
                      <HiExternalLink className="mr-2" />
                      View Project
                    </motion.a>
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

export default Projects; 