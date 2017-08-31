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
    if (User.hasRole("Moderator") {
        msg.reply('Worked');
        }
    else {
      msg.reply("Did not work");
    }
  }
});

client.login(process.env.token);
