const webpack = require('webpack');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return { // dev
      env: {
        VAR: 'dev' // {process.env.VAR} example of usage
      }
    }
  }

  return { // prod
    env: {
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