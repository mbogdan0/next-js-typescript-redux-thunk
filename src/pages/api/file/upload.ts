import { S3Client } from '../../../aws/s3';

export default async (req, res) => {
  try {
    const body = req.body;
    const pass = body.password;

    await S3Client.putObject({
      Bucket: 'dtqef5-sdi2vvn',
      Key: 'public/ax.txt',
      Body: Buffer.alloc(8),
    }).promise();

    res.send('ok');

  } catch (e) {
    console.log(e);
    res.status(500).send({
      payload: null,
      success: false,
      error: e.toString(),
    });
  }
};
