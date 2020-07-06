const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  env: {
    VUTTR_API_URL: process.env.VUTTR_API_URL,
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]',
  },
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    })
    return config
  },
})
