const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = 'GC!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('serverRoleCreated', client => {
  client.sendMessage("298139186819629056", "@everyone A new role has been created! Please see #role-request for more info on test");
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }
});


client.login(process.env.token);
