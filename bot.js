const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var ignore = false

client.on('message', msg => {
  if (msg.content === 'GCMignore') {
    ignore = 'true';
    msg.reply('Channel is now ignored.');
    }

if (msg.content === 'ping') {
  if (ignore = 'true') {}
  else if (ignore = 'false') {
  msg.reply('Pong!');
 }
}
});

client.login(process.env.token);
