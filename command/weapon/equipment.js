const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "equipment",
  aliases: ["권총"],
  description: "권총이라구 약하다고요? 노노\n초~중후반 까지의 적절한 권총류들을 소개해드립니다.",
  execute(message) {
    let embed = new MessageEmbed()
    .setColor("GREEN")
    .setTitle("권총(Equipment) 목록")
    .addField("1. 클래식", "게임시작과 동시에 기본 적으로 주워지는 총이고 데미지와 탄퍼짐이 준수하다 하지만 초보자는 다루기 어렵다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("2. 고스트", "유저들이 초반에 가장 많이 쓰는 권총중 하나이며 데미지 와 탄퍼짐 도 준수해 중~후반 까지 쓰는 경우도 있다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("3. 쇼티", "초반 사용은 드물다 중~후반 때 많은 유저들이 소총 및 저격총 과 조합하여 사용 하는 경우가 있다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("4. 셰리프", "정말 딜이 소총 급이다 아니 어쩌면 소총보다고 뛰어날수있다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    .addField("5. 프렌지", "초~중후반 의 모두 적합한 벨런스 총기이다\n`자세히 볼려면 이모티콘을 눌러주세요!`")
    message.channel.send({embeds: [embed]}).then(emoji => {
      emoji.react("1️⃣")
      emoji.react("2️⃣")
      emoji.react("3️⃣")
      emoji.react("4️⃣")
      emoji.react("5️⃣")
      
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = emoji.createReactionCollector({ filter, time: 15000 });
      
      collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
           case "1️⃣":
        let equipment = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Equipment : 클래식 (Classic)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "무료(기본)")
        .addField("탄창 수", "12/36")
        .addField("벽 관통", "낮음")
        .addField("사격", "좌클릭: `반 자동 사격` | 초당 `6.75발`\n우클릭: 3점사 | 초당 `2.22발` | 탄 퍼짐 `증가` ")
        .addField("0~30m", "머리: 78 데미지\n몸통: 26 데미지\n다리: 22 데미지")
        .addField("30~50m", "머리: 66 데미지\n몸통: 22 데미지\n다리: 18 데미지")
        message.channel.send({embeds: [equipment]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
        case "2️⃣":
        let equipment = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Equipment : 고스트 (Ghost)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "500원")
        .addField("탄창 수", "15/45")
        .addField("벽 관통", "보통")
        .addField("사격", "좌클릭: `반 자동 사격` | 초당 `6.75발`")
        .addField("0~30m", "머리: 105 데미지\n몸통: 30 데미지\n다리: 25 데미지")
        .addField("30~50m", "머리: 87 데미지\n몸통: 25 데미지\n다리: 21 데미지")
        message.channel.send({embeds: [equipment]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
        case "3️⃣":
        let equipment = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Equipment : 쇼티 (Shorty)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "200원")
        .addField("탄창 수", "2/10")
        .addField("벽 관통", "낮음")
        .addField("사격", "좌클릭: `반 자동 사격` | 초당 `3.3발`")
        .addField("0~9m", "머리: 36 데미지\n몸통: 12 데미지\n다리: 10 데미지")
        .addField("9~15m", "머리: 24 데미지\n몸통: 8 데미지\n다리: 6 데미지")
        .addField("15~50m", "머리: 9 데미지\n몸통: 3 데미지\n다리: 2 데미지")
        message.channel.send({embeds: [equipment]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
        case "4️⃣":
        let equipment = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Equipment : 셰리프 (Sheriff)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "800원")
        .addField("탄창 수", "6/24")
        .addField("벽 관통", "높음")
        .addField("사격", "좌클릭: `반 자동 사격` | 초당 `4발`")
        .addField("0~30m", "머리: 159 데미지\n몸통: 55 데미지\n다리: 46 데미지")
        .addField("0~8m", "머리: 145 데미지\n몸통: 50 데미지\n다리: 42 데미지")
        message.channel.send({embeds: [equipment]})
        collector.stop()
      }
      switch (reaction.emoji.name) {
        case "5️⃣":
        let equipment = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Equipment : 프렌지 (Frenzy)")
       //준비중 .attachFiles(new Discord.MessageAttachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')).setThumbnail('attachment://Breach.png')
        .addField("가격", "400원")
        .addField("탄창 수", "13/39")
        .addField("벽 관통", "낮음")
        .addField("사격", "좌클릭: `자동사격` | 초당 `10발`")
        .addField("0~20m", "머리: 78 데미지\n몸통: 26 데미지\n다리: 22 데미지")
        .addField("20~50m", "머리: 63 데미지\n몸통: 21 데미지\n다리: 17 데미지")
        message.channel.send({embeds: [equipment]})
        collector.stop()
      }
      
      })
    })
  }
}