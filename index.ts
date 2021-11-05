import DiscordJS , { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents : [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready' , () => {
    console.log('Bot is online')
})

client.on("messageCreate" , msg => {
    let data=msg.content.split(' ');
    if(data[0] === '/help') {
        if(!data[1]||!data[2]||!data[3])
        {
            msg.reply('format: /help id location name');
        }
        else
        {
            msg.reply(`${data[3]} with id ${data[1]} asked for help at ${data[2]}`);
        }
    }
  })

client.login(process.env.TOKEN)
