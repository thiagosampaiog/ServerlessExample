import AWS from 'aws-sdk'
import validatorMiddleware from '@middy/validator';
import commonMiddleware from '../lib/commonMiddleware.js';
import createError from 'http-errors'
import getAuctionsSchema from '../lib/schemas/getAuctionsSchema.js';

const dynamodb = new AWS.DynamoDB.DocumentClient();


async function getAuctions(event, context) {
    const { status } = event.queryStringParams;
    let auctions;

    const params = {
        TableName: process.env.AUCTIONS_TABLE_NAME,
        Key: { status },
        KeyConditionExpression: '#status = :status',
        ExpressionAttributeValues: {
            ':status': status,
        },
        ExpressionAttributeNames: {
            '#status': 'status',
        },
    };

    try {
        const result = await dynamodb.query(params).promise();

        auctions = result.Items;
    } catch (error) {
        console.error(error)
        throw new createError.InternalServerError(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(auctions),
    };
}

export const handler = commonMiddleware(getAuctions).use(
  validatorMiddleware({
    eventSchema: getAuctionsSchema,
    ajvOptions: {
      useDefaults: true,
      strict: false,
    },
  })
);