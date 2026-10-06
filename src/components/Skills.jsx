import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
 * Skill level is shown as a 5-dot meter instead of the usual percentage bars.
 * dots: 5 = Expert, 4 = Advanced, 3 = Proficient
 */
const CATEGORIES = [
  {
    id: 'frontend',
    label: 'frontend',
    skills: [
      { name: 'react', dots: 5 },
      { name: 'next.js', dots: 4 },
      { name: 'javascript', dots: 5 },
      { name: 'typescript', dots: 4 },
      { name: 'html / css', dots: 5 },
      { name: 'tailwind css', dots: 5 },
      { name: 'redux toolkit', dots: 4 },
      { name: 'shadcn/ui', dots: 4 },
      { name: 'framer motion', dots: 4 }
    ]
  },
  {
    id: 'backend',
    label: 'backend',
    skills: [
      { name: 'node.js', dots: 4 },
      { name: 'express.js', dots: 4 },
      { name: 'nestjs', dots: 3 },
      { name: 'mongodb / mongoose', dots: 4 },
      { name: 'redis', dots: 3 },
      { name: 'graphql', dots: 4 },
      { name: 'websockets', dots: 3 },
      { name: 'jwt / zod', dots: 4 }
    ]
  },
  {
    id: 'tools',
    label: 'tools',
    skills: [
      { name: 'git / github', dots: 4 },
      { name: 'react query', dots: 3 },
      { name: 'formik / yup', dots: 4 },
      { name: 'stripe', dots: 3 },
      { name: 'mendix', dots: 4 },
      { name: 'vercel', dots: 4 }
    ]
  },
  {
    id: 'ai',
    label: 'ai',
    skills: [
      { name: 'prompt engineering', dots: 4 },
      { name: 'workflow automation', dots: 4 },
      { name: 'data analysis', dots: 3 },
      { name: 'google analytics', dots: 3 }
    ]
  },
  {
    id: 'languages',
    label: 'languages',
    skills: [
      { name: 'arabic', dots: 5, note: 'native' },
      { name: 'english', dots: 4, note: 'conversational' }
    ]
  }
];

const LEVEL_LABELS = { 5: 'expert', 4: 'advanced', 3: 'proficient' };

const DotMeter = ({ dots }) => (
  <span className="inline-flex items-center gap-1.5" aria-label={`${dots} out of 5`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${i <= dots ? 'bg-indigo-400' : 'bg-slate-700'}`}
      />
    ))}
  </span>
);

const Skills = () => {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-indigo-600 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Technical Proficiency
            </span>

            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight"
            >
              Skills & <span className="text-indigo-600">Expertise</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[3px] bg-indigo-600 mx-auto rounded-full mb-6"
            />

            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              My stack, straight from the terminal — pick a command to explore
            </p>
          </motion.div>

          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-slate-900/20 overflow-hidden"
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800/60 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-600" />
                <span className="w-3 h-3 rounded-full bg-slate-600" />
                <span className="w-3 h-3 rounded-full bg-indigo-500" />
              </div>
              <p className="font-mono text-[10px] md:text-xs text-slate-400 select-none truncate ml-3">
                abdelrhman@portfolio — ~/skills
              </p>
              <span className="w-[52px]" aria-hidden="true" />
            </div>

            {/* Command tabs */}
            <div className="flex flex-wrap gap-2 px-5 pt-5 pb-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat)}
                  className={`font-mono text-xs md:text-sm px-3.5 py-1.5 rounded-lg border transition-colors duration-200 ${
                    active.id === cat.id
                      ? 'bg-indigo-600/15 border-indigo-500/60 text-indigo-300'
                      : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Output */}
            <div className="px-5 md:px-7 py-5 font-mono text-sm md:text-[15px] min-h-[340px] md:min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.12 } }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-slate-500 mb-4">
                    <span className="text-indigo-400">$</span>{' '}
                    <span className="text-slate-300">skills</span> --list {active.label}
                  </p>

                  <div className="space-y-2.5">
                    {active.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.08 + i * 0.05, ease: 'easeOut' }}
                        className="flex items-center justify-between gap-3 px-3 py-2 -mx-3 rounded-lg hover:bg-slate-800/60 transition-colors duration-200"
                      >
                        <span className="text-slate-200 truncate">
                          <span className="text-indigo-400 mr-2.5" aria-hidden="true">▸</span>
                          {skill.name}
                        </span>
                        <span className="flex items-center gap-3 shrink-0">
                          <DotMeter dots={skill.dots} />
                          <span className="text-slate-500 text-xs w-24 text-right hidden sm:inline">
                            {skill.note || LEVEL_LABELS[skill.dots]}
                          </span>
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + active.skills.length * 0.05 }}
                    className="text-slate-500 mt-5"
                  >
                    {active.skills.length} packages listed <span className="text-slate-600">· no vulnerabilities found</span>
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Prompt with blinking cursor */}
              <p className="mt-5 text-slate-400">
                <span className="text-indigo-400">$</span>{' '}
                <span className="terminal-cursor inline-block w-[9px] h-[18px] bg-indigo-400 align-middle" />
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
