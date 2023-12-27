
const { defineConfig } = require('@vue/cli-service')
const registerRouter = require('./backend/router.js')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/mixin.scss";
        @import "@/assets/scss/variable.scss";
       `
      }
    }
  },
  devServer: {
    onBeforeSetupMiddleware (devServer) {
      registerRouter(devServer.app)
    }
  }
})
