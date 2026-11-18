import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: { dedupe: ['react', 'react-dom'] },
  build: {
    rollupOptions: {
      // Due pagine: la libreria consultabile e il brandbook da stampare in PDF.
      input: {
        main: resolve(__dirname, 'index.html'),
        brandbook: resolve(__dirname, 'brandbook.html'),
      },
    },
  },
});
