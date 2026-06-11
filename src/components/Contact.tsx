import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Github, label: 'GitHub', href: profile.github },
  ];

  return (
    <section id="contact" className="section text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let's connect</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
          Open to opportunities in finance, analytics, and anything in between. Reach out anytime.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-dim dark:border-base-700 dark:text-slate-300 dark:hover:border-accent dark:hover:text-accent"
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
