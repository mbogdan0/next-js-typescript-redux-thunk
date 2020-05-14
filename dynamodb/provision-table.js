const AWS = require('aws-sdk');
require('dotenv').config();


async function provisionTable() {
  const params = {
    TableName: 'BlogEntries',
    KeySchema: [
      {
        AttributeName: 'slugId',
        KeyType: 'HASH'
      }
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'slugId',
        AttributeType: 'S'
      }
    ],
    BillingMode: 'PAY_PER_REQUEST',
    StreamSpecification: {
      StreamEnabled: false
    },
  };

  const isProduction = !!process.env.IS_PROD;
  const opts = {
    region: process.env.DYNAMODB_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  };
  if (!isProduction) {
    opts.endpoint = process.env.LOCAL_DYNAMO_DB_ENDPOINT;
  }
  AWS.config.update(opts);
  const DynamoDB = new AWS.DynamoDB();


  // await DynamoDB.deleteTable({
  //   TableName: 'BlogEntries',
  // }).promise();


  await DynamoDB.createTable(params).promise();
  console.log('Table was created');
};

provisionTable()
  .catch(console.error);