const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {

  let user = message.author;

  let member = db.fetch(`money_${message.author.id}`)
  let member2 = db.fetch(`bank_${message.author.id}`)

if(isNaN(args[0])) {
    return message.channel.send({embed: {
     color: 16734039,
     description: `<:pleux_no:887553189883281438> | You must provide a number to deposit money!`
     }})
}
	
  if (args[0] == 'all' || args[0] == 'max') {
    let money = await db.fetch(`money_${message.author.id}`)
    let bank = await db.fetch(`bank_${message.author.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("<:pleux_no:887553189883281438>  | You don't have any money to deposit")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.author.id}`, money)
    db.subtract(`money_${message.author.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_success:887552715247452210> | You have deposited all your coins into your bank`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_no:887553189883281438> | Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_no:887553189883281438> | You can't deposit negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x:<:pleux_no:887553189883281438> | You don't have that much money`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_success:887552715247452210> | You have deposited ${args[0]} coins into your bank`);

  message.channel.send(embed5)
  db.add(`bank_${message.author.id}`, args[0])
  db.subtract(`money_${message.author.id}`, args[0])
  }
}

  exports.info = {
  name: "deposit",
  aliases: [],
  usage: "",
 description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}