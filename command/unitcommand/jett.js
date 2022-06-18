const { MessageEmbed } = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function jett(int) {

        const unitskins = {
            C: {
             text: "가격: 200 | 충전량: 2\n시야를 가리는 투사체를 던집니다.",
             emoji: "<:emoji_13:799965319539589160> "
            },
            Q: {
            text: "가격: 150 | 충전량: 2\n현재 자리에서 높이 날아오릅니다.",
            emoji: "<:emoji_14:799965540793319434> "
            },
            E: {
            text: "가격: X | 충전량: 1\n이동하는 방향으로 빠르게 이동합니다.",
            emoji: "<:emoji_15:799965871740420096> "
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 1\n5개의 단검을 주며 적 처치시 재충전이 됩니다. 하지만 우클릭 처치시 재충전 되지 않습니다.",
            emoji: "<:emoji_16:799965982449860649> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Jett/Jett.png`, 'Jett.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("제트 (Jett)")
    .setThumbnail('attachment://Jett.png')
    .addField(`${unitC.emoji}**연막 폭발 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**상승 기류 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**순풍 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**칼날 폭풍 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });

}

module.exports = {
    jett
}