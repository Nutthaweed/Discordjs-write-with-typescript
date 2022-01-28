import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready' , () => {
    console.log('The Bot is ready')
})

client.on('messageCreate' , (message) => {
    if (message.content === 'message that you want to write') {
        message.reply({
            content: 'message',
        })
    }
})

client.login(process.env.TOKEN)