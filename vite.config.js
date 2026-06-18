import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // For Netlify root deployment
  base: '/',

  build: {
    target: 'es2020',
    minify: 'esbuild',
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-emailjs': ['@emailjs/browser'],
          'vendor-toast': ['react-toastify'],
        },

        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop() ?? '';

          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }

          if (/css/i.test(ext)) {
            return 'assets/css/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});