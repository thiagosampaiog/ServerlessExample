import AWS from 'aws-sdk'
import commonMiddleware from '../lib/commonMiddleware.js';
import createError from 'http-errors'
import { getAuctionById } from './getAuction.js';
import validatorMiddleware from '@middy/validator';
import placeBidSchema from '../lib/schemas/placeBidSchema.js';


const dynamodb = new AWS.DynamoDB.DocumentClient();


async function placeBid(event, context) {
    const { id } = event.pathParameters;
    const { amount } = event.body;

    const auction = await getAuctionById(id);

    if(auction.status !== 'OPEN'){
        throw new createError.Forbidden(`You cannot bid on closed auctions!`)
    }

    if (amount <= auction.highestBid.amount) {
        throw new createError.Forbidden(`Bid must be higher than ${auction.highestBid.amount}`)
    }

    const params = {
        TableName: process.env.AUCTIONS_TABLE_NAME,
        Key: { id },
        UpdateExpression: 'set highestBid.amount = :amount',
        ExpressionAttributeValues: {
            ':amount': amount,
        },
        ReturnValues: 'ALL_NEW',
    };

    let updatedAuction;

    try {
        const result = await dynamodb.update(params).promise();

        updatedAuction = result.Attributes;
    } catch (error) {
        console.error(error);
        throw new createError.InternalServerError(error)
    }


    return {
        statusCode: 200,
        body: JSON.stringify(updatedAuction),
    };

}

export const handler = commonMiddleware(placeBid)
.use(validatorMiddleware({ 
    eventSchema: placeBidSchema 
}));