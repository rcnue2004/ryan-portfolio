import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, Github, GraduationCap, ImageIcon, X } from 'lucide-react';
import { Project } from '../data/projects';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Close on Escape, lock body scroll while open
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-8 dark:bg-base-900 sm:rounded-2xl"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <span className="mb-2 inline-block rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent-dim dark:text-accent">
                  {project.category} · {project.status}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-base-800 dark:hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Screenshot or placeholder */}
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="mb-6 w-full rounded-xl border border-slate-200 dark:border-base-800"
              />
            ) : (
              <div className="mb-6 flex h-44 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 dark:border-base-700 dark:bg-base-800/50">
                <div className="flex flex-col items-center gap-2 text-sm">
                  <ImageIcon size={28} />
                  Screenshot coming soon
                </div>
              </div>
            )}

            <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
              {project.longDescription}
            </p>

            {project.keyMetrics.length > 0 && (
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Results
                </h4>
                <ul className="space-y-2">
                  {project.keyMetrics.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-6 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-base-800 dark:text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.courseContext && (
              <p className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <GraduationCap size={16} className="shrink-0" />
                {project.courseContext}
              </p>
            )}

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-base-700 dark:text-slate-300"
                >
                  <Github size={16} /> View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-dim px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
