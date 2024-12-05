import { defineConfig } from 'tsup';

export default defineConfig([
  {
    name: 'CyberTipline',
    outDir: 'dist',
    format: ['esm', 'cjs'], // Generate both ESM and CommonJS
    dts: true, // Generate TypeScript declarations
    splitting: false, // No code splitting
    treeshake: false, // No tree-shaking
    sourcemap: true, // Generate source maps
    clean: true, // Clean `dist` before each build
    entry: ['src/index.ts'],
  },
]);
