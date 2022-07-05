const {Intents} = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client({intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
    ],
})


client.on('ready',() => {
    console.log('Bot online')
}),

client.on('messageCreate', (message) => {
    if(message.author.bot == true) return
    if(message.channel.type == "dm") return

    
    if(message.content == 'delay') {
        message.channel.send(`O delay do bot é de estimados ${client.ws.ping} ms`)
    }
    if(message.content == 'avatar') {
        message.channel.send(`https://cdn.discordapp.com/avatars/409032087086170112/${message.author.avatar}.webp`)
    }
    if(message.content == 'ping') {
        message.channel.send('Pong!')
    }
})



client.login('OTY4MjkwNjU5OTU2MDYwMjQw.Ymcs8w.QdwlzPIhScQvn383eEeltl-ERB0')