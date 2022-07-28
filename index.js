import Discord from 'discord.js';
import { createRequire } from "module"; 
import ParseData from './commands/ParseData.js';
const require = createRequire(import.meta.url); 
const {token} = require("./config.json") 
const client = new Discord.Client()
client.on ('message',msg =>{
    async function parse() {
        msg.reply(await ParseData());
    }
    switch (msg.content) {
        case 'parse':
            parse()
            break;
    }
})

client.login(token)