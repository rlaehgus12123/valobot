const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "playterm",
  aliases: ["플레이용어", "플레이-용어"],
  description: "게임을 플레이 하며 알면 도움이 되는 용어들입니다.",
  execute(message) {
    let embed = new MessageEmbed()
    .setColor("0x2F3136")
    .setTitle("플레이 용어(playterm) 목록")
    .addField("에코 라운드(Echo rounde)", "해당 라운드의 돈을 최소한으로 아끼는것.")
    .addField("사이트", "스파이크를 설치할수 있는 특정 구역")
    .addField("헤븐", "사이트 내의 적과 교전할수있는 높은 곳")
    .addField("언더헤븐", "헤븐의 밑")
    .addField("램프", "사이트 진입 길 중의 경사가 진 모든 곳")
    message.channel.send({embeds: [embed]})
  }
}