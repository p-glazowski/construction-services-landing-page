/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `vite build --mode pages` serves the site from /construction-services-landing-page/ (GitHub Pages project URL).
export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? '/construction-services-landing-page/' : '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    globals: true,
  },
}));
