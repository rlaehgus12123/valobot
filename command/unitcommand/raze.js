const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function raze(int) {

        const unitskins = {
            C: {
             text: "가격: 400 | 충전량: 1\n폭발 로봇을 장착합니다.발사하면 폭발 로봇이 지면에서 일직선으로 이동하며 벽을 만나면 튕겨 나옵니다.폭발 로봇의 정면 원뿔형 시야 안에 적이 포착되면 해당 적에게 돌진하며 폭발해 치명적인 피해를 입힙니다.",
             emoji: "<:emoji_29:800062227599589387> "
            },
            Q: {
            text: "가격: 200 | 충전량: 2\n표면에 부착되는 폭발 팩을 던집니다.부착 후 다시 사용하면 팩이 폭발하며 적중한 대상에게 피해를 입히고 밀어냅니다.",
            emoji: "<:emoji_30:800062313599729674> "
            },
            E: {
            text: "가격: X | 충전량: 1\n집속탄을 장착합니다.발사하면 집속탄을 던집니다.집속탄은 피해를 입히고 여러 개의 자탄을 퍼뜨립니다.자탄은 각각의 범위 내에 있는 모든 대상에게 피해를 입힙니다.",
            emoji: "<:emoji_30:800062346349248528> "
            },
            X: {
            text: "가격: 8 포인트 | 충전량: 1\n로켓 발사기를 장착합니다.발사하면 충돌 시 대량의 범위 피해를 입히는 로켓을 발사합니다.",
            emoji: "<:emoji_31:800062377327722546> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Raze/Raze.png`, 'Raze.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("레이즈 (Raze)")
    .setThumbnail('attachment://Raze.png')
    .addField(`${unitC.emoji}**폭발 로봇 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**폭발 팩 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**페인트 탄 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**대미 장식 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    raze
}