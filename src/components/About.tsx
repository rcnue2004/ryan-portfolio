import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { profile } from '../data/profile';

/** Counts from 0 to `value` when scrolled into view. */
function Counter({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setDisplay(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">About</p>
        <h2 className="section-title">A finance mind with a builder's toolkit</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.bio}
        </p>
      </motion.div>

      {/* Animated stat counters */}
      <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {profile.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-base-800 dark:bg-base-900"
          >
            <div className="text-3xl font-extrabold text-accent-dim dark:text-accent sm:text-4xl">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </div>
            <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Skills grouped by category */}
      <div className="mt-14 space-y-8">
        {profile.skills.map((group, gi) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="skill-tag cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
