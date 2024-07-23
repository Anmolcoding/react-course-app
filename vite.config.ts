// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: '/path/to/your/entry/file/index.html',
  //   },
  // },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
  },
});

