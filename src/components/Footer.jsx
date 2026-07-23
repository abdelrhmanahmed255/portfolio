import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-900 text-white py-12 pt-20">
      {/* Wave SVG divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-900"></path>
        </svg>
      </div>

      {/* Gradient animated top border */}
      <motion.div
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
        style={{ backgroundSize: '200% auto' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-4"
              >
                Abdelrhman Ahmed
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 leading-relaxed"
              >
                Full Stack Node.js Developer passionate about creating beautiful, responsive, and user-friendly web applications with robust backend solutions.
              </motion.p>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg font-semibold mb-4"
              >
                Quick Links
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3"
              >
                {['About', 'Education', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                  <div key={item} className="overflow-hidden">
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="group flex items-center text-gray-400 hover:text-white transition-colors relative"
                    >
                      <span>{item}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </motion.button>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg font-semibold mb-4"
              >
                Get In Touch
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-2 text-gray-400"
              >
                <p>Cairo, Egypt</p>
                <a
                  href="mailto:abdelrhmanahmedd2018@gmail.com"
                  className="hover:text-white transition-colors block"
                >
                  abdelrhmanahmedd2018@gmail.com
                </a>
                <a
                  href="tel:+201270755944"
                  className="block hover:text-white transition-colors"
                >
                  +201270755944
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex space-x-4 mt-6"
              >
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  href="https://github.com/abdelrhmanahmed255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 hover:shadow-[0_0_15px_rgba(156,163,175,0.6)] transition-all duration-300"
                >
                  <FaGithub />
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="border-t border-gray-700 my-8"
          ></motion.div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
            >
              © {new Date().getFullYear()} Abdelrhman Ahmed. Made with{' '}
              <FaHeart className="text-red-500 mx-1" /> and React.js
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-blue-400"></span>
              <HiArrowUp className="text-lg relative z-10" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;