/**
 * ============================================================
 *  PROFILE DATA — ALL PERSONAL INFO LIVES HERE
 * ============================================================
 * Edit anything below and the whole site updates. No other
 * files need to change for bio, stats, skills, experience,
 * education, or contact info.
 */

export const profile = {
  name: 'Ryan Neumann',
  title: 'MS Finance Candidate | UT Dallas | Data & Finance Analyst',
  tagline: 'Turning financial data into decisions.',
  email: 'rcnue2004@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ryanneumannutdfin/',
  github: 'https://github.com/rcnue2004',
  /** Drop your resume PDF into /public/resume.pdf and this link just works. */
  resumeUrl: '/resume.pdf',

  bio: `I'm a Finance MS student at UT Dallas (BS May 2026, MS expected May 2027) with a 3.9+ GPA and a passion for financial analytics and data-driven decision making. I interned at Carpion Private Wealth, where I got hands-on experience in private wealth management. I grew up in Saudi Arabia, and outside the classroom I captain the UTD Men's Ultimate Frisbee team — where I also built a fantasy stock market for the league.`,

  /** Animated counters in the About section. `suffix` is appended after the number. */
  stats: [
    { label: 'GPA', value: 3.9, suffix: '+', decimals: 1 },
    { label: 'Projects', value: 4, suffix: '+', decimals: 0 },
    { label: 'Years of Study', value: 4, suffix: '', decimals: 0 },
    { label: 'Internships', value: 1, suffix: '', decimals: 0 },
  ],

  /** Skill tags grouped by category. Add/remove freely. */
  skills: [
    {
      group: 'Finance',
      items: ['Excel', 'PowerBI', 'Tableau', 'SAP', 'Bloomberg Terminal'],
    },
    {
      group: 'Programming',
      items: ['SQL', 'Python', 'TypeScript', 'React'],
    },
    {
      group: 'Other',
      items: ['Firebase', 'Git', 'Financial Modeling', 'DCF Analysis'],
    },
  ],

  /** Experience timeline, newest first. */
  experience: [
    {
      org: 'Carpion Private Wealth',
      role: 'Private Wealth Management Intern',
      period: 'June 2025 – August 2025',
      description:
        'Supported advisors on portfolio analysis, client reporting, and wealth management operations.',
    },
    {
      org: "UTD Men's Ultimate Frisbee",
      role: 'Captain',
      period: 'August 2024 – Present',
      description:
        'Lead practices, strategy, and logistics for the team; built the Frisbee Stock Exchange for the league.',
    },
  ],

  /** Education cards. */
  education: [
    {
      degree: 'BS Finance',
      school: 'The University of Texas at Dallas',
      date: 'May 2026',
      detail: 'GPA 3.9+',
    },
    {
      degree: 'MS Finance',
      school: 'The University of Texas at Dallas',
      date: 'Expected May 2027',
      detail: '',
    },
  ],

  /** Relevant coursework shown under the education cards. */
  coursework: [
    'Financial Modeling',
    'Investment Management',
    'Quantitative Business Analysis',
    'Business Economics',
    'Derivatives Markets',
  ],
};
