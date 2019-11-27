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
