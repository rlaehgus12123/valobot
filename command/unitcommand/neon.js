const { MessageEmbed } = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function neon(int) {
        
        const unitskins = {
            C: {
             text: "가격: 300 | 충전량: 1\n전방의 지면에 에너지로 이루어진 선 두 개를 발사합니다. 선은 짧은 거리만큼 늘어나고 표면에 적중하면 멈춥니다. 선은 솟아나 정전기 벽이 되어 시야를 차단하고 지나가는 적에게 피해를 입힙니다.",
             emoji: "<:FastLane:932673310871916564> "
            },
            Q: {
            text: "가격: 200 | 충전량: 2\n한 번 튕기는 에너지 볼트를 즉시 투척합니다. 볼트는 표면에 맞을 때마다 지면에 전류를 흘려보내 뇌진탕을 일으킵니다.",
            emoji: "<:RelayBolt:932673278932303952> "
            },
            E: {
            text: "가격: X | 충전량: 2킬 마다 슬라이딩 충전\n네온의 힘을 즉시 집중해 속도를 높입니다. 충전되면 보조 공격 시 전기 슬라이드를 발동합니다. 슬라이드 충전량은 2킬마다 초기화됩니다.",
            emoji: "<:HighGear:932673297408200834>"
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 1\n짧은 시간 동안 네온의 모든 힘과 속도를 해방합니다. 발사하면 힘을 집중해 이동 정확도가 높은 치명적인 번개 광선을 만들어냅니다. 지속시간은 킬할 때마다 초기화됩니다.",
            emoji: "<:Overdrive:932673336759165029> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Neon/Neon.png`, 'Neon.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("네온 (Neon)")
    .setThumbnail('attachment://Neon.png')
    .addField(`${unitC.emoji}**추월 차선 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**릴레이 볼트 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**고속 기어 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**오버드라이브 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    neon
}