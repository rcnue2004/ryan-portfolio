import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { profile } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Where I've worked and led</h2>
      </motion.div>

      <div className="relative mt-12 ml-3 border-l border-slate-200 dark:border-base-700">
        {profile.experience.map((exp, i) => (
          <motion.div
            key={exp.org}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative mb-10 pl-8 last:mb-0"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[13px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-white dark:bg-base-900">
              <Briefcase size={12} className="text-accent" />
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white">{exp.role}</h3>
            <p className="text-sm font-medium text-accent-dim dark:text-accent">{exp.org}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">
              {exp.period}
            </p>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
