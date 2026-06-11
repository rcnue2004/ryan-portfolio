# Ryan Neumann — Portfolio

Personal portfolio site. React + TypeScript + Tailwind CSS + framer-motion, built with Vite.

## Run locally

```bash
npm install
npm run dev
```

## Edit content (no code changes needed)

- **Add/edit projects:** [`src/data/projects.ts`](src/data/projects.ts) — copy an existing object, fill in the fields. Comments at the top explain every field.
- **Bio, stats, skills, experience, education, links:** [`src/data/profile.ts`](src/data/profile.ts)
- **Resume:** drop your PDF at `public/resume.pdf` (the "Download Resume" button already points there).
- **Project screenshots:** put images in `public/screenshots/` and set `imageUrl: '/screenshots/name.png'` on the project.

## Deploy

**Vercel (recommended):** import the repo at vercel.com — zero config, it auto-detects Vite.

**GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.ts`, then `npm run build` and publish the `dist/` folder (or use a gh-pages action).
