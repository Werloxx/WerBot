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
	
    if (message.content === "w!chien"){
        message.channel.send("https://www.tenor.co/s6vl.gif");
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
            .addField("-=:arrow_backward::regional_indicator_h::regional_indicator_e::regional_indicator_l::regional_indicator_p::arrow_forward:=-", "Voici toutes les commandes disponibles avec le __**WerBot**__\rCes commandes sont à faire avec le préfix `w!`\r:game_die: __Jeux |Fun__\r:arrow_right:`Ping` > Pong !\r:arrow_right: `chien` > Photo aléatoire d'un chien.")
        message.channel.sendEmbed(help_embed)
        //message.channel.sendMessage("tu veux voir ma bite ?")
        
    }
    	if (message.content === 'w!avatar') {
	  message.channel.send(message.author.avatarURL);
	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
