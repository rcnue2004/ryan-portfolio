/**
 * ============================================================
 *  PROJECTS DATA — THE ONLY FILE YOU EDIT TO ADD A PROJECT
 * ============================================================
 *
 * To add a new project:
 *   1. Copy an existing object in the `projects` array below.
 *   2. Give it a unique `id` (any short string, e.g. "my-new-project").
 *   3. Fill in every field (use "" or [] for things you don't have yet).
 *   4. Save. That's it — the site picks it up automatically.
 *
 * Field guide:
 *   id              unique string, used internally (no spaces)
 *   title           project name shown on the card
 *   category        MUST be one of: "Finance" | "Data & Analytics" | "Web Apps" | "Research"
 *                   (this drives the filter buttons — new categories appear automatically)
 *   status          MUST be one of: "Live" | "Completed" | "In Progress"
 *   description     one-liner shown on the card (keep under ~25 words)
 *   longDescription full paragraph(s) shown in the detail modal
 *   techStack       array of tool/tech names, shown as tags
 *   keyMetrics      array of bullet-point results/metrics for the modal
 *   courseContext   course name or "Personal Project" (shown in modal; "" to hide)
 *   githubUrl       full URL, or "" to hide the GitHub button
 *   liveUrl         full URL, or "" to hide the Live Demo button
 *   imageUrl        path to a screenshot (put images in /public, e.g. "/screenshots/fse.png"),
 *                   or "" for a placeholder
 *   featured        true = sorted to the front of the grid
 */

export type ProjectCategory = 'Finance' | 'Data & Analytics' | 'Web Apps' | 'Research';
export type ProjectStatus = 'Live' | 'Completed' | 'In Progress';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  longDescription: string;
  techStack: string[];
  keyMetrics: string[];
  courseContext: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured: boolean;
}

/** Filter buttons shown above the grid ("All" is added automatically). */
export const CATEGORIES: ProjectCategory[] = [
  'Finance',
  'Data & Analytics',
  'Web Apps',
  'Research',
];

export const projects: Project[] = [
  {
    id: 'fse',
    title: 'Frisbee Stock Exchange (FSE)',
    category: 'Web Apps',
    status: 'Live',
    description:
      'Full-stack fantasy stock market web app for the UTD Ultimate Frisbee league, with players priced like stocks.',
    longDescription:
      'A full-stack fantasy stock market web application built for the UT Dallas Ultimate Frisbee league. Players are priced like stocks with dynamic valuations that update after each tournament based on statistical performance. Includes a real-time pricing engine, portfolio management for every user, CSV-based stat imports, and a full admin panel for running the league.',
    techStack: ['React', 'TypeScript', 'Next.js', 'Firebase'],
    keyMetrics: [
      '25 active users',
      'Real-time pricing engine driven by tournament stats',
      'Full CSV stat import system',
      'Admin panel with undo functionality',
    ],
    courseContext: 'Personal Project',
    githubUrl: 'https://github.com/rcnue2004/FSE',
    liveUrl: '', // TODO: add live demo URL
    imageUrl: '',
    featured: true,
  },
  {
    id: 'airline-rm',
    title: 'Airline Revenue Management Simulation',
    category: 'Data & Analytics',
    status: 'Completed',
    description:
      'SQL-based simulation of dynamic seat pricing and inventory optimization for a Dallas–Chicago route.',
    longDescription:
      'A SQL-based revenue management simulation modeling dynamic seat pricing and inventory optimization for a Dallas–Chicago route over a 90-day booking window. The analysis covers fare class yield, demand elasticity, and overbooking optimization, and compares dynamic pricing against a flat-rate baseline to quantify revenue uplift.',
    techStack: ['SQL (SQLite)', 'Python', 'pandas', 'matplotlib'],
    keyMetrics: [
      // TODO: replace with real numbers once the simulation runs
      'Results coming soon',
    ],
    courseContext: 'OPRE 3360 — Management Methods in Decision Making, UT Dallas',
    githubUrl: '', // TODO: add GitHub URL
    liveUrl: '',
    imageUrl: '',
    featured: true,
  },
  {
    id: 'lulu-valuation',
    title: 'Lululemon Equity Valuation & Financial Analysis',
    category: 'Finance',
    status: 'Completed',
    description:
      'Equity valuation of Lululemon (LULU) with DCF, comps vs. Nike/Adidas/Under Armour, and a price target.',
    longDescription:
      'A comprehensive equity valuation and competitive analysis of Lululemon Athletica (LULU), benchmarked against Nike, Adidas, and Under Armour. Built a full DCF model, comparable company analysis, and sensitivity tables to derive a price target and investment recommendation, presented to a panel of finance faculty.',
    techStack: ['Excel', 'PowerPoint', 'Financial Modeling'],
    keyMetrics: [
      'DCF + comps across 8 peer companies',
      '10-slide executive presentation',
      'Presented to a panel of 4 finance professors',
    ],
    courseContext: 'FIN 4395 — Capstone Senior Project, UT Dallas',
    githubUrl: '', // TODO: add GitHub URL
    liveUrl: '',
    imageUrl: '',
    featured: true,
  },
  {
    id: 'southwest-rm',
    title: 'Southwest Airlines RM & Pricing Analysis',
    category: 'Finance',
    status: 'In Progress',
    description:
      'Revenue management and pricing strategy analysis mirroring real-world airline RM analyst workflows.',
    longDescription:
      'A revenue management and pricing strategy analysis applying airline yield management principles, including EMSR optimization, fare class inventory control, booking curve analysis, and variance reporting. Built to mirror the day-to-day workflows of a real-world RM analyst.',
    techStack: ['SQL', 'Python', 'Excel'],
    keyMetrics: ['Coming soon'],
    courseContext: 'Personal Project',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: false,
  },
];
