const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
  client.user
});

const prefix = "*"
const cmds = "*help, *picme"

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);
 
 let args = message.content.split(" ").slice(1);
  if (command === 'picme') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  } else {
    if (command === 'help') {
      message.reply("Info\nPrefix:"+ prefix +"\nCommands:"+ cmds)
    } else {
      if (command === "setusername") {
        client.user.setNickname(args.join(" "));
      }
    }
  }
});

client.login(process.env.TOKEN);
