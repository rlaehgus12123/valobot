const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: "unit",
    aliases: ["유닛", "영웅"],
    description: "유닛(영웅)의 스킬과 능력 데미지를 확인합니다!",
    execute(message) {
       let embed = new MessageEmbed()
       .setColor("0x2F3136")
       .setTitle("유닛(영웅) 정보 확인하기")
       .setDescription("유닛들의 정보를 확인하세요!")

       message.client.commands1.each((cmd) => {
        embed.addField(
          `**${message.client.prefix} ${cmd.name}${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          `${cmd.description}`,
          true
        );
      })
      message.channel.send({embeds: [embed]})
    }
}