const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js");
const sendError =require("util")
exports.run = (bot, message, args) => {
     const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_GUILD"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage server** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** permission to use this command!!!`);
      return message.lineReply(embed)
       };

   const embed = new Discord.MessageEmbed()
    .setColor("#ff5900")
         .setDescription(`<:pleuxinfo:902806293419544576> | type ON/OFF to turn on and turn off the system`
        );
      if (!args[0]) return message.lineReplyNoMention (embed);
    const type = args[0];
    if (type === "on" || type === "enable") {
      bot.db.set(`${message.guild.id}_welcomemessagesys`, "yes")
      message.channel.send(
        `<:pleux_success:887552715247452210> | Welcome message is successfully enabled!`
      );
      return;
    }
    if (type === "off" || type === "disable") {
      bot.db.set(`${message.guild.id}_welcomemessagesys`, "no")
      message.channel.send(
        `<:pleux_success:887552715247452210> | Welcome message is successfully disabled!`
      );
      return;
    }
}
exports.info = {
name: 'setwelcomemsgsys',
  aliases:["setwelcomesystem","welcomemsgsys", 'setwelcomemessagesys', "setwelcomemsgsys"],
  usage: "<on/enable/off/disable>",
  description: "turns the welcome message on/off",
}
exports.conf={
  cooldown: 3,
  dm: "no"
}