const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rifle",
  aliases: ["AR", "소총"],
  description: "발로란트에서 제일 많이 쓰이는 총기들 이라고 해도 과언이 아니다.",
  execute(message) {
    let embed = new MessageEmbed()
    .setColor("GREEN")
    .setTitle("소총(AR) 목록")
    .addField("1. 불독", "연사력이 좋고 탄이 많은 대신 데미지가 다른 AR총에 비해 현저히 낮다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("2. 가디언", "데미지가 모든 AR총에서 가장 강하다 하지만 탄창이 너무 적다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("3. 팬텀", "탄퍼짐이 심해서 원거리 무기로는 못쓰지만 딜 도 괜찮고 사용하기 그리 어려운 것은 아니라 근접 총으로 쓰면 라주 좋다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("4. 밴달", "팬텀에 하위 버전이라고 생각하면 된다 다만 밴달은 잘쓰면 원거리의 킬러가 될수도있다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    message.channel.send({embeds: [embed]}).then(emoji => {
      emoji.react("1️⃣")
      emoji.react("2️⃣")
      emoji.react("3️⃣")
      emoji.react("4️⃣")
      
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = emoji.createReactionCollector({ filter, time: 15000 });
      
      collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
           case "1️⃣":
         let AR = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("AR : 불독 (Bulldog)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "2,100원")
        .addField("탄창 수", "24/72")
        .addField("벽 관통", "보통")
        .addField("사격", "좌클릭: `자동사격` | 초당 `9.15발`\n우클릭: 3점사 | 스코프`1.25x` | 초당 `4발`")
        .addField("피해량", "머리: 115 데미지\n몸통: 35 데미지\n다리: 29 데미지")
        message.channel.send({embeds: [AR]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
           case "2️⃣":
         let AR = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("AR : 가디언 (Guardian)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "2,400원")
        .addField("탄창 수", "12/36")
        .addField("벽 관통", "보통")
        .addField("사격", "좌클릭: `자동사격` | 초당 `6.5발`\n우클릭: 3점사 | 스코프`1.5x` | 탄퍼짐 `약`")
        .addField("피해량", "머리: 195 데미지\n몸통: 65 데미지\n다리: 48 데미지")
        message.channel.send({embeds: [AR]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
           case "3️⃣":
         let AR = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("AR : 팬텀 (Phantom)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "2,900원")
        .addField("탄창 수", "30/90")
        .addField("벽 관통", "보통")
        .addField("사격", "좌클릭: `자동사격` | 초당 `11발`\n우클릭: 스코프`1.25x` | 초당 `9.9발` | 탄 퍼짐 `약`")
        .addField("0~15m", "머리: 156 데미지\n몸통: 39 데미지\n다리: 33 데미지")
        .addField("15~30m", "머리: 140 데미지\n몸통: 35 데미지\n다리: 29 데미지")
        .addField("30~50m", "머리: 124 데미지\n몸통: 31 데미지\n다리: 26 데미지")
        message.channel.send({embeds: [AR]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
           case "4️⃣":
         let AR = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("AR : 밴달 (Vandal)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "2,900원")
        .addField("탄창 수", "25/75")
        .addField("벽 관통", "보통")
        .addField("사격", "좌클릭: `자동사격` | 초당 `9.25발`\n우클릭: 초당 `8.32발` | 스코프`1.25x` | 탄퍼짐 `약`")
        .addField("피해량", "머리: 160 데미지\n몸통: 40 데미지\n다리: 33 데미지")
        message.channel.send({embeds: [AR]})
        collector.stop()
      }
    })
    })
  }
}