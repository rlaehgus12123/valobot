const { MessageEmbed, Client, Interaction} = require("discord.js");
const Discord = require('discord.js')
const { PREFIX } = require('../config.json')
const attachment = new Discord.MessageAttachment(`../Image/Help_Guide.png`, 'Help_Guide.png')

async function help(int = require(Interaction)) {
var developd_bot = "https://rlaehgus12123.github.io/about/me"
    let helpEmbed = new MessageEmbed()
        .setTitle(`VALO 도움말`) // im watching you ^^ ????
        .setColor("#FF483D")
        .setDescription(`> VALO 개발자(승혁)의 다른 봇을 구경하고 싶으시다면 **[여기](${developd_bot})**를 들어오시면 됩니다`)
        .addField("/전적 <닉네임>", "발로란트의 전적을 확인합니다")
        .addField("/전적카드 <닉네임>", "발로란트의 전적을 이미지로 출력합니다")
        .addField("/초대링크", "VALO봇의 초대 링크를 뽑아드립니다")
        .addField("/순위표", "발로란트 TOP10을 보여드립니다")
        .addField("/맵", "발로란트 맵을 보여드립니다")
        .addField("/패치노트", "발로란트 패치노트를 보여드립니다")
        .addField("/요원", "발로란트 요원을 보여드립니다")
        .addField("/무기", "발로란트 무기를 보여드립니다")
        .setFooter("copyright © 2022. 욤 승혓#2645 Service, all rights reserved ")
        .setTimestamp();
    return int.reply({embeds: [helpEmbed]}).catch(console.error);
};

module.exports = {
    help,
}