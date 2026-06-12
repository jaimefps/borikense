import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site under /borikense/, local dev stays at /
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/borikense/' : '/',
}));
