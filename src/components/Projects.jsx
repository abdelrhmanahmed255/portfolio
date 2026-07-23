import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiStar, HiSparkles } from 'react-icons/hi';
import { FaReact, FaStripe, FaRobot, FaNodeJs, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiRedux, SiExpress, SiMongodb } from 'react-icons/si';

const ProjectCard = ({ project, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    // Max rotation of 3 degrees
    const rotateXValue = ((y - centerY) / centerY) * -3;
    const rotateYValue = ((x - centerX) / centerX) * 3;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const getTechBadgeColor = (tech) => {
    if (tech.includes('React')) return 'bg-blue-50 text-blue-600 border-blue-100';
    if (tech.includes('Tailwind')) return 'bg-cyan-50 text-cyan-600 border-cyan-100';
    if (tech.includes('Next.js')) return 'bg-gray-100 text-gray-800 border-gray-200';
    if (tech.includes('Redux')) return 'bg-purple-50 text-purple-600 border-purple-100';
    if (tech.includes('AI')) return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    if (tech.includes('TypeScript')) return 'bg-blue-50 text-blue-700 border-blue-200';
    if (tech.includes('Node.js') || tech.includes('Express') || tech.includes('MongoDB')) return 'bg-green-50 text-green-600 border-green-100';
    return 'bg-gray-50 text-gray-600 border-gray-100';
  };

  const getTechIcon = (tech) => {
    const iconMap = {
      'React.js': FaReact,
      'Tailwind CSS': SiTailwindcss,
      'Next.js': SiNextdotjs,
      'Redux': SiRedux,
      'Stripe': FaStripe,
      'Node.js': FaNodeJs,
      'Express.js': SiExpress,
      'MongoDB': SiMongodb,
      'REST API': FaServer
    };
    const Icon = iconMap[tech] || HiCode;
    return <Icon className="mr-1.5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group h-full"
      style={{ perspective: 1000 }}
    >
      {index === 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-[0_0_15px_rgba(245,158,11,0.5)] z-20 border border-amber-200"
        >
          <HiStar className="mr-1 text-sm animate-pulse" /> Featured
        </motion.div>
      )}

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        className="h-full relative rounded-2xl p-[2px] transform-gpu"
      >
        {/* Animated Gradient Border on Hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        {/* Card Content Container */}
        <div className="relative h-full bg-white rounded-2xl overflow-hidden flex flex-col z-10">
          <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
          
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex items-start justify-between mb-6">
              <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <project.icon className="text-xl" />
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full uppercase tracking-wider">
                {project.type}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
              {project.description}
            </p>

            {project.company && (
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-500">Client: </span>
                <span className="text-blue-600 font-medium">{project.company}</span>
              </div>
            )}

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Key Features:</h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 mt-auto">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105 ${getTechBadgeColor(tech)}`}
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-50">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 overflow-hidden relative"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/btn:w-56 group-hover/btn:h-56 opacity-10"></span>
                <HiExternalLink className="mr-2 relative z-10" />
                <span className="relative z-10">View Project</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "CVLogs - Smart Career Platform",
      description: "Built a comprehensive career management platform that transforms the job application journey. Features an AI-powered CV Builder that rewrites experience professionally and optimizes for ATS systems. Integrated Smart Job Matching that analyzes skills and keywords to suggest relevant opportunities. Includes Cover Letter Generator, CV Optimization with scoring, and a smart dashboard tracking profile completion, application stats, and CV strength.",
      type: "Web Site",
      link: "https://cvlogs.com",
      technologies: ["React.js", "Tailwind CSS", "AI Integration", "Axios", "React Router"],
      features: [
        "AI-powered CV Builder with ATS optimization",
        "Smart Job Matching based on skills analysis",
        "Cover Letter Generator for job descriptions",
        "CV Optimization & Scoring system",
        "Smart Dashboard with analytics",
        "Full Arabic & English support",
        "Cross-device responsive design"
      ],
      icon: HiStar,
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Sara7a - Node.js REST API",
      description: "Built RESTful backend for an anonymous feedback/Q&A platform with user authentication, post management, and role-based access control. Centralized error handling and request validation middleware across all routes for consistent API responses.",
      type: "Backend API",
      link: "https://github.com/abdelrhmanahmed255", // placeholder, as CV didn't specify
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST API"],
      features: [
        "User authentication and authorization",
        "Role-based access control",
        "Centralized error handling middleware",
        "Request validation logic"
      ],
      icon: FaServer,
      color: "green",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Booking System - REST API",
      description: "Designed a Node.js/Express booking API with JWT authentication covering registration, login, token refresh, and route protection. Designed Mongoose schemas with validators and middleware that strip unexpected request fields before DB writes, preventing mass-assignment vulnerabilities. Structured project with MVC separation of concerns and environment-based configuration for local and production deployments.",
      type: "Backend API",
      link: "https://github.com/abdelrhmanahmed255", // placeholder
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST API"],
      features: [
        "JWT Authentication and route protection",
        "Mongoose schemas with strict validators",
        "MVC separation of concerns",
        "Environment-based configuration"
      ],
      icon: FaServer,
      color: "teal",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      title: "Snaidi - Educational Learning Platform",
      description: "Developed AI-powered learning platform with assessments, analytics dashboard, gamification, and scheduling system with full CRUD operations.",
      type: "Web Site",
      link: "https://github.com/abdelrhmanahmed255", // placeholder
      technologies: ["React.js", "Context API", "AI Integration", "Tailwind CSS"],
      features: [
        "Assessments and analytics dashboard",
        "Gamification features",
        "Scheduling system with CRUD operations",
        "Admin Dashboard"
      ],
      icon: HiCode,
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500"
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
      gradient: "from-blue-500 to-purple-600"
    },
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
      gradient: "from-green-500 to-teal-500"
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
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-6 shadow-sm"
            >
              <HiSparkles className="mr-2" /> Portfolio Works
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              Featured Projects
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
              Showcase of <span className="font-semibold text-blue-600">{projects.length}</span> recent projects demonstrating expertise in modern web development and AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;