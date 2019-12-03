require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withBundleAnalyzer(
  withSourceMaps(
    withCSS(
      withSass({
        webpack(config, options) {
          config.plugins = config.plugins || [];

          config.plugins = [
            ...config.plugins,

            new Dotenv({
              path: path.join(__dirname, '.env'),
              systemvars: true
            })
          ];
          return config;
        },
        sassLoaderOptions: {
          sourceMap: true
        },
        postcssLoaderOptions: {
          sourceMap: true
        }
      })
    )
  )
);
