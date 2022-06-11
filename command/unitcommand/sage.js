const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

module.exports = {
    name: "sage",
    aliases: ["세이지"],
    description: "국적 : :flag_cn: 중국\n역할: 감시자\n능력: 옥",
    execute(message) {

        const unitskins = {
            C: {
             text: "가격: 400 | 충전량: 1\n장벽 구슬을 장착합니다.발사하면 단단한 장벽을 설치합니다.보조 공격시 장벽이 회전합니다.",
             emoji: "<:emoji_35:800064775316570153> "
            },
            Q: {
            text: "가격: 200 | 충전량: 2\n둔화 구슬을 장착합니다.발사하면 땅에 닿은 후 폭발하여 일정 시간 동안 둔화 영역을 생성하는 구슬을 던집니다.둔화 영역에 있는 플레이어는 속도가 느려집니다.",
            emoji: "<:emoji_36:800064803586048050> "
            },
            E: {
            text: "쿨타임: 45초 | 충전량: 1\n회복 구슬을 장착합니다.피해를 입은 아군을 조준한 후 발사하면 해당 아군이 서서히 체력을 회복합니다.세이지가 피해를 입었을 때 보조 공격 시 자신의 체력을 서서히 회복합니다.",
            emoji: "<:emoji_33:800064592994500640> "
            },
            X: {
            text: "가격: 8 포인트 | 충전량: 1\n부활 스킬을 장착합니다.죽은 아군을 조준한 후 발사하면 해당 아군이 부활하기 시작합니다.짧은 정신 집중이 끝나면 아군이 최대 체력으로 되살아납니다.",
            emoji: "<:emoji_33:800064572605202473> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Sage/Sage.png`, 'Sage.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("세이지 (Sage)")
    .setThumbnail('attachment://Sage.png')
    .addField(`${unitC.emoji}**장벽 구슬 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**둔화 구슬 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**회복 구슬 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**부활 (X)**`, unitX.text)
    message.channel.send({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });

    }
}