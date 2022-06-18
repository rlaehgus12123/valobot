const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function reyna(int) {

        const unitskins = {
            C: {
             text: "가격: 250 | 충전량: 2\n파괴 가능한 천상의 눈을 장착합니다.활성화하면 눈을 짧게 앞으로 던집니다.눈을 본 적은 모두 시야가 제한됩니다.",
             emoji: "<:emoji_45:800073149743759360> "
            },
            Q: {
            text: "가격: 200 | 충전량: 2 (E랑 공유)\n영혼 수확: 레이나가 처치한 적은 3초 동안 유지되는 영혼 구슬을 남깁니다.포식: 레이나는 즉시 근처에 있는 영혼 구슬을 흡수하여 짧은 시간 동안 순식간에 체력을 회복합니다.이 스킬로 회복한 체력이 100을 넘어가면 초과분은 시간이 흐르면서 사라집니다.여제가 활성화되면 이 스킬이 자동으로 사용되며 구슬을 흡수하지 않습니다.",
            emoji: "<:emoji_46:868516446165164072> "
            },
            E: {
            text: "가격: X | 충전량: 2 (Q랑 공유)\n즉시 근처에 있는 영혼 구슬을 흡수하여 짧은 시간 동안 무형 상태가 됩니다.여제 활성화 시 추가로 투명 상태가 됩니다.",
            emoji: "<:emoji_46:800073200192716860> "
            },
            X: {
            text: "가격: 6 포인트 | 충전량: 1\n즉시 광란 상태가 되어 사격, 장착, 재장전 속도가 크게 감소합니다.적을 처치하면 지속시간이 초기화됩니다.",
            emoji: "<:emoji_48:800073249954332672> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Reyna/Reyna.png`, 'Reyna.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("레이나 (Reyna)")
    .setThumbnail('attachment://Reyna.png')
    .addField(`${unitC.emoji}**눈총 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**포식 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**무시 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**여제 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    reyna
}