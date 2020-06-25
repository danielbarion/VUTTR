const withCSS = require('@zeit/next-css')
const dotEnv = require('dotenv-flow')

dotEnv.config()

module.exports = withCSS({
  cssModules: true,
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
