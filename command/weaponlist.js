const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: "weaponlist",
    aliases: ["무기리스트", "무기목록"],
    description: "다양한 무기들을 확인 합니다",
    execute(message) {
      let embed = new MessageEmbed()
      .setColor("0x2F3136")
      .setTitle("무기 목록")
     message.client.commands2.each((cmd) => {
        embed.addField(
          `**${message.client.prefix} ${cmd.name}${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          "`" + `${cmd.description}` + "`",
          true
        );
      })
      message.channel.send({embeds: [embed]})
    }
}