import { DynamoDBClient } from '../../../aws/dynamo';

export default async (req, res) => {
  try {
    if (0) req.toString(); // TODO
    const TableName = 'BlogEntries';
    const rows = await DynamoDBClient.scan({
      TableName,
      Limit: 10,
    });
    res.status(200).send({
      payload: rows?.Items,
      success: true,
      error: null,
    });
  } catch (e) {
    res.status(500).send({
      payload: null,
      success: false,
      error: e.toString(),
    });
  }
};
