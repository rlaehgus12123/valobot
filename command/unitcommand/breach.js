const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

module.exports = {
    name: "breach",
    aliases: "브리치",
    description: "국적 : :flag_se: 스웨덴\n역할: 척후대",
    execute(message) {

    const unitskins = {
        C: {
         text: "가격: 200 | 충전량: 1\n벽을 통과하여 범위 내에 플레이어들은 피해와 느리게 하는 효과를 발생시킨다.",
         emoji: "<:Aftershock:799920667213824052> "
        },
        Q: {
        text: "가격: 250 | 충전량: 2\n벽을 통과하여 폭발을 일으켜 섬광을 본 플레이어들은 실명시킵니다.",
        emoji: "<:emoji_2:799961151571361822> "
        },
        E: {
        text: "가격: X | 충전량: 1\n지진파를 날려 범위 내에 있는 플레이어들을 멍 때리게 합니다.",
        emoji: "<:emoji_3:799961433810403358> "
        },
        X: {
        text: "가격: 7 포인트 | 충전량: 1\n지형을 통과하여 범위 내에 있는 적을 멍 때리게 하고 공중으로 띄웁니다.",
        emoji: "<:emoji_4:799961593177571409> "
        }
    }


    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Breach/Breach.png`, 'Breach.png')

     let embed = new MessageEmbed()
     .setColor("BLUE")
     .setTitle("브리치 (Breach)")
     .setThumbnail('attachment://Breach.png')
     .addField(`${unitC.emoji}**여진(C)**`, unitC.text)
     .addField(`${unitQ.emoji}**섬광 폭발 (Q)**`, unitQ.text)
     .addField(`${unitE.emoji}**균열 (E)**`, unitE.text)
     .addField(`${unitX.emoji}**지진 강타 (X)**`, unitX.text)
    message.channel.send({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
    }
}