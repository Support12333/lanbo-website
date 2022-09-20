const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const webpack = require('webpack')
const resolve = (dir) => path.join(__dirname, dir);

module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
  },
  configureWebpack: config => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    )
  },
  css: {
    loaderOptions: {
     scss: {
      additionalData: `@import "@/mixin.scss";`,
     },
    },
   },
})
