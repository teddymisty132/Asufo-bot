const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = "*"

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
    if (command === "ban") {
    if(message.mentions.users.size === 0) {
      return message.reply("please mention a user to ban them from the guild.");
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {}
      return message.reply("this users does not seem valid.");
    }
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      return message.reply("I do not have the permissions to ban members.");
    }
    kickMember.kick("You were banned because `" + message.reply(args.join(" ")) + "`");
    message.author.send("You have successfuly banned " + kickMember.user + " from TKC Discord.")
    }
  }
});

client.login(process.env.TOKEN);
