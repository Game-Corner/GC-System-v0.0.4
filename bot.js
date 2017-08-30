const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  get roles() {
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
  get roles() {
    const list = new Collection();
    const everyoneRole = this.guild.roles.get(this.guild.id);

    if (everyoneRole) list.set(everyoneRole.id, everyoneRole);

    for (const roleID of this._roles) {
      const role = this.guild.roles.get(roleID);
      if (role) list.set(role.id, role);
    }

    return list;
  }
if (list.includes('@&309165526427369473') = true) {
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
