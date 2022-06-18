const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function kayo(int) {

        const unitskins = {
            C: {
             text: "가격: 200 | 충전량: 1\n폭발하는 파편탄을 장착합니다. 발사하면 투척합니다. 파편탄은 바닥에 붙어 여러 차례 폭발하며, 폭발할 때마다 중심부에 있는 적에게 치명적인 피해를 입힙니다.",
             emoji: "<:FRAGMENT:870579797259071528> "
            },
            Q: {
            text: "가격: 250 | 충전량: 2\n섬광탄을 장착합니다. 발사하면 투척합니다. 섬광탄은 잠시 후 폭발하며 모습이 보이는 대상을 실명시킵니다.",
            emoji: "<:FLASHDRIVE:870579811444215828> "
            },
            E: {
            text: "가격: X | 충전량: 1\n제압용 검을 장착합니다. 발사하면 투척합니다. 검은 처음 적중한 표면에 꽂혀 잠시 후 폭발하며, 범위 내에 있는 대상을 모두 제압합니다.",
            emoji: "<:ZEROPOINT:870579785200455690> "
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 1\n	케이/오가 즉시 양극화된 레디어나이트 에너지를 과충전하여 넓은 범위에 파동을 방출합니다. 이 파동에 맞은 적은 짧은 시간 동안 제압됩니다. 케이/오는 과충전된 동안 전투 자극제 효과를 받으며, 쓰러져도 다시 안정화할 수 있습니다.",
            emoji: "<:NULLCMD:870579769878671400> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Kayo/Kayo.png`, 'Kayo.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("케이오 (Kayo)")
    .setThumbnail('attachment://Kayo.png')
    .addField(`${unitC.emoji}**파편 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**플래시 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**제로 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**무력화 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });

}

module.exports = {
    kayo
}