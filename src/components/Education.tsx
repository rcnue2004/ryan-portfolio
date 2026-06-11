import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { profile } from '../data/profile';

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">Education</p>
        <h2 className="section-title">UT Dallas, twice over</h2>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {profile.education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 dark:border-base-800 dark:bg-base-900"
          >
            <GraduationCap className="mb-4 text-accent" size={28} />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{edu.school}</p>
            <p className="mt-3 text-sm font-medium text-accent-dim dark:text-accent">{edu.date}</p>
            {edu.detail && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{edu.detail}</p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10"
      >
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Relevant Coursework
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.coursework.map((course) => (
            <span key={course} className="skill-tag cursor-default">
              {course}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
