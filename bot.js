const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("w!");

client.on('ready', () => {
    client.user.setPresence({ game: { name: "Werloxx", type: 0} });
console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Werloxx le plus beau') {
        message.reply('Ouais trop');
      }
    if (message.content === "Ping"){
        message.channel.send("Pong");
    }

    if (message.content === prefix + "blague"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#00F0D8')
            .addField("Blague :joy:", "lol blague drole\n TEST")
        message.channel.sendEmbed(help_embed)
        //message.channel.sendMessage("tu veux voir ma bite ?")
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#00F0D8')
            .addField("Infos sur SeuryZero", "test bite bite\n\nbite")
        message.channel.sendEmbed(help_embed)
        //message.channel.sendMessage("tu veux voir ma bite ?")
        
    }
    	if (message.content === 'w!avatar') {
	  message.reply(message.author.avatarURL);
	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
