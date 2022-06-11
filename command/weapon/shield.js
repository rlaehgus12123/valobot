const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shield",
  aliases: ["방어", "쉴드템", "쉴드"],
  description: "총을 맞아도 데미지를 절감 시켜주는 방어템! 쉴드를 소개합니다",
  execute(message) {
    let embed = new MessageEmbed()
    .setColor("GREEN")
    .setTitle("쉴드(Shield) 목록")
    .addField("1. 중형 보호막", "나는 죽지않아! 50풀로 채워주는 쉴드템")
    .addField("2. 경형 보호막", "아주 조금만 보호해주지만 그래도 무시 못할 쉴드템!")
    message.channel.send({embeds: [embed]}).then(emoji => {
      emoji.react("1️⃣")
      emoji.react("2️⃣")
      
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = emoji.createReactionCollector({ filter, time: 15000 });
      
      collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
           case "1️⃣":
             let shield = new MessageEmbed()
             .setColor("BLUE")
             .setTitle("Shield : 중형 보호막 (Heavy Shield)")
             .addField("가격", "1,000원")
             .addField("흡수 량", "입는 피해의 66%")
             .addField("쉴드 량", "50(만땅)")
             message.channel.send({embeds: [shield]})
             collector.stop()
      }
      switch (reaction.emoji.name) {
           case "2️⃣":
             let shield = new MessageEmbed()
             .setColor("BLUE")
             .setTitle("Shield : 경형 보호막 (Light Shield)")
             .addField("가격", "400원")
             .addField("흡수 량", "입는 피해의 66%")
             .addField("쉴드 량", "25")
             message.channel.send({embeds: [shield]})
             collector.stop()
      }
      })
    })
  }
}