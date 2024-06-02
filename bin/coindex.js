#!/usr/bin/env node
const { Command } = require('commander');
const pkg = require('../package.json');

const program = new Command();


program
.version(pkg.version)
.command('key', 'Manage API -- https://coingecko.com')
.command('check', 'Check Coin Price Info')
.parse((process.argv));


//console.log(process.argv)//prints to the console 2 paths and then the parameters passed to the module (as an array)