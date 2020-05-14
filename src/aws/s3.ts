const s3Client = () => {
  // eslint-disable-next-line
  const AWS = require('aws-sdk');
  const IS_DEV = process.env.NODE_ENV === 'development';
  const options: any = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  };
  if (IS_DEV) {
    options.endpoint = process.env.LOCAL_DYNAMO_DB_ENDPOINT;
  }
  const client = new AWS.S3(options);
  return client;
};

export const S3Client = s3Client();
