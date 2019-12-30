module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/server': {
        target: 'https://m.228.cn',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
