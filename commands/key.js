//const inquirer = import('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager.js');
const inquirer = require('inquirer');
const { isRequired } = require('../utils/validation.js');



const key = {
    
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
        {
            type: 'input',
            name: 'key',
            message: 'Enter API Key '.green + "https://coingecko.com".yellow,
            validate: isRequired
        }
        ]);

        const key = keyManager.setKey(input.key);

        if(key) {
            console.log('Api Key Set'.blue);
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            console.log('Current API Key:', key.green)
        } catch(err){
            console.error(err.message.red);
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();

            console.log('Key Removed'.blue);
        } catch(err){
            console.error(err.message.red);
        }
    }
}

module.exports = key;