const http = require('http'); 
const Discord = require("discord.js");
const client = new Discord.Client();
const ignoredChannels = new Map();
var prefix = 'GC!';
var clientUser = client.user;

http.createServer(function (req, res) {}).listen(process.env.PORT || 5000);

clientUser.setGame('GC!info');

const msg1 = msg => {
  if (author === msg.author.id) {
    if (msg.content === 'Yes') {
      ignoredChannels.delete(msg.channel.id);
      msg.reply('Channel is now not ignored.');
      client.removeListener('message', msg1);
    }
    else if (msg.content === 'No') {
      msg.reply('Channel is still ignored.');
      client.removeListener('message', msg1);
    }
    else {
      msg.reply('You did not type in the correct arguments. Please try again.');
      client.removeListener('message', msg1);
      client.on('message', msg2);
    }
  }
};

const msg2 = msg => {
  if (author === msg.author.id) {
    if (msg.content === 'Yes') {
      ignoredChannels.delete(msg.channel.id);
      msg.reply('Channel is now not ignored.');
      client.removeListener('message', msg2);
    }
    else if (msg.content === 'No') {
      msg.reply('Channel is still ignored.');
      client.removeListener('message', msg2);
    }
    else {
      msg.reply('You did not type in the correct arguments. Please try again later.');
      client.removeListener('message', msg2);
    }
  }
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
  if (msg.content === prefix + 'ping') {
    if (ignoredChannels.has(msg.channel.id)) {}
    else {
      msg.reply(client.ping + ' ms');
    }
  }
  
  if (msg.content === prefix + 'info') {
    if (ignoredChannels.has(msg.channel.id)) {}
    else {
      msg.reply('Game Corner System is a open-sourced Discord Bot that acts as the official bot for the GC community. Commands can be found by using GC!commands . You can visit our sit here: game-corner.000webhostapp.com You can contribute to the bot here: https://github.com/Game-Corner/GC-System');
    }
  }
  
  if (msg.content === prefix + 'ignore') {
    var guildMember = msg.member;
    author = msg.author.id;
    if (guildMember.hasPermission('MANAGE_GUILD', false, true, true)) {
      if (ignoredChannels.has(msg.channel.id)) {
        msg.reply('Would you like to stop ignoring this channel? (Yes/No)');
        client.on('message', msg1);
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
