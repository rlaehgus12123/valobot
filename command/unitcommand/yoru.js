const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

module.exports = {
    name: "yoru",
    aliases: ["요루"],
    description: "국적 : :flag_jp: 일본\n역할: 타격대\n능력: 차원 이동",
    execute(message) {

        const unitskins = {
            C: {
             text: "가격: 100 | 충전량: 2\n메아리를 장착합니다. 메아리를 활성화 하연 발걸음을 흉내냅니다. 발사하면 메아리를 활성화 하고 전방으로 보냅니다. 보조 공격 시 메아리를 배치합니다. 비활성화된 메아리를 사용하면 전방으로 보냅니다.",
             emoji: "<:Fakeout:800227797883944980> "
            },
            Q: {
            text: "가격: 250 | 충전량: 2\n장착하면 현실에서 불안정한 차원의 조각을 떼어냅니다. 발사하면 차원의 조각을 던집니다. 조각은 섬광을 방출하여 섬광은 단단한 표면에 닿으면 꺼집니다.",
            emoji: "<:Blindside:800227818831216661> "
            },
            E: {
            text: "가격: X | 충전량: 1\n장착하면 균열 결속을 준비합니다. 발사하면 전방으로 결속을 날립니다. 보조 공격 시 결속을 배치합니다. 활성화 시 해당 결속의 위치로 순간 이동합니다. ",
            emoji: "<:Gatecrash:800227837989748756> "
            },
            X: {
            text: "가격: 6 포인트 | 충전량: 1\n차원 사이를 볼 수 있는 마스크를 장착합니다. 발사하면 요루의 차원을 표류합니다. 외부의 적에게 발각되거나 영향을 받지 않습니다.",
            emoji: "<:DimensionalDrift:800227853857587260> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Yoru/Yoru.png`, 'Yoru.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("요루 (Yoru)")
    .setThumbnail('attachment://Yoru.png')
    .addField(`${unitC.emoji}**기만 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**기습 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**관문 충돌 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**차원 표류 (X)**`, unitX.text)
    message.channel.send({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });

    }
}