const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function getRoles() {
    const list = new Collection();
    const everyoneRole = this.guild.roles.get(this.guild.id);

    if (everyoneRole) list.set(everyoneRole.id, everyoneRole);

    for (const roleID of this._roles) {
      const role = this.guild.roles.get(roleID);
      if (role) list.set(role.id, role);
    }

    return list;
}

var ignore = false

client.on('message', msg => {
  if (msg.content === 'GCMignore') {
   var gR1 = get getRoles()
if (gR1.includes('Moderator) = true {
    ignore = true;
    msg.reply('Channel is now ignored.');
    }
    else {
      msg.reply('You do not have the permissions to do this.');
    }

if (msg.content === 'ping') {
  if (ignore = true) {}
  else if (ignore = false) {
  msg.reply('Pong!');
 }
}
});





client.login(process.env.token);
