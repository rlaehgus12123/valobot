const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

module.exports = {
    name: "phoenix",
    aliases: ["피닉스"],
    description: "국적 : :flag_gb: 영국\n역할: 타격대\n능력: 불",
    execute(message) {

        const unitskins = {
            C: {
             text: "가격: 200 | 충전량: 1\n화염 장벽을 장착합니다.발사하면 앞으로 이동하는 여러 개의 화염을 일렬로 생성하여 시야를 차단하고 통과하는 적 플레이어에게 피해를 입히는 화염 장벽을 생성합니다.발사를 길게 누르면 조준점 방향으로 장벽 궤적을 바꿉니다.자신이 발사한 화염 장벽에 닿으면 HP가 회복됩니다.",
             emoji: "<:emoji_25:800058194247286804> "
            },
            Q: {
            text: "가격: 250 | 충전량: 2\n던지면 휘어져 날아간 후 곧 폭발하는 섬광 구슬을 장착합니다.발사하면 섬광 구슬이 왼쪽으로 휘어지며 폭발합니다.이때 구슬을 바라보는 플레이어는 전부 실명합니다.보조 공격 시 섬광 구슬이 오른쪽으로 휘어집니다.",
            emoji: "<:emoji_27:800058497983053875> "
            },
            E: {
            text: "가격: X | 충전량: 1\n화염구를 장착합니다.발사하면 일정 시간이 지나거나 땅에 닿은 후 폭발하는 화염구를 던집니다.폭발하는 지점에는 일정 시간 유지되는 화염 구역이 생성되어 적에게 피해를 입힙니다.자신이 던진 화염구에 닿으면 HP가 회복됩니다.",
            emoji: "<:emoji_26:800058415824502784> "
            },
            X: {
            text: "가격: 6 포인트 | 충전량: 1\n즉시 피닉스의 위치에 표식을 놓습니다.스킬 사용 도중 죽거나 지속시간이 끝나면 해당 위치에서 최대 체력으로 부활합니다.",
            emoji: "<:emoji_28:800058827579850752> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Phoenix/Phoenix.png`, 'Phoenix.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("피닉스 (Phoenix)")
    .setThumbnail('attachment://Phoenix.png')
    .addField(`${unitC.emoji}**불길 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**커브 볼 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**뜨거운 손 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**역습 (X)**`, unitX.text)
    message.channel.send({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });

    }
}