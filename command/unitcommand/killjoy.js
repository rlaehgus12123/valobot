const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function killjoy(int) {

        const unitskins = {
            C: {
             text: "가격: 200 | 충전량: 2\n나노스웜 수류탄을 장착합니다.발사하면 수류탄을 투척합니다.수류탄은 지면에 닿으면 잠복 상태가 됩니다. 수류탄을 활성화하면 적에게 피해를 입히는 나노스웜을 발사합니다.",
             emoji: "<:emoji_17:800052749714456596> "
            },
            Q: {
            text: "가격: 200 | 충전량: 1\n잠복 알람봇을 장착합니다.발사하면 사거리 내에 들어온 적을 추적하는 봇을 배치합니다.대상에 도달하면 봇은 폭발하여 적을 취약 상태로 만들고 피해를 입힙니다.장착을 길게 누르면 배치된 봇을 회수합니다.",
            emoji: "<:emoji_18:800053077058387998> "
            },
            E: {
            text: "가격: X | 충전량: 1\n포탑을 장착합니다.발사하면 전방 180도 원뿔형 범위 안에 들어온 적을 공격하는 포탑을 배치합니다.장착을 길게 누르면 배치된 포탑을 회수합니다.",
            emoji: "<:emoji_19:800053360643538984> "
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 1\n봉쇄 장치를 장착합니다.발사하면 장치를 배치합니다. 대기시간이 지나면 범위 내 탐지된 모든 적을 구속합니다.봉쇄 장치는 적에 의해 파괴될 수 있습니다.",
            emoji: "<:emoji_20:800053558350708736> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Killjoy/KillJoy_.png`, 'KillJoy_.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("킬조이 (Killjoy)")
    .setThumbnail('attachment://KillJoy_.png')
    .addField(`${unitC.emoji}**나노스윔 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**알람 봇 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**포탑 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**붕쇄 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    killjoy
}