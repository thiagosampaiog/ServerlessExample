import { getEndedAuctions } from "../lib/getEndedAuctions.js";
import { closeAuction } from "./closeAuction.js";
import createError from 'http-errors'

async function processAuctions(event, context) {
  const auctionsToClose = await getEndedAuctions();
   try {
    const closePromises = auctionsToClose.map(auction => closeAuction(auction));
    await Promise.all(closePromises);
    return { closed: closePromises.length }
   } catch (error) {
    console.error(error)
    throw new createError.InternalServerError(error)
   }
}

export const handler = processAuctions;