import { defineConfig } from 'bunup';

export default defineConfig({
  entry: 'index.ts',
  format: 'esm',
  outDir: 'dist',
  dts: true,
  packages: 'external',
  external: ['react', 'react-dom', '@react-email/components'],
  splitting: false,
});
