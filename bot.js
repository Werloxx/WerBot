const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("w!");

client.on('message', message => {
    if (message.content === 'Werloxx le plus beau') {
        message.reply('Ouais trop');
      }
    if (message.content === "w!help"){
        message.channel.send("en creation");
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
            .addField("Help :joy:", "gui")
        message.channel.sendEmbed(help_embed)
        //message.channel.sendMessage("tu veux voir ma bite ?"
    }

    if (message.content === prefix + "serv"){
        name: "server-info",
        description: "Prints the information of the current server.",
        extendedhelp: "I'll tell you some information about the server and the channel you're currently in.",
        process: function(bot, msg, suffix) {
          // if we're not in a PM, return some info about the channel
          if (msg.channel.server) {
            var msgArray = [];
            msgArray.push("You are currently in " + msg.channel + " (id: " + msg.channel.id + ")");
            msgArray.push("on server **" + msg.channel.server.name + "** (id: " + msg.channel.server.id + ") (region: " + msg.channel.server.region + ")");
            msgArray.push("owned by " + msg.channel.server.owner + " (id: " + msg.channel.server.owner.id + ")");
            if (msg.channel.topic) {
              msgArray.push("The current topic is: " + msg.channel.topic);
            }
            bot.sendMessage(msg, msgArray);
          } else {
            bot.sendMessage(msg, "You can't do that in a DM, dummy!.");
          }
        }
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
