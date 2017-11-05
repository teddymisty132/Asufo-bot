const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "#"

client.on("ready", () => {
  console.log("I am ready!");
  
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[1];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice[1];
  
  if (command === "Hello") {
    message.channel.sendMessage("Hello!");
  }
});

client.login(process.env.TOKEN);
