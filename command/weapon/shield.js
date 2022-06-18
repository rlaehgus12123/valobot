const { MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");

async function shield(int) {

  const row = new MessageActionRow()
      .addComponents(
          new MessageButton()
              .setCustomId('중형 보호막')
              .setLabel('중형 보호막')
              .setStyle('PRIMARY'),
      )
      .addComponents(
          new MessageButton()
              .setCustomId("경형 보호막")
              .setLabel("경형 보호막")
              .setStyle('PRIMARY'),
      )

    let embed = new MessageEmbed()
    .setColor("GREEN")
    .setTitle("쉴드(Shield) 목록")
    .addField("1. 중형 보호막", "나는 죽지않아! 50풀로 채워주는 쉴드템")
    .addField("2. 경형 보호막", "아주 조금만 보호해주지만 그래도 무시 못할 쉴드템!")
  await int.reply({embeds: [embed], components: [row] })

  const filter = i => i.customId === i.customId && i.user.id === i.user.id;
  var collector = int.channel.createMessageComponentCollector({ filter, time: 15000 });
  collector.on("collect", (reaction, user) => {
    if (reaction.customId === "중형 보호막") {
             let shield = new MessageEmbed()
             .setColor("BLUE")
             .setTitle("Shield : 중형 보호막 (Heavy Shield)")
             .addField("가격", "1,000원")
             .addField("흡수 량", "입는 피해의 66%")
             .addField("쉴드 량", "50(만땅)")
            int.editReply({embeds: [shield], components: [] })
             collector.stop()
      } else if (reaction.customId === "경형 보호막") {
             let shield = new MessageEmbed()
             .setColor("BLUE")
             .setTitle("Shield : 경형 보호막 (Light Shield)")
             .addField("가격", "400원")
             .addField("흡수 량", "입는 피해의 66%")
             .addField("쉴드 량", "25")
            int.editReply({embeds: [shield], components: [] })
             collector.stop()
      }
      })
}

module.exports = {
  shield
}