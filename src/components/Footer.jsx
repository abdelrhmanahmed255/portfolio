import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiArrowUp, HiMail } from 'react-icons/hi';

const quickLinks = ['About', 'Education', 'Projects', 'Skills', 'Contact'];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Accent top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent" />

      {/* Giant watermark name */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-4 md:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-black tracking-tighter text-white/[0.03] text-[88px] md:text-[180px] leading-none"
      >
        ABDELRHMAN
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Top row — brand + availability */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-14 pb-10 border-b border-white/[0.06]">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold tracking-tight"
              >
                Abdelrhman<span className="text-indigo-500">.</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-400 mt-2 max-w-md leading-relaxed"
              >
                Full Stack Node.js Developer — building fast, clean, end-to-end web products.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 self-start md:self-auto px-4 py-2 rounded-full bg-white/[0.04] border border-white/10"
            >
              <span className="relative flex w-2.5 h-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-slate-200">Available for opportunities</span>
            </motion.div>
          </div>

          {/* Middle grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12">
            {/* Navigate */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">Navigate</h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item.toLowerCase())}
                      className="group text-slate-300 hover:text-white transition-colors text-sm relative"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-slate-400">Cairo, Egypt</li>
                <li>
                  <a href="mailto:abdelrhmanahmedd2018@gmail.com" className="text-slate-300 hover:text-white transition-colors break-all">
                    abdelrhmanahmedd2018@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+201270755944" className="text-slate-300 hover:text-white transition-colors">
                    +20 127 075 5944
                  </a>
                </li>
              </ul>
            </div>

            {/* Stack */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">Built with</h4>
              <ul className="space-y-3 text-sm text-slate-400 font-mono">
                <li>react + vite</li>
                <li>tailwind css</li>
                <li>framer motion</li>
                <li>deployed on vercel</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">Follow</h4>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 hover:border-indigo-400 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/abdelrhmanahmed255"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 hover:border-indigo-400 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://wa.me/201270755944"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 hover:border-indigo-400 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300"
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="mailto:abdelrhmanahmedd2018@gmail.com"
                  aria-label="Email"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 hover:border-indigo-400 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300"
                >
                  <HiMail />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 border-t border-white/[0.06]">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Abdelrhman Ahmed. All rights reserved.
            </p>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-indigo-400 transition-colors duration-300"
            >
              Back to top
              <HiArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
