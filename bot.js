const Discord = require("discord.js");
const client = new Discord.Client();
const herokuPinger = require('heroku-pinger');
const pinger = herokuPinger(https://gc-system.herokuapp.com/);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  pinger.schedulePing();
});

var ignore = false

client.on('message', msg => {
  if (msg.content === 'GCMignore') {
    if (guildmember.roles.find === 'Moderator') {
    ignore = true;
    msg.reply('Channel is now ignored.');
    }
    else {
      msg.reply('You do not have the permissions to do this.');
    }
  }
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    if (ignore = true) {}
    else if (ignore = false) {
    msg.reply('Pong!');
    }
  }
});

client.login(process.env.token);
