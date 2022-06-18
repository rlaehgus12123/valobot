const { MessageEmbed } = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function fade(int) {

        const unitskins = {
            C: {
             text: "가격: 250 | 충전량: 2\n추적귀를 장착합니다. 발사하면 직선으로 이동하는 추적귀를 내보냅니다. 추적귀는 전방 원뿔 시야 범위에 들어온 적이나 흔적에 고정되어 추격하며, 닿으면 적의 시야를 제한합니다. 발사 버튼을 길게 누르면 추적귀를 조준점 방향으로 움직일 수 있습니다.",
             emoji: "<:Prowler:983937708999213117>"
            },
            Q: {
            text: "가격: 200 | 충전량: 1\n악몽의 먹물 구슬을 장착합니다. 발사하면 일정 시간이 지난 후 땅에 떨어지는 구슬을 던집니다. 구슬이 땅에 닿으면 먹물이 폭발해 적이 일반적인 방법으로는 빠져나갈 수 없는 구역을 생성합니다. 스킬을 다시 사용하면 구슬을 일찍 떨어뜨립니다.",
            emoji: "<:Seize:983937720806178836>"
            },
            E: {
            text: "가격: X | 충전량: 1\n악몽의 실체를 장착합니다. 발사하면 일정 시간이 지난 후 땅에 떨어지는 구슬을 던집니다. 구슬이 땅에 닿으면 시야에 들어온 적의 위치를 드러내는 악몽의 실체로 변합니다. 적은 악몽의 실체를 파괴할 수 있습니다. 스킬을 다시 사용하면 구슬을 일찍 떨어뜨립니다.",
            emoji: "<:Haunt:983937657648316456>"
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 1\n공포의 힘을 장착합니다. 발사하면 벽을 통과하는 악몽의 에너지 파동을 보냅니다. 에너지가 적에게 닿으면 흔적을 남기며 청력을 약화시키고 부패 효과를 적용합니다.",
            emoji: "<:Nightfall:983937688958820362>"
            }
        }

        const unitC = unitskins.C
        const unitQ = unitskins.Q
        const unitE = unitskins.E
        const unitX = unitskins.X
        var attachment = new Attachment(`${__dirname}/image/agent-image/Fade/Fade.png`, 'Fade.png')

        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("페이드 (Fade)")
        .setThumbnail('attachment://Fade.png')
        .addField(`${unitC.emoji}**추적귀 (C)**`, unitC.text)
        .addField(`${unitQ.emoji}**포박 (Q)**`, unitQ.text)
        .addField(`${unitE.emoji}**귀체 (E)**`, unitE.text)
        .addField(`${unitX.emoji}**황혼 (X)**`, unitX.text)
        int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    fade
}