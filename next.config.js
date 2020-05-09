const webpack = require('webpack');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return { // dev
      env: {
        TABLE_NAME: 'Example1',
        VAR: 'dev' // {process.env.VAR} example of usage
      },
      webpack(config, options) {
        config.plugins.push(
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
          }),
        );
        return config;
      }
    }
  }

  if (!process.env.BUNDLE_AWS_SDK) {
    config.externals = config.externals || [];
    config.externals.push({ "aws-sdk": "aws-sdk" });
  } else {
    console.warn("Bundling aws-sdk. Only doing this in development mode");
  }

  return { // prod
    target: 'serverless',
    env: {
      TABLE_NAME: 'Example1',
      VAR: 'prod'
    },
    webpack(config, options) {
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
      );
      return config;
    }
  }
}