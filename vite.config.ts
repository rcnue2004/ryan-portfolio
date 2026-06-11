import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel works with zero config. For GitHub Pages under a repo subpath,
// set base to '/<repo-name>/' (e.g. base: '/portfolio/').
export default defineConfig({
  plugins: [react()],
});
