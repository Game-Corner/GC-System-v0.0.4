const http = require('http'); 
const Discord = require("discord.js");
const client = new Discord.Client();
const ignoredChannels = new Map();
var prefix = 'GC!';
var prefixM = 'GCm!';

http.createServer(function (req, res) {}).listen(process.env.PORT || 5000);

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
  var clientUser = client.user;
  clientUser.setGame('GC!info');
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    if (ignoredChannels.has(msg.channel.id)) {}
    else {
      msg.reply(client.ping.toFixed(2) + ' ms');
    }
  }
  
  if (msg.content === prefix + 'help') {
    if (ignoredChannels.has(msg.channel.id)) {}
    else {
      msg.reply('For **information** about this bot, please type: `' + prefix + 'info` \n \n For the **commands** for this bot, please type: `' + prefix + 'commands`);
    }
  }
  
  if (msg.content === prefix + 'info') {
    if (ignoredChannels.has(msg.channel.id)) {}
    else {
      msg.reply('**Game Corner System is a open-sourced Discord Bot that acts as the official bot for the GC community.** \n Commands can be found by using `' + prefix + 'commands`. \n **Sites:** \n 1. Community: https://game-corner.000webhostapp.com \n 2. Discord: https://discord.gg/jgFrBhN \n 3. GitHub: https://github.com/Game-Corner/GC-System');
    }
  }
  
  if (msg.content === prefix + 'commands') {
    if (ignoredChannels.has(msg.channel.id)) {}
    else {
      msg.reply('**Commands:** \n To use these commands, type ' + prefix + ', along with one of the commands below. __Example:__ ' + prefix + 'ping \n 1. `info` Provides information about Game Corner System and Game Corner \n 2. `ping` States the current ping of the bot \n **For Moderator commands, please use:** `' + prefixM + 'commands`');
    }
  }
  
  if (msg.content === prefixM + 'commands') {
    var guildMember = msg.member;
    if (guildMember.hasPermission('MANAGE_GUILD', false, true, true)) {  
      msg.reply('**Commands:** \n To use these commands, type ' + prefixM + ', along with one of the commands below. __Example:__ ' + prefix + 'ignore \n  1. `ignore` Ignores all Everyone commands from the channel the command was sent in. \n **For Everyone commands, please use:** `' + prefix + 'commands`');
    }
    else {
      msg.reply('You do not have the permissions to use these commands.');
    }
  }
  
  if (msg.content === prefixM + 'ignore') {
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
