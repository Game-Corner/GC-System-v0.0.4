const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "GCS"


client.on('ready', () => {
  console.log('Logged in as ${client.user.username}!');
});

client.on('message', msg => {
  if (msg.content === 

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
  msg.reply("Pong!");
  }
});

client.login('token');
