const {Command} = require('commander');
const check = require('../commands/check');

const program = new Command();

program
    .command('price')
    .description('Check price of coins')
    .option('--symbol <type>', 'Add specific coin types in CSV format', 'AAPL')
    .option('--cur <currency>', 'Chgange the currency', 'USD')
    .action(cmd => check.price(cmd));

    program.parse(process.argv);