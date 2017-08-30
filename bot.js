const Discord = require("discord.js");
const client = new Discord.Client();
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  
  if (msg.content === 'GCMignore') {
    if (this.guild.roles.has(@&309165526427369473)) {
      msg.reply('Disabled');
    }
  }
  
});

client.login(process.env.token);
