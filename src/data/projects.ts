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
 *   imageUrls       screenshots shown as a gallery in the modal. Put images in
 *                   public/screenshots/ and list them, e.g.
 *                   ['/screenshots/fse-1.png', '/screenshots/fse-2.png'].
 *                   Use [] for the "coming soon" placeholder.
 *   attachments     viewable/downloadable files shown as buttons in the modal.
 *                   Put files in public/files/ and list them, e.g.
 *                   [{ label: 'DCF Model (Excel)', url: '/files/lulu-dcf.xlsx' }].
 *                   PDFs open in the browser; other files download. Use [] for none.
 *   featured        true = sorted to the front of the grid
 */

export type ProjectCategory = 'Finance' | 'Data & Analytics' | 'Web Apps' | 'Research';
export type ProjectStatus = 'Live' | 'Completed' | 'In Progress';

export interface ProjectAttachment {
  /** Button text, e.g. "Final Deck (PDF)" */
  label: string;
  /** File URL — put the file in /public/files and use "/files/name.ext" */
  url: string;
}

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
  imageUrls: string[];
  attachments: ProjectAttachment[];
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
    imageUrls: ['/screenshots/fse_main_page.png'],
    attachments: [],
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
      '$2.06M simulated revenue across 90 flights at an 80.7% load factor',
      'Late bookers paid ~$226/seat vs ~$141 for early bookers — classic hockey-stick booking curve',
      'A/B test: closing discount fares 24 days out earned +$1,057/flight despite 2.5 pts lower load factor',
      'Overbooking model: 2 seats/flight pad caps denied-boarding exposure at 2.2% (5.2% avg no-show rate)',
      '10 named, commented SQL queries — all analysis in SQL, Python only for data generation and charts',
    ],
    courseContext: 'OPRE 3360 — Management Methods in Decision Making, UT Dallas',
    githubUrl: 'https://github.com/rcnue2004/airline-revenue-management',
    liveUrl: '',
    imageUrls: [
      '/screenshots/1_booking_curve.png',
      '/screenshots/2_revenue_by_fare_class.png',
      '/screenshots/3_dynamic_vs_flat_pricing.png',
      '/screenshots/4_no_show_distribution.png',
    ],
    attachments: [],
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
    imageUrls: [],
    attachments: [
      { label: 'Presentation (PowerPoint)', url: '/files/Lululemon_Presentation.pptx' },
      { label: 'Valuation Model (Excel)', url: '/files/Lululemon_Valuation_Model.xlsx' },
    ],
    featured: true,
  },
  ];
