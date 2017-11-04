const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'w!blague') {
    	message.reply('Pourquoi les vaches ferment les yeux pendant la traite ? Pour faire du lait concentré.');
  	}
});

bot.on('message', message => {
    if (message.content === "w!prefix"){
        bot.user.setGame('Werloxx <3')
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
