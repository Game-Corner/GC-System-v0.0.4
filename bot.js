const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = 'GC!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

console.log(util.inspect(client.listeners('serverRoleCreated')));

client.on('serverRoleCreated', () => {
  client.sendMessage("298139186819629056", role.name);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }
});


client.login(process.env.token);
