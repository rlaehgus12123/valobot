const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shotgun",
  aliases: ["샷건"],
  description: "근접 딜이 정말 엄청나다 못해 추월하는 딜을 선 보인다 제대로 적중시 모든 영웅을 단 2대 만에 끝내버린다",
  execute(message) {
    let embed = new MessageEmbed()
    .setColor("GREEN")
    .setTitle("샷건(Shotgun) 목록")
    .addField("1. 버키", "샷건 중에 가장 강력한 샷건이다 하지만 탄창이 적고 연사력이 부족하다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("2. 저지", "샷건 중에 자동사격이 되는 유일한 샷건이다 탄창수도 버키에 비해 많다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    message.channel.send({embeds: [embed]}).then(emoji => {
      emoji.react("1️⃣")
      emoji.react("2️⃣")
      
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = emoji.createReactionCollector({ filter, time: 15000 });
      
      collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
           case "1️⃣":
         let shotgun = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("ShotGun : 버키 (Bucky)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "900원")
        .addField("탄창 수", "5/10")
        .addField("벽 관통", "높음")
        .addField("사격", "좌클릭: `반 자동 사격` | 초당 `1.1발`\n우클릭: `공중 폭발`")
        .addField("0~8m", "머리: 46 데미지\n몸통: 23 데미지\n다리: 19 데미지")
        .addField("3~7m", "머리: 38 데미지\n몸통: 19 데미지\n다리: 16 데미지")
        .addField("7~11m", "머리: 28 데미지\n몸통: 14 데미지\n다리: 11 데미지")
        message.channel.send({embeds: [shotgun]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
         case "2️⃣":
         let shotgun = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("ShotGun : 저지 (Judge)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "1,500원")
        .addField("탄창 수", "7/21")
        .addField("벽 관통", "보통")
        .addField("사격", "좌클릭: `자동사격` | 초당 `3.5발`")
        .addField("0~8m", "머리: 34 데미지\n몸통: 17 데미지\n다리: 14 데미지")
        .addField("8~12m", "머리: 26 데미지\n몸통: 13 데미지\n다리: 11 데미지")
        .addField("12~50m", "머리: 20 데미지\n몸통: 10 데미지\n다리: 8 데미지")
        message.channel.send({embeds: [shotgun]})
        collector.stop()
      }
      })
    })
  }
}