const http = require('http'); 
const Discord = require("discord.js");
const client = new Discord.Client();
var ignoredChannels = new Map();
var prefix = 'GC!';
var prefixM = 'GCm!';

http.createServer(function (req, res) {}).listen(process.env.PORT || 5000);

const msg1 = msg => {
  if (authorIgnore === msg.author.id) {
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
      msg.reply('You did not type in the correct arguments. Please type Yes or No');
      client.removeListener('message', msg1);
      client.on('message', msg1_2);
    }
  }
};

const msg1_2 = msg => {
  if (authorIgnore === msg.author.id) {
    if (msg.content === 'Yes') {
      ignoredChannels.delete(msg.channel.id);
      msg.reply('Channel is now not ignored.');
      client.removeListener('message', msg1_2);
    }
    else if (msg.content === 'No') {
      msg.reply('Channel is still ignored.');
      client.removeListener('message', msg1_2);
    }
    else {
      msg.reply('You did not type in the correct arguments. Please try again later.');
      client.removeListener('message', msg1_2);
    }
  }
};

const quest = msg => {
  if (authorQuest === msg.author.id) {
    if (msg.content === 'Moderator' || msg.content === 'moderator') {
      msg.reply('What should the new Moderator prefix be?');
      client.removeListener('message', quest);
      client.on('message', quest1);
    }
    else if (msg.content === 'Everyone' || msg.content === 'everyone') {
      msg.reply('What should the new Everyone prefix be?');
      client.removeListener('message', quest);
      client.on('message', quest2);
    }
    else {
      msg.reply('You did not type in the correct arguments. Please type Moderator or Everyone.');
      client.removeListener('message', quest);
      client.on('message', quest3);
    }
  }
};

const quest1 = msg => {
  if (authorQuest === msg.author.id) { 
    if (msg.content.length > 4 || msg.content.length < 1) {
      msg.reply('The prefix must be between 1 and 4 characters long. Please try again.');
      client.removeListener('message', quest1);
      client.on('message', quest1_2);
    }
    else {
      prefixM = msg.content;
      msg.reply('The Moderator prefix has been set to`' + prefixM = '`.');
      client.removeListener('message', quest1);
    }
  }
};

const quest1_1 = msg => {
  if (authorQuest === msg.author.id) {
    if (msg.content.length > 4 || msg.content.length < 1) {
      msg.reply('The prefix must be between 1 and 4 characters long. Please try again later.');
      client.removeListener('message', quest1_1);
    }
    else {
      prefixM = msg.content;
      msg.reply('The Moderator prefix has been set to`' + prefixM + '`.');
      client.removeListener('message', quest1_1);
    }
  }
};

const quest2 = msg => {
  if (authorQuest === msg.author.id) {
    if (msg.content.length > 4 || msg.content.length < 1) {
      msg.reply('The prefix must be between 1 and 4 characters long. Please try again.');
      client.removeListener('message', quest2);
      client.on('message', quest2_1);
    }
    else {
      prefix = msg.content;
      msg.reply('The Everyone prefix has been set to`' + prefix = '`.');
      client.removeListener('message', quest2);
    }
  }
};

const quest2_1 = msg => {
  if (authorQuest === msg.author.id) {
    if (msg.content.length > 4 || msg.content.length < 1) {
      msg.reply('The prefix must be between 1 and 4 characters long. Please try again later.');
      client.removeListener('message', quest2_1);
    }
    else {
      prefixM = msg.content;
      msg.reply('The Everyone prefix has been set to`' + prefix = '`.');
      client.removeListener('message', quest2_1);
    }
  }
};    

const quest3 = msg => {
  if (authorQuest === msg.author.id) {
    if (msg.content === 'Moderator' || msg.content === 'moderator') {
      msg.reply('What should the new Moderator prefix be?');
      client.removeListener('message', quest3);
      client.on('message', quest1);
    }
    else if (msg.content === 'Everyone' || msg.content === 'everyone') {
      msg.reply('What should the new Everyone prefix be?');
      client.removeListener('message', quest);
      client.on('message', quest2);
    }
    else {
      msg.reply('You did not type in the correct arguments. Please try again later.');
      client.removeListener('message', quest3);
    }
  }
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  var clientUser = client.user;
  clientUser.setGame('GC!info');
});

client.on('guildCreate', guild => {
  guild.owner.send('Game Corner System has joined your server! To learn more about this bot, please type `GC!info` in ' + guild.name + '. To configure this bot\'s moderation and functions, please type `GCm!info` in ' + guild.name + '.');
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
      msg.reply('\n For **Information** about this bot, please type: `' + prefix + 'info` \n For the **Commands** to this bot, please type: `' + prefix + 'commands`');
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
      msg.reply('**Commands:** \n To use these commands, type ' + prefixM + ', along with one of the commands below. __Example:__ ' + prefix + 'ignore \n  1. `ignore` Ignores all Everyone commands from the channel the command was sent in \n **For Everyone commands, please use:** `' + prefix + 'commands`');
    }
    else {
      msg.reply('You do not have the permissions to use these commands.');
    }
  }
  
  if (msg.content === prefixM + 'setPrefix') {
    msg.reply('Would you like to change the Everyone or the Moderator prefix?');
    authorQuest = msg.author.id;
    client.on('message', quest);
  }
    
  if (msg.content === prefixM + 'ignore') {
    var guildMember = msg.member;
    authorIgnore = msg.author.id;
    if (guildMember.hasPermission('MANAGE_GUILD', false, true, true)) {
      if (ignoredChannels.has(msg.channel.id)) {
        msg.reply('Would you like to stop ignoring this channel?');
        client.on('message', msg1);`
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
