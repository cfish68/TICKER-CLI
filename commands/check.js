const Keymanager = require('../lib/KeyManager');
const tickerAPI = require('../lib/tickerAPI');

const check = {
    async price(cmd) {
        try {
            const keyManager = new Keymanager();
            const key = keyManager.getKey();
            
            const api = new tickerAPI(key);

            const priceOuputData = await api.getPriceData(cmd.coin);
            console.log(priceOuputData);

        } catch (err) {
            console.error(err.message.red);
        }
    }
};

module.exports = check;