let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/puissance4/' : '/',
  outputDir: 'docs',
  pluginOptions: {
    quasar: {
      importStrategy: 'manual',
      rtlSupport: false,
    },
  },
  transpileDependencies: [
    'quasar',
  ],
  devServer: {
    allowedHosts: ['.charloup.test'],
    host: '0.0.0.0',
    port: 8001,
  },
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin('/app/logo.png')
    ]
  },
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Puissance 4 en ligne'
      return args
    })
  }
};
