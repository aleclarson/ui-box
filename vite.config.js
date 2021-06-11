// @ts-check
import { defineConfig } from 'vite'
import dts from 'vite-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: id => !/^[./]/.test(id),
      output: {
        sourcemapExcludeSources: true,
      },
    },
    target: 'esnext',
    sourcemap: true,
    minify: false,
  },
})
