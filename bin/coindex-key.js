const {Command} = require('commander');
const pkg = require('../package.json');
const key = require('../commands/key');

const program = new Command();

program
    .command('set' )
    .description('Set API key -- get at https://coingecko.com')
    .action(key.set);

    program
    .command('show')
    .description('Show API key')
    .action(key.show);


    program
    .command('remove' )
    .description('Remove API key')
    .action(key.remove);

    
    program.parse(process.argv);