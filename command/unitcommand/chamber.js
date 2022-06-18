const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function chamber(int) {

        const unitskins = {
            C: {
             text: "가격: 150 | 충전량: 2\n적을 스캔하는 함정을 배치합니다. 시야에 보이는 적이 사거리 안에 들어오면 함정이 카운트다운 후 주변 지형을 불안하게 만들고 일정 시간 유지되는 둔화 영역을 생성하여 영역에 있는 플레이어의 속도를 늦춥니다.",
             emoji: "<:Trademark:913068512438779904>"
            },
            Q: {
            text: "가격: 100(1발당) | 충전량: 8\n활성화하면 헤비 피스톨을 장착합니다. 장착한 피스톨로 보조 공격하면 조준 사격합니다.",
            emoji: "<:Headhunter:913068463977791489>"
            },
            E: {
            text: "가격: X | 충전량: 1\n순간이동 앵커를 두 개 설치합니다. 지면에서 앵커 범위 내에 있을 때 다시 활성화하면 다른 앵커로 빠르게 순간 이동합니다. 앵커는 회수하여 재배치할 수 있습니다.",
            emoji: "<:Rendezvous:913068482168504382>"
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 5\n활성화하면 어떤 직격탄으로든 적을 처치할 수 있는 강력한 커스텀 저격총을 소환합니다. 적을 처치하면 일정 시간 유지되는 둔화 영역을 생성하여 영역에 있는 플레이어의 속도를 늦춥니다.",
            emoji: "<:TourdeForce:913068497775501322>"
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Chamber/Chamber.png`, 'Chamber.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("체임버 (Chamber)")
    .setThumbnail('attachment://Chamber.png')
    .addField(`${unitC.emoji}**트레이드마크 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**헤드헌터 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**랑데부 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**역작 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });

}

module.exports = {
    chamber
}