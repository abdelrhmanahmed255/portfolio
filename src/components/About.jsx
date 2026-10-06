import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight } from 'react-icons/hi';

const AnimatedCounter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Masked word-by-word reveal for the opening line
const WordsReveal = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-1">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}{i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const chapters = [
  {
    num: '01',
    tag: 'Where it began',
    title: 'The Spark',
    text: "At Zagazig University, I opened the browser dev tools for the first time — and couldn't stop digging. What started as curiosity about how pages are built turned into late nights rebuilding interfaces from scratch, just to understand every moving piece.",
    chips: ['HTML', 'CSS', 'JavaScript']
  },
  {
    num: '02',
    tag: 'Learning the craft',
    title: 'Mastering the Frontend',
    text: "I went deep into React — component thinking, state, pixel-accurate layouts. Between Route Academy's diplomas and real client work for Murashah in Saudi Arabia, I learned that good UI isn't decoration. It's how people actually experience software.",
    chips: ['React', 'Next.js', 'Tailwind CSS']
  },
  {
    num: '03',
    tag: 'Owning the whole flow',
    title: 'Going Full Stack',
    text: "The frontend alone wasn't enough — I wanted to own the request from click to database. So I moved into Node.js: REST and GraphQL APIs, authentication, payments, data modeling. Now a feature isn't done until it works end to end.",
    chips: ['Node.js', 'Express', 'MongoDB']
  },
  {
    num: '04',
    tag: 'The current chapter',
    title: 'Building Real Products',
    text: "Today I build full-stack products at Taqdum Software Technology — like Pupilera, a school management SaaS — and ship platforms used in Egypt and Saudi Arabia. Clean code, real performance, interfaces people enjoy. That's the standard I hold.",
    chips: ['Next.js', 'TypeScript', 'NestJS']
  }
];

const stats = [
  { number: 2, suffix: '+', label: 'Years Experience' },
  { number: 10, suffix: '+', label: 'Projects Shipped' },
  { number: 15, suffix: '+', label: 'Technologies Used' }
];

/*
 * One "scene" of the story film. All scenes are stacked absolutely inside the
 * sticky screen; scroll progress cross-fades them with a slow cinematic zoom.
 */
const Scene = ({ chapter, index, total, progress }) => {
  const start = index / total;
  const end = (index + 1) / total;
  const fade = 0.045;

  const opacity = useTransform(
    progress,
    index === 0
      ? [start, start + 0.001, end - fade, end]
      : index === total - 1
      ? [start, start + fade, end - 0.001, end]
      : [start, start + fade, end - fade, end],
    index === 0 ? [1, 1, 1, 0] : index === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
  // Ken Burns style slow zoom + drift while the scene plays
  const scale = useTransform(progress, [start, end], [1, 1.05]);
  const y = useTransform(progress, [start, end], [12, -12]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center px-6 md:px-16"
    >
      <motion.div style={{ scale, y }} className="max-w-xl text-center">
        <span
          aria-hidden="true"
          className="block text-[72px] md:text-[110px] font-black leading-none text-white/[0.06] select-none -mb-8 md:-mb-14"
        >
          {chapter.num}
        </span>
        <p className="text-indigo-400 text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] mb-3">
          {chapter.tag}
        </p>
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-5 tracking-tight">
          {chapter.title}
        </h3>
        <p className="text-slate-300 text-sm md:text-lg leading-relaxed mb-5 md:mb-6">
          {chapter.text}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {chapter.chips.map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 text-[11px] md:text-xs font-mono font-medium rounded-md bg-white/[0.06] border border-white/10 text-slate-300"
            >
              {chip}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const filmRef = useRef(null);
  const [activeScene, setActiveScene] = useState(0);
  const total = chapters.length;

  // Film plays while the tall container scrolls under the sticky screen
  const { scrollYProgress } = useScroll({
    target: filmRef,
    offset: ['start start', 'end end']
  });
  const playhead = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
    setActiveScene(idx);
  });

  return (
    <section id="about" className="bg-slate-50 relative">
      {/* Section Header + opening line */}
      <div className="container mx-auto px-6 pt-20 md:pt-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-indigo-600 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              My Story
            </span>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 px-4 tracking-tight"
            >
              From Curiosity to <span className="text-indigo-600">Craft</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[3px] bg-indigo-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="text-center mb-10 md:mb-14">
            <WordsReveal
              text="Every developer has a story. Mine started with one question:"
              className="block text-slate-500 text-lg md:text-xl mb-3"
            />
            <WordsReveal
              text="How does the web actually work?"
              className="block text-2xl md:text-4xl font-bold text-slate-900 tracking-tight"
              delay={0.5}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400"
            >
              Scroll to play ▾
            </motion.p>
          </div>
        </div>
      </div>

      {/* ===== THE FILM =====
          Tall scroll track; the screen stays pinned while scenes play. */}
      <div ref={filmRef} className="relative" style={{ height: `${total * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8">
          <div className="relative w-full max-w-4xl h-[78vh] md:h-[80vh] max-h-[640px] rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl shadow-slate-900/30 overflow-hidden">

            {/* Ambient scene glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-indigo-600/15 blur-[90px] pointer-events-none" />

            {/* Player top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 md:px-7 py-4 z-20">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400">
                  Now playing — My Story
                </span>
              </div>
              <span className="font-mono text-[10px] md:text-xs text-slate-500 tabular-nums">
                CH {chapters[activeScene].num} / 0{total}
              </span>
            </div>

            {/* Scenes */}
            {chapters.map((chapter, index) => (
              <Scene
                key={chapter.num}
                chapter={chapter}
                index={index}
                total={total}
                progress={scrollYProgress}
              />
            ))}

            {/* Player bottom bar — scrubber with chapter markers */}
            <div className="absolute bottom-0 left-0 right-0 px-5 md:px-7 pb-5 z-20">
              <div className="relative h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  style={{ scaleX: playhead }}
                  className="absolute inset-0 bg-indigo-500 origin-left rounded-full"
                />
              </div>
              {/* Chapter tick markers */}
              <div className="relative mt-2 flex justify-between">
                {chapters.map((chapter, index) => (
                  <span
                    key={chapter.num}
                    className={`font-mono text-[9px] md:text-[10px] tracking-wider transition-colors duration-300 ${
                      index === activeScene ? 'text-indigo-400' : 'text-slate-600'
                    }`}
                  >
                    {chapter.num}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story ending — the numbers so far */}
      <div className="container mx-auto px-6 pb-20 md:pb-28 pt-12 md:pt-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-slate-900 rounded-3xl px-8 py-10 md:px-14 md:py-12 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.25em] mb-6 text-center">
                  The story so far
                </p>

                <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-3xl md:text-5xl font-extrabold text-white mb-1">
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </p>
                      <p className="text-slate-400 text-xs md:text-sm font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-slate-300 text-lg md:text-xl font-medium mb-6">
                    The next chapter? It could be <span className="text-indigo-400">your project</span>.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors duration-300"
                  >
                    Let's write it together
                    <HiArrowRight />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
