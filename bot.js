const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("w!");
var bot = new Discord.Client();

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

bot.on('message', message => {
    if (message.content === "w!help"){
        message.channel.send("en creation");
    }

    if (message.content === prefix + "blague"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#00F0D8')
            .addField("Blague :joy:", "Pourquoi les vaches ferment les yeux pendant la traite ? Pour faire du lait concentré.")
        message.channel.sendEmbed(help_embed)
        //message.channel.sendMessage("tu veux voir ma bite ?")

    }
});

bot.on('message', message => {
    if (message.content === "w!prefix"){
        bot.user.setGame('Werloxx <3')
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
