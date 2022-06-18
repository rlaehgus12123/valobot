const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function brimstone(int) {

        const unitskins = {
            C: {
             text: "가격: 100 | 충전량: 2\n신호기가 떨어진 곳에 플레이어에게 속사 효과를 부여하는 영역을 생성합니다.",
             emoji: "<:emoji_5:799963040371048469> "
            },
            Q: {
            text: "가격: 250 | 충전량: 1\n폭발하는 소이탄을 날려 적에게 피해를 입히는 화염 영억을 생성합니다.",
            emoji: "<:emoji_7:799963424217628672> "
            },
            E: {
            text: "가격: 100 | 충전량: 3\n지도에 위치를 정한 후 선택된 지역에는 연막을 터트려 시야를 차단합니다",
            emoji: "<:emoji_6:799963246265499649> "
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 1\n지도에 위치를 정한 후 해당 영역에 있는 플레이어에게 지속 피해를 입힙니다.",
            emoji: "<:emoji_8:799963802887651328> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Brimstone/Brimstone.png`, 'Breach.png')

     let embed = new MessageEmbed()
     .setColor("BLUE")
     .setTitle("브림스톰 (Brimstone)")
     .setThumbnail('attachment://Breach.png')
     .addField(`${unitC.emoji}**자극제 신호기 (C)**`, unitC.text)
     .addField(`${unitQ.emoji}**소이탄 (Q)**`, unitQ.text)
     .addField(`${unitE.emoji}**공중 연막 (E)**`, unitE.text)
     .addField(`${unitX.emoji}**궤도 일격 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    brimstone
}