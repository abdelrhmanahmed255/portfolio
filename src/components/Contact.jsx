import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    icon: HiMail,
    title: 'Email Me',
    value: 'abdelrhmanahmedd2018@gmail.com',
    link: 'mailto:abdelrhmanahmedd2018@gmail.com',
    description: 'Replies within 24 hours'
  },
  {
    icon: HiPhone,
    title: 'Call Me',
    value: '+20 127 075 5944',
    link: 'tel:+201270755944',
    description: "Let's have a conversation"
  },
  {
    icon: HiLocationMarker,
    title: 'Location',
    value: 'Cairo, Egypt',
    description: 'Open to remote work worldwide'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-indigo-600 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Let's Work Together
            </span>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 tracking-tight"
            >
              Get In <span className="text-indigo-600">Touch</span>
            </motion.h2>
            <div className="w-12 h-[3px] bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Pick whichever way suits you — I'm one message away.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, scale: 0.85, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 160, damping: 16, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl border border-slate-200 hover:border-indigo-200 text-center relative overflow-hidden group transition-[box-shadow,border-color] duration-300"
              >
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-slate-900">
                  <info.icon className="text-indigo-300 text-xl md:text-2xl" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1">{info.title}</h3>
                <p className="text-slate-400 text-xs mb-3">{info.description}</p>
                {info.link ? (
                  <a
                    href={info.link}
                    className="inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-slate-700 text-sm font-semibold">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Direct action panel */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-900 rounded-3xl px-6 py-8 md:px-12 md:py-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Prefer a quick chat?
                </h3>
                <p className="text-slate-400 text-sm md:text-base max-w-sm">
                  Skip the formalities — email me directly or message me on WhatsApp and let's talk about your idea.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:abdelrhmanahmedd2018@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-300"
                >
                  <HiMail className="text-lg" />
                  Email Me
                  <HiArrowRight />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/201270755944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/[0.06] border border-white/15 hover:border-indigo-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp
                </motion.a>
              </div>
            </div>

            {/* Socials row */}
            <div className="relative z-10 flex items-center justify-center md:justify-start gap-3 mt-7 pt-6 border-t border-white/[0.06]">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 mr-1">Follow</span>
              <a
                href="https://www.linkedin.com/in/abdelrhman-ahmed01/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 hover:border-indigo-400 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/abdelrhmanahmed255"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 hover:border-indigo-400 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
