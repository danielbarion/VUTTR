const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

module.exports = withOffline(
  withCSS({
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
    workboxOpts: {
      runtimeCaching: [
        {
          urlPattern: /.png$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 60 * 60 * 24 * 1, // 1 day
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /.css$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 60 * 60 * 24 * 1, // 1 day
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 60 * 60 * 24 * 1, // 1 day
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  }),
)
