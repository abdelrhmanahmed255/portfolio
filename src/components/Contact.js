import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiChatAlt2, HiSparkles } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'abdelrhmanahmedd2018@gmail.com'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

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
    hidden: { y: 60, opacity: 0 },
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

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email Me",
      value: "abdelrhmanahmedd2018@gmail.com",
      link: "mailto:abdelrhmanahmedd2018@gmail.com",
      color: "blue",
      description: "Send me an email anytime!"
    },
    {
      icon: HiPhone,
      title: "Call Me",
      value: "+201270755944",
      link: "tel:+201270755944",
      color: "green",
      description: "Let's have a conversation"
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Cairo, Egypt",
      color: "purple",
      description: "Where I'm based"
    }
  ];

  const FloatingElement = ({ delay = 0, size = "w-4 h-4", position = "top-20 left-20" }) => (
    <motion.div
      className={`absolute ${position} ${size} bg-blue-200 rounded-full opacity-30`}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        scale: [1, 1.2, 1],
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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} size="w-3 h-3" position="top-20 left-[10%]" />
        <FloatingElement delay={1} size="w-4 h-4" position="top-40 right-[15%]" />
        <FloatingElement delay={2} size="w-2 h-2" position="top-60 left-[20%]" />
        <FloatingElement delay={1.5} size="w-5 h-5" position="bottom-40 right-[10%]" />
        <FloatingElement delay={0.5} size="w-3 h-3" position="bottom-60 left-[15%]" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <HiChatAlt2 className="mr-2" />
              Let's Work Together
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm always excited to discuss new projects, 
              creative ideas, or opportunities to be part of your vision. Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r ${
                  info.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  info.color === 'green' ? 'from-green-500 to-green-600' :
                  'from-purple-500 to-purple-600'
                } transform group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{info.description}</p>
                {info.link ? (
                  <motion.a
                    href={info.link}
                    whileHover={{ scale: 1.05 }}
                    className={`inline-block text-${info.color}-600 font-semibold hover:text-${info.color}-700 transition-colors`}
                  >
                    {info.value}
                  </motion.a>
                ) : (
                  <p className="text-gray-700 font-semibold">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-20 translate-x-20"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <HiPaperAirplane className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Send Me a Message
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Project Discussion"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <HiPaperAirplane className="text-lg" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Right side - Quick Contact & Social */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <HiSparkles className="mr-3 text-yellow-300" />
                    Quick Contact
                  </h3>
                  <p className="mb-6 opacity-90">
                    Need immediate assistance? Choose your preferred way to connect with me instantly.
                  </p>
                  
                  <div className="space-y-4">
                    <motion.a
                      whileHover={{ scale: 1.02, x: 5 }}
                      href="mailto:abdelrhmanahmedd2018@gmail.com"
                      className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <HiMail className="text-2xl mr-4" />
                      <div>
                        <div className="font-semibold">Email Me</div>
                        <div className="text-sm opacity-80">Quick response guaranteed</div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.02, x: 5 }}
                      href="https://wa.me/201270755944"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <FaWhatsapp className="text-2xl mr-4" />
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-sm opacity-80">Chat instantly</div>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow My Journey</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with my latest projects, insights, and professional updates.
                </p>
                
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
                    href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl flex items-center justify-center transition-all duration-300"
                  >
                    <FaLinkedin className="text-2xl mr-3" />
                    <span className="font-semibold">LinkedIn</span>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 10px 25px rgba(75, 85, 99, 0.4)" }}
                    href="https://github.com/abdelrhmanahmed255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 text-white p-4 rounded-xl flex items-center justify-center transition-all duration-300"
                  >
                    <FaGithub className="text-2xl mr-3" />
                    <span className="font-semibold">GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;