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
    	message.reply('test1');
  	}
});

bot.user.setGame('GAME HERE');

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
