const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
 exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_no:887553189883281438> | Mention someone to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x:<:pleux_no:887553189883281438> | Specify an amount to pay`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }

    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "<:pleux_no:887553189883281438> | You must enter the amount of money to pay!"
                }})

  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x:<:pleux_no:887553189883281438> | You can't pay someone negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_no:887553189883281438> | You don't have that much money`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_success:887552715247452210> | You have payed ${user.user.username} ${args[1]} coins`);

  message.channel.send(embed5)
  db.add(`money_${message.author.id}`, args[1])
  db.subtract(`money_${message.author.id}`, args[1])

}

  exports.info = {
  name: "pay",
  aliases: [],
  usage: "",
  description: ""
};
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}