import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

const STATUS_STYLES: Record<Project['status'], string> = {
  Live: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  Completed: 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30',
  'In Progress': 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
};

export default function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: () => void;
}) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 dark:border-base-800 dark:bg-base-900">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <span className="mb-3 w-fit rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent-dim dark:text-accent">
        {project.category}
      </span>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-base-800 dark:text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onSelect}
          className="flex-1 rounded-lg bg-accent-dim py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
        >
          View Details
        </button>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-base-700 dark:text-slate-300"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        ) : project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-base-700 dark:text-slate-300"
          >
            <Github size={15} /> GitHub
          </a>
        ) : null}
      </div>
    </div>
  );
}
