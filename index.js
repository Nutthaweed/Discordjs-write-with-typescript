use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var client = new discord_js_1["default"].Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', function () {
    console.log('The Bot is ready');
});
client.on('messageCreate', function (message) {
    if (message.content === 'message that you want to ride') {
        message.reply({
            content: 'message'
        });
    }
});