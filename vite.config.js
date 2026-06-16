import { defineConfig } from 'vite'
import htmlInject from 'vite-plugin-html-inject'

export default defineConfig({
  root: 'src',
  base: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES 
    ? '/piano-teacher/' 
    : '/',
  build: {
    outDir: '../dist'
  },
  plugins: [htmlInject()]
})
