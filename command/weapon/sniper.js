const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sniper",
  aliases: ["스나이퍼", "저격총", "스나", "저격소총"],
  description: "언제 어디서 머리가 날라갈지 모르는 무서운 저격소총 그 무서움의 정보를 알려드립니다.",
  execute(message) {
    let embed = new MessageEmbed()
    .setColor("GREEN")
    .setTitle("저격총(Sniper) 목록")
    .addField("1. 마샬", "데미지는 약하지만 장전속도가 빨라 연속적으로 딜을 넣을수 있습니다.\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("2. 오퍼레이터", "장전속도가 마샬에 비해 너무나도 적다 하지만 순간적인 폭딜과 탄퍼짐의 감소로 인해 엄청난 정확도를 보인다 방어구가 없으면 한대 맞는걸로도 죽을수있다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    message.channel.send({embeds: [embed]}).then(emoji => {
      emoji.react("1️⃣")
      emoji.react("2️⃣")
      
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = emoji.createReactionCollector({ filter, time: 15000 });
      
      collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
           case "1️⃣":
         let sniper = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Sniper : 마샬 (Marshal)")
        .addField("가격", "1,100원")
        .addField("탄창 수", "5/15")
        .addField("벽 관통", "보통")
        .addField("사격", "좌클릭: `반 자동 사격` | 초당 `1.5발`\n우클릭: 초당 `1.2발` | 스코프`2.5x` | 탄 퍼짐 `약`")
        .addField("피해량", "머리: 202 데미지\n몸통: 101 데미지\n다리: 85 데미지")
        message.channel.send({embeds: [sniper]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
           case "2️⃣":
         let sniper = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Sniper : 오퍼레이터 (Operator)")
        .addField("가격", "4,500원")
        .addField("탄창 수", "5/10")
        .addField("벽 관통", "높음")
        .addField("사격", "좌클릭: `반 자동 사격` | 초당 `0.75발`\n우클릭: 초당 `1.2발` | 스코프(`2.5x`, `5x`) | 탄 퍼짐 `대폭 감소`")
        .addField("피해량", "머리: 255 데미지\n몸통: 150 데미지\n다리: 127 데미지")
        message.channel.send({embeds: [sniper]})
        collector.stop()
      }
    })
    })
  }
}