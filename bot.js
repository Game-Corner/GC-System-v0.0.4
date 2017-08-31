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
    if (msg.author.hasRole("309165526427369473")) {    
    msg.reply("worked");
    }
    else {
      msg.reply("Failed");
    }
  }
});

client.login(process.env.token);
