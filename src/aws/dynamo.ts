
type DBPut = {
  TableName: string;
  Item: object;
};

type DBQuery = {
  TableName: string;
  Limit?: number;
  Select?: 'ALL_ATTRIBUTES' | 'ALL_PROJECTED_ATTRIBUTES' | 'SPECIFIC_ATTRIBUTES' | 'COUNT';
  AttributesToGet?: string[];
}

type DBScan = {
  TableName: string;
  Limit?: number;
  Select?: 'ALL_ATTRIBUTES' | 'ALL_PROJECTED_ATTRIBUTES' | 'SPECIFIC_ATTRIBUTES' | 'COUNT';
  AttributesToGet?: string[];
};

const dynamoDBClient = () => {
  // eslint-disable-next-line
  const AWS = require('aws-sdk');
  const IS_DEV = process.env.NODE_ENV === 'development';
  const options: any = {
    convertEmptyValues: true,
    region: process.env.DYNAMODB_REGION,
  };
  if (IS_DEV) {
    options.endpoint = process.env.LOCAL_DYNAMO_DB_ENDPOINT;
  }
  const client = new AWS.DynamoDB.DocumentClient(options);
  return {
    put: async ({ TableName, Item }: DBPut) => {
      return await client.put({
        TableName,
        Item,
      }).promise();
    },
    query: async ({ TableName, Limit, Select, AttributesToGet }: DBQuery) => {
      const obj: DBQuery = {
        TableName,
        Limit,
      };
      if (Select) {
        obj.Select = Select;
      }
      if (AttributesToGet) {
        obj.AttributesToGet = AttributesToGet;
      }
      return await client.query(obj).promise();
    },
    scan: async ({ TableName, Limit, Select, AttributesToGet }: DBScan) => {
      const obj: DBQuery = {
        TableName,
        Limit,
      };
      if (Select) {
        obj.Select = Select;
      }
      if (AttributesToGet) {
        obj.AttributesToGet = AttributesToGet;
      }
      return await client.scan(obj).promise();
    },
  };
};

export const DynamoDBClient = dynamoDBClient();
