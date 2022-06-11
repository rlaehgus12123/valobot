const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

module.exports = {
    name: "astra",
    aliases: ["아스트라"],
    description: "국적 : :flag_gh: 가나\n역할: 전략가\n능력: 항성",
    execute(message) {

        const unitskins = {
            C: {
             text: "가격: X | 충전량: 1\n천상계 형상에서 별을 설치합니다. 활성화 시 별 하나를 중력의 샘으로 변형합니다. 중력의 샘은 범위 내 플레이어들을 끌어당기다가 폭발하며, 폭발에 닿은 플레이어들은 취약상태가 됩니다.",
             emoji: "<:GravityWell:868517299877982318> "
            },
            Q: {
            text: "가격: X | 충전량: 1\n천상계 형상에서 별을 설치합니다. 활성화 시 별 하나를 폭발해 신성 파동을 만들어 냅니다. 신성 파동은 짧은 충전 시간 이후 범위 내 모든 플레이어들에게 뇌진탕을 일으킵니다.",
            emoji: "<:NovaPulse:868517857766567977> "
            },
            E: {
            text: "가격: X | 충전량: 1\n천상계 형상에서 별을 설치합니다. 활성화 시 하나를 성운으로 변형합니다. F키를 누르면 별이 소멸하여, 잠시 후 다른 곳에 설치할 수 있게 됩니다. 별이 소멸하면 그 자리에 잠시 가짜 성운이 생성됩니다. ",
            emoji: "<:Nebula_Dissipate:868517312695795712>"
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 1\n활성화 시 주 공격으로 별을 설치 할 수 있는 천상계 형상으로 변신합니다. 천상계 형상에서 보조 공격을 눌러 조준하고, 주 공격으로 두 지점을 선택합니다. 우주장벽은 선택한 두 지점을 이으며 탄환을 막고 소리를 흡수합니다.",
            emoji: "<:CosmicDivide:868517285738971177> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Astra/Astra.png`, 'Astra.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("아스트라 (Astra)")
    .setThumbnail('attachment://Astra.png')
    .addField(`${unitC.emoji}**중력의 샘 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**신성 파동 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**성운 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**우주 장벽 (X)**`, unitX.text)
    message.channel.send({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });

    }
}