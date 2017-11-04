const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var randnum = 0;

bot.on('message', message => {
    if (message.content === "petit poney"){
        message.reply("la drogue c'est mal, ps: je suis bien placer pour dire sa :p");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

function random(min, max) {
    min = Math.cell(0);
    max = Math.floor(10);
    randnum = Math.floor(Math.rando() * (max - min +1) + min);

}

    if (message.content === "w!blague"){
        random();
    
        if (randnum == 1)(
            message.reply("lol test")
        )
    }
