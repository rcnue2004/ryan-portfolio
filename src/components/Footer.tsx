import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-base-800 dark:text-slate-500">
      © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind.
    </footer>
  );
}
