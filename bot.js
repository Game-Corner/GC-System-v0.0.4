const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = 'GC!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }
  
  if (msg.content === prefix + 'info') {
    msg.reply('Game Corner System is a open-sourced Discord Bot that acts as the official bot for the GC community. You can contribute to it here: https://github.com/Game-Corner/GC-System ');
  }
  
  if (msg.content === prefix + 'ignore') {
    const guildMember = message.member;
    if (guildMember.roles.has(309165526427369473)) {
        msg.reply('worked');
    }    
    else {
      msg.reply('did not work');
    }
  }
});



  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.login(process.env.token);
