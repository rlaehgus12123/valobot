const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "smg",
  aliases: ["기관단총", "SMG"],
  description: "연사력이 빠르고 좋은 기관단총 리스트를 보여드립니다",
  execute(message) {
    let embed = new MessageEmbed()
    .setColor("GREEN")
    .setTitle("기관단총(SMG) 목록")
    .addField("1. 스펙터", "빠른 연사력과 탄퍼짐이 없어 근접에서 쓰기 적합하다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("2. 스팅어", "연사력은 좋지만 근접 데미지가 스펙터의 비해 현저히 낮다 장거리 라이플 전에서 우수하다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    message.channel.send({embeds: [embed]}).then(emoji => {
      emoji.react("1️⃣")
      emoji.react("2️⃣")
      
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = emoji.createReactionCollector({ filter, time: 15000 });
      
      collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
           case "1️⃣":
        let smg1 = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("SMG : 스펙터 (Spectre)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "1,600원")
        .addField("탄창 수", "30/90")
        .addField("벽 관통", "보통")
        .addField("사격", "좌클릭: `자동사격` | 초당 `13.33발`\n우클릭: 스코프`1.5x` | 초당 `12발` | 탄 퍼짐 `약` ")
        .addField("0~20m", "머리: 78 데미지\n몸통: 26 데미지\n다리: 22 데미지")
        .addField("20~50m", "머리: 66 데미지\n몸통: 22 데미지\n다리: 18 데미지")
        message.channel.send({embeds: [smg1]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
           case "2️⃣":
        let smg1 = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("SMG : 스팅어 (Stinger)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "1,000원")
        .addField("탄창 수", "20/60")
        .addField("벽 관통", "낮음")
        .addField("사격", "좌클릭: `자동사격` | 초당 `18발`\n우클릭: 4점사 | 스코프`1.15x` | 초당 `8발` | 탄 퍼짐 `약` 감소")
        .addField("0~20m", "머리: 67 데미지\n몸통: 27 데미지\n다리: 22 데미지")
        .addField("20~50m", "머리: 62 데미지\n몸통: 25 데미지\n다리: 21 데미지")
        message.channel.send({embeds: [smg1]})
        collector.stop()
      }
      
      })
    })
  }
}