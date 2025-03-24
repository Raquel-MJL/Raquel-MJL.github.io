import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({

  base: '/hechizosDND/', //Intentando configurar GHPages
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
