const Discord = require("discord.js");
const client = new Discord.Client();

const version = '0.1.3'

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame('*help | Version: '+ version)
});

const prefix = "*"
const cmds = "*help, *picme, *uptime, *setusername"

// Disable
offline = false

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);
 
 let args = message.content.split(" ").slice(1);

 if (offline) {
   return message.channel.send('**The bot is currently disabled from its developer, Sorry.**')
 }

  if (command === 'picme') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  
  if (command === 'help') {
    message.reply("Info\nPrefix:"+ prefix +"\nCommands:"+ cmds);
  }
  
  if (command === 'setusername') {
    client.bot.setNickname(args.join(" "));
  }

  if (command === 'uptime') {
      message.reply('I have been up for ' + client.uptime + ' miliseconds');
  }

  if (command === 'verison') {
      message.reply('I am running on'+ version);
  }

  if (command === 'roast') {
    if (message.mentions.users.size === 0) {
      return message.reply('Please mention a user to roast.')
    } else {
      let roastuser = message.guild.member(message.mentions.users.first());
      message.channel.send(roastuser.avatarURL);
      message.channel.send(roastuser.displayName.toString +' your so ugly, the ugly duckling ran away from you');
    }
  }

});

client.login(process.env.TOKEN);
