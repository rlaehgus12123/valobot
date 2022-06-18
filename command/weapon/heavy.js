const { MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");

async function heavy(int) {

  const row = new MessageActionRow()
      .addComponents(
          new MessageButton()
              .setCustomId('아레스')
              .setLabel('아레스')
              .setStyle('PRIMARY'),
      )
      .addComponents(
          new MessageButton()
              .setCustomId("오딘")
              .setLabel("오딘")
              .setStyle('PRIMARY'),
      )
  
    let embed = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("기관총(Heavy) 목록")
      .addField("1. 아레스", "오딘의 하위 버전이다 데미지는 낮지만 가격대의 비해 효율성이 좋다")
      .addField("2. 오딘", "기관총 계의 끝판 왕이다 딜,연사속도,탄퍼짐 감소 오딘에게 걸리면 죽음이 답이다.")
    await int.reply({embeds: [embed], components: [row] })

    const filter = i => i.customId === i.customId && i.user.id === i.user.id;
    var collector = int.channel.createMessageComponentCollector({ filter, time: 15000 });
    collector.on("collect", (reaction, user) => {
      if (reaction.customId === "아레스") {
             let heavy = new MessageEmbed()
             .setColor("BLUE")
             .setTitle("Heavy : 아레스 (Ares)")
             .addField("가격", "1,600원")
             .addField("탄창 수", "50/100")
             .addField("벽 관통", "높음")
             .addField("사격", "좌클릭: `자동사격` | 초당 `10발` -> `13발`(연사 시 증가함)\n우클릭: 조준경 확대`1.25x` | 탄 퍼짐 `약`")
             .addField("0~30m", "머리: 72 데미지\n몸통: 30 데미지\n다리: 25 데미지")
             .addField("30~50m", "머리: 67 데미지\n몸통: 28 데미지\n다리: 23 데미지")
        int.editReply({embeds: [heavy], components: [] })
             collector.stop()
      } else if (reaction.customId === "오딘") {
             let heavy = new MessageEmbed()
             .setColor("BLUE")
             .setTitle("Heavy : 오딘 (Odin)")
             .addField("가격", "3,200원")
             .addField("탄창 수", "100/200")
             .addField("벽 관통", "높음")
             .addField("사격", "좌클릭: `자동사격` | 초당 `12발` -> `15.6발`(연사 시 증가함)\n우클릭: 초당 `15.6발`| 조준경 확대`1.25x` | 탄 퍼짐 `약`")
             .addField("0~30m", "머리: 95 데미지\n몸통: 38 데미지\n다리: 32 데미지")
             .addField("30~50m", "머리: 77 데미지\n몸통: 31 데미지\n다리: 26 데미지")
        int.editReply({embeds: [heavy], components: [] })
             collector.stop()
      }
    })
}

module.exports = {
  heavy
}