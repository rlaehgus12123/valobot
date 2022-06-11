const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "premium",
  aliases: ["프리미엄"],
  description: "봇에 특별 명령어를 사용할실 수 있어요!",
  execute(message) {
    let embed = new MessageEmbed()
    .setColor("#4DFFD1")
    .setTitle("프리미엄")
    .setDescription("봇에게 일정의 돈을 지원하고 그의 대한 혜택을 받으실 수 있습니다!")
    .addField("다양한 게임(LOL,PUBG) 의 전적 기능", "게임의 전적기능을 **발로란트** 뿐만이 아닌 LOL,PUBG 등등 의 전적 기능을 이용하실 수 있습니다.")
    .addField("정해지지않음", "정해지지않음\n\n**아직 판매하고 있지않습니다.**")
    .setFooter("봇이 받은 모든 수익은 봇을 지원 하는데에만 쓰입니다.")
    message.channel.send({embeds: [embed]})
  }
}