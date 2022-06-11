const { MessageEmbed, Client } = require("discord.js");
const Discord = require('discord.js')
const { PREFIX } = require('../config.json')
const attachment = new Discord.MessageAttachment(`../Image/Help_Guide.png`, 'Help_Guide.png')

module.exports = {
  name: "help",
  aliases: ["h", "도움", "도움말"],
  description: "명령어들을 봅니다",
  execute(message) {
var developd_bot = "https://discord.gg/3HwWTKnGqc"
    let helpEmbed = new MessageEmbed()
      .setTitle(`${message.client.user.username} 도움말`)
      .setDescription(`> 프젝이 개발자(승혁)의 다른 봇을 구경하고 싶으시다면 **[여기](${developd_bot})**를 들어오시면 됩니다`)
      //.setColor("#FF483D")
      .setColor("GREEN")
      message.client.commands.each((cmd) => {
      helpEmbed.addField(`**${message.client.prefix} ${cmd.name} (${cmd.aliases ? `${cmd.aliases})**` : ""}`, "`" + `${cmd.description}` + "`");
    });
    helpEmbed.setFooter("copyright © 2020. 욤 승혓#2645 Service, all rights reserved ")
    // helpEmbed.attachFiles(new Discord.MessageAttachment(`${__dirname}/help_command.png`, 'help_command.png')).setImage('attachment://help_command.png')
    helpEmbed.setTimestamp();

    return message.channel.send({embeds: [helpEmbed]}).catch(console.error);
  }
};