const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function skye(int) {

        const unitskins = {
            C: {
             text: "가격: 200 | 충전량: 1\n회복 장신구를 장착합니다. 발사를 길게 누르면 정신 집중하여 범위 내에서 모습이 보이는 아군들을 회복시킵니다. 회복 에너지가 바닥날 때까지 재사용할 수 있습니다. 스카이 자신이 회복할 수는 없습니다.",
             emoji: "<:Regrowth:800229681424105482> "
            },
            Q: {
            text: "가격: 250 | 충전량: 1\n태즈매니아 호랑이 장신구를 장착합니다. 발사하면 호랑이를 보내 조종합니다. 조종 중에 발사하면 전방으로 뛰어올라 폭발하며 뇌진탕을 일으키고 직접 타격한 적에게 피해를 입힙니다.",
            emoji: "<:Trailblazer:800229707945345024> "
            },
            E: {
            text: "가격: 250 | 충전량: 1\n매 장신구를 장착합니다. 발사하면 매를 전방으로 날립니다. 발사를 길게 누르면 조준점 방향으로 매를 유도합니다. 비행 중에 다시 사용하면 매가 섬광으로 변합니다.",
            emoji: "<:Guidinglight:800229726945673257> "
            },
            X: {
            text: "가격: 6 포인트 | 충전량: 1\n추적자 장신구를 장착합니다. 발사하면 추적자 셋을 보내 가장 가까운 적 셋을 쫓습니다. 추적자가 표적에 다다르면 해당 적의 시야를 제한합니다.",
            emoji: "<:Seekers:800229746000658453> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Skye/Skye.png`, 'Skey.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("스카이 (Skye)")
    .setThumbnail('attachment://Skey.png')
    .addField(`${unitC.emoji}**재생 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**정찰자 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**유도등 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**추적자 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    skye
}