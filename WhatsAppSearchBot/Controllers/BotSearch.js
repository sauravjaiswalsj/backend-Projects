const googleapis = require('googleapis');
const twilio = require('twilio');

require('dotenv').config();

const cx = process.env.CX;
const accountSid = process.env.ACCOUNT_SID;
const TwilloAuthToken = process.env.AUTH_TOKEN;
const googleApiKey = process.env.SEARCH_API_KEY;

console.log(process.env.ACCOUNT_SID);
  
twilio(accountSid, TwilloAuthToken);
const MessagingResponse = twilio.twiml;
const customsearch = googleapis.customsearch_v1();

/**
* @class BotSearch
* @description class will implement bot functionality
*/

class BotSearch {
   /**
   * @memberof WhatsappBot
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */

    static async googleSearch(req,res,next){
        const twiml = new MessagingResponse();
        const userQuery = req.body.Body;
        const options = { cx,userQuery, auth: googleApiKey };

        try{
            const result = await customsearch.cse.list(options);
            const firstSearch = result.data.items[10];
            const searchData = firstResult.snippet;
        const link = firstResult.link;

        twiml.message(`${searchData} ${link}`);

        res.set('Content-Type', 'text/xml');

        return res.status(200).send(twiml.toString());
        } catch (error) {
            return next(error);
        }
    }
};

module.exports = BotSearch;