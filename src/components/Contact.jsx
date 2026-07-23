import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiChatAlt2, HiSparkles } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100, y: 0 }}
            className={`fixed top-24 right-6 z-50 p-4 rounded-xl shadow-2xl flex items-center gap-3 ${
              submitStatus === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {submitStatus === 'success' ? <HiSparkles className="text-xl" /> : null}
            <span className="font-semibold">
              {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
              <HiChatAlt2 className="mr-2" />
              Let's Work Together
            </span>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center relative overflow-hidden group"
              >
                {/* Hover gradient border */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${
                  info.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  info.color === 'green' ? 'from-green-500 to-green-600' :
                  'from-purple-500 to-purple-600'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r ${
                  info.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  info.color === 'green' ? 'from-green-500 to-green-600' :
                  'from-purple-500 to-purple-600'
                }`}>
                  <info.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{info.description}</p>
                {info.link ? (
                  <a
                    href={info.link}
                    className={`inline-block font-semibold transition-colors ${
                      info.color === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                      info.color === 'green' ? 'text-green-600 hover:text-green-700' :
                      'text-purple-600 hover:text-purple-700'
                    }`}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-semibold">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
                      <div className="relative pt-2">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="peer w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white placeholder-transparent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                          placeholder="Your Name *"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-4 -top-1 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600 bg-transparent peer-focus:bg-white peer-focus:px-1 rounded-md"
                        >
                          Your Name *
                        </label>
                      </div>
                      <div className="relative pt-2">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="peer w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white placeholder-transparent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                          placeholder="Email Address *"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 -top-1 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600 bg-transparent peer-focus:bg-white peer-focus:px-1 rounded-md"
                        >
                          Email Address *
                        </label>
                      </div>
                    </div>

                    <div className="relative pt-2">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white placeholder-transparent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        placeholder="Subject *"
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-4 -top-1 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600 bg-transparent peer-focus:bg-white peer-focus:px-1 rounded-md"
                      >
                        Subject *
                      </label>
                    </div>

                    <div className="relative pt-2">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-gray-50 focus:bg-white placeholder-transparent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        placeholder="Message *"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-4 -top-1 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600 bg-transparent peer-focus:bg-white peer-focus:px-1 rounded-md"
                      >
                        Message *
                      </label>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
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
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
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
                    <a
                      href="mailto:abdelrhmanahmedd2018@gmail.com"
                      className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <HiMail className="text-2xl mr-4" />
                      <div>
                        <div className="font-semibold">Email Me</div>
                        <div className="text-sm opacity-80">Quick response guaranteed</div>
                      </div>
                    </a>
                    
                    <a
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
                    </a>
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
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl flex items-center justify-center transition-all duration-300"
                  >
                    <FaLinkedin className="text-2xl mr-3" />
                    <span className="font-semibold">LinkedIn</span>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
