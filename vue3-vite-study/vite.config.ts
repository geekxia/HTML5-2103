import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 支持JSX语法
import vueJsx from '@vitejs/plugin-vue-jsx'

const path = require('path')

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8888,
    open: true,
    proxy: {
      '/api_test': {
        target: 'https://cnodejs.org',
        changeOrigin: true
      }
    }
  }
})
