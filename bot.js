const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = "*"

client.on("message", (message) => {
  if (message.content === prefix + 'picme') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.login(process.env.TOKEN);
