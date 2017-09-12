const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = 'GC!';
const ignoredChannels = new Map();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
  if (msg.content === prefix + 'ping') {
    if (ignoredChannels.has(msg.channel.id)) {}
    else {
      msg.reply('Pong!');
    }
  }
  
  if (msg.content === prefix + 'info') {
    if (ignoredChannels.has(msg.channel.id)) {}
    else {
      msg.reply('Game Corner System is a open-sourced Discord Bot that acts as the official bot for the GC community. You can contribute to it here: https://github.com/Game-Corner/GC-System ');
    }
  }
  
  if (msg.content === prefix + 'ignore') {
    const guildMember = msg.member;
    const author = msg.author.id;
    if (guildMember.hasPermission('MANAGE_GUILD', false, true, true)) {
      if (ignoredChannels.has(msg.channel.id)) {
        msg.reply('Would you like to stop ignoring this channel? (Yes/No)');
        client.on('message', msg1 => {
          if (author === msg1.author.id) {
            if (msg1.content === 'Yes') {
              ignoredChannels.delete(msg1.channel.id);
              msg1.reply('Channel is now not ignored.');
              client.removeListener('message', msg1)
            }
            else if (msg1.content === 'No') {
              msg1.reply('Channel is still ignored.');
            }
            else {
              msg1.reply('You did not type in the correct arguments. Please try again later.');
            }
          }
        });
      }
      else {
      ignoredChannels.set(msg.channel.id, msg.channel.name);
      msg.reply('Channel is now ignored.');
      }
    }
    else {
      msg.reply('You do not have the permissions to do this.');
    }
  }
});

client.login(process.env.token);
