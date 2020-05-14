import { DynamoDBClient } from '../../../aws/dynamo';

export default async (req, res) => {
  try {
    const body = req.body;
    const pass = body.password;
    if (!pass || pass !== process.env.PASSWORD_TO_ADD_ENTRIES) {
      return res.status(403).send({
        payload: null,
        success: false,
        error: 'Access denied',
      });
    }

    const TableName = 'BlogEntries';
    const Item = {
      ...body,
    };
    await DynamoDBClient.put({
      TableName,
      Item,
    });
    res.status(200).send({
      payload: null,
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
