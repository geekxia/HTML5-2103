const path = require('path')

module.exports = {
  appMain: 'main',
  port: 9090,
  open: true,
  host: 'localhost',
  alias: {
    '@': path.resolve(__dirname, 'src')
  },
  extensions: ['.ts', '.tsx', '.jsx', '.js'],
  proxy: {
    '/api/v1': {
      target: 'https://cnodejs.org',
      changeOrigin: true
    },
    '/api/v2': {
      target: 'http://localhost:8888',
      changeOrigin: true
    }
  },
  rules: [],
  plugins: []
}
