import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CATEGORIES, projects, Project } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

type Filter = 'All' | (typeof CATEGORIES)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  // Featured projects first, then filter by category
  const visible = useMemo(() => {
    const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
    return filter === 'All' ? sorted : sorted.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Things I've built and analyzed</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          Finance models, data analytics, and full-stack apps — click any card for details.
        </p>
      </motion.div>

      {/* Category filter buttons */}
      <div className="mt-10 flex flex-wrap gap-2">
        {(['All', ...CATEGORIES] as Filter[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === cat
                ? 'bg-accent-dim text-white shadow-md shadow-accent/25'
                : 'border border-slate-300 text-slate-600 hover:border-accent hover:text-accent-dim dark:border-base-700 dark:text-slate-400 dark:hover:border-accent dark:hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated filterable grid */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={project} onSelect={() => setSelected(project)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
