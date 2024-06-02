const axios = require('axios');
const color = require('colors');

class tickerAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=';
    }

    async getPriceData(ticker){
        try {
            const res = await axios.get(`${this.baseUrl}${ticker}&apikey=${this.apiKey}`);
            const result = res.data;
    
            let output = `Symbol:\t${result['Global Quote']['01. symbol']}\n\tprice:\t${result['Global Quote']['05. price']}`;
            return output;
        } catch(err) {
            console.error(err);
        }
    }
}

module.exports = tickerAPI;