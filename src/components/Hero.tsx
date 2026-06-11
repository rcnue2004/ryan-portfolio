import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

/** Deterministic pseudo-random particles so layout is stable across renders. */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  size: 2 + ((i * 7) % 4),
  duration: 14 + ((i * 11) % 12),
  delay: -((i * 5) % 14),
}));

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-blob absolute -left-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="hero-blob-2 absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-sky-600/10 blur-3xl" />
        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle bottom-0"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-dim dark:text-accent">
            {profile.title}
          </p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mb-10 max-w-xl text-xl text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-lg bg-accent-dim px-6 py-3 font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-accent/40"
            >
              View My Projects
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </button>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-dim dark:border-base-700 dark:text-slate-300 dark:hover:border-accent dark:hover:text-accent"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Social links pinned to the corner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-6 flex flex-col gap-4 sm:right-10"
      >
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate-500 transition-colors hover:text-accent dark:text-slate-400"
        >
          <Linkedin size={22} />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-500 transition-colors hover:text-accent dark:text-slate-400"
        >
          <Github size={22} />
        </a>
      </motion.div>
    </section>
  );
}
