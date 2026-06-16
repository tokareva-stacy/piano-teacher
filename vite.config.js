import { defineConfig } from 'vite'
import htmlInject from 'vite-plugin-html-inject'

export default defineConfig({
  root: 'src',
  base: process.env.NODE_ENV === 'production' ? '/piano-teacher/' : '/',
  build: {
    outDir: '../dist'
  },
  plugins: [
    htmlInject()
  ]
})
