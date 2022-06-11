const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

module.exports = {
    name: "omen",
    aliases: ["오멘"],
    description: "국적 : :question: 불명\n역할: 전략가",
    execute(message) {

        const unitskins = {
            C: {
             text: "가격: 150 | 충전량: 2\n그림자 걸음 스킬을 장착하고 사거리를 표시합니다.발사하면 짧은 정신 집중 후 표시한 위치로 순간 이동합니다.적들은 출발 지점에서 들리는 소리만 들을 수 있습니다.",
             emoji: "<:emoji_21:800056112254025758> "
            },
            Q: {
            text: "가격: 300 | 충전량: 1\n즉각 앞으로 그림자 투사체를 발사해 투사체에 닿은 모든 플레이어의 가시거리를 잠시 감소시킵니다.이 투사체는 벽을 통과할 수 있습니다.",
            emoji: "<:emoji_22:800056150652485642> "
            },
            E: {
            text: "가격: X | 충전량: 2\n그림자 구슬을 장착하고 사거리를 표시합니다.발사하면 표시한 위치에 그림자 구슬을 던져 한동안 시야를 차단하는 그림자 영역을 생성합니다.조준 시 보조 공격을 길게 누르면 표시 위치를 더 멀리 옮깁니다.조준 시 스킬 키를 길게 누르면 표시 위치를 더 가까이 옮깁니다.",
            emoji: "<:emoji_23:800056189090005032> "
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 1\n전술 지도를 장착합니다. 발사하면 선택한 위치로 순간 이동을 시작합니다.순간 이동 중에는 오멘이 그림자로 나타나며 이때 적이 그림자를 파괴하면 순간 이동이 취소됩니다.",
            emoji: "<:emoji_23:800056223176065035> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Omen/Omen.png`, 'Omen.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("오멘 (Omen)")
    .setThumbnail('attachment://Omen.png')
    .addField(`${unitC.emoji}**어둠의 발자국 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**피해망상 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**어둠의 장막 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**그림자 습격 (X)**`, unitX.text)
    message.channel.send({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });

    }
}