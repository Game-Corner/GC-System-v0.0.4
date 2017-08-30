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
    var GetRoles = get roles() {
    var list = new Collection();
    var everyoneRole = this.guild.roles.get(this.guild.id);

    if (everyoneRole) list.set(everyoneRole.id, everyoneRole);

    for (const roleID of this._roles) {
      const role = this.guild.roles.get(roleID);
      if (role) list.set(role.id, role);
    }

    return list.get("@&309165526427369473");
  }
    if (GetRoles.includes("Moderator")) {
      msg.reply('Disabled');
    }
  }
  
});

client.login(process.env.token);
