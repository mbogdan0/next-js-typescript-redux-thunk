const webpack = require('webpack');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
require('dotenv').config();

module.exports = (phase, { defaultConfig }) => {

  const env = {
    DYNAMODB_REGION: process.env.DYNAMODB_REGION,
    LOCAL_DYNAMO_DB_ENDPOINT: process.env.LOCAL_DYNAMO_DB_ENDPOINT,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    PASSWORD_TO_ADD_ENTRIES: process.env.PASSWORD_TO_ADD_ENTRIES,
    API_ENDPOINT: 'https://d3bzrckpr9a7au.cloudfront.net' // replace to domain
  };
  const env_developments = {
    ...env,
    AWS_ACCESS_KEY_ID: '1',
    AWS_SECRET_ACCESS_KEY: '1',
    API_ENDPOINT: 'http://localhost:3000',
  };
  const IS_DEV = phase === PHASE_DEVELOPMENT_SERVER;

  return { // dev
    env: IS_DEV ? env_developments : env,
    target: IS_DEV ? 'server' : 'serverless',
    webpack(config, options) {
      if (!IS_DEV) { // prod only
        config.externals = config.externals || [];
        config.externals.push({ "aws-sdk": "aws-sdk" });
        config.plugins.push(
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
          }),
        );
      }
      return config;
    }
  };
};
