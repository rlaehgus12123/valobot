const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function sova(int) {

        const unitskins = {
            C: {
             text: "가격: 400 | 충전량: 1\n올빼미 드론을 장착합니다.발사하면 드론을 날려 조종합니다.드론을 조종하는 동안 발사를 누르면 표식용 다트가 발사됩니다.다트에 맞은 플레이어는 위치가 드러납니다.",
             emoji: "<:emoji_37:800067591585529947> "
            },
            Q: {
            text: "가격: 150 | 충전량: 2\n충격 화살을 발사하는 활을 장착합니다.발사하면 충돌 시 폭발하여 주변 플레이어에게 피해를 입히는 화살을 전방으로 날립니다.발사를 길게 누르면 화살의 사거리가 늘어납니다.보조 공격 시 화살이 최대 두 번 더 튕깁니다.",
            emoji: "<:emoji_38:800067694699085824> "
            },
            E: {
            text: "가격: X | 충전량: 1\n정찰 화살을 발사하는 활을 장착합니다.발사하면 정찰 화살을 전방으로 날려 화살이 꽂힌 곳을 기준으로 모습이 드러난 주변 적의 위치를 표시합니다.적이 이 화살을 파괴할 수 있습니다.발사를 길게 누르면 화살의 사거리가 늘어납니다.보조 공격 시 화살이 최대 두 번 더 튕깁니다.",
            emoji: "<:emoji_39:800067723778326568> "
            },
            X: {
            text: "가격: 8 포인트 | 충전량: 1\n벽을 관통하는 에너지 3개를 장거리로 발사하는 활을 장착합니다.발사하면 전방에 일직선상으로 에너지를 날려 닿은 적에게 피해를 입히고 위치를 드러냅니다.스킬 지속시간이 활성화된 상태에서 최대 두 번 더 다시 사용할 수 있습니다.",
            emoji: "<:emoji_40:800067748134387722> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Sova/Sova.png`, 'Sova.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("소바 (Sova)")
    .setThumbnail('attachment://Sova.png')
    .addField(`${unitC.emoji}**올빼미 드론 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**충격 화살 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**장찰용 화살 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**사냥꾼의 분노 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    sova
}