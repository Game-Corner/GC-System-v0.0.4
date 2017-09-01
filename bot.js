const Discord = require("discord.js");
const client = new Discord.Client();
const channel = message.channel;
const guildMember = message.member;
var prefix = 'GC!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    if (msg.reply('Pong!');
  }
  
  if (msg.content === prefix + 'info') {
    msg.reply('Game Corner System is a open-sourced Discord Bot that acts as the official bot for the GC community. You can contribute to it here: https://github.com/Game-Corner/GC-System ');
  }
  
  if (msg.content === prefix + 'ignore') {
    if (guildMember.roles.has(309165526427369473) {
        msg.reply('worked')
    }    
  }
});


client.login(process.env.token);
