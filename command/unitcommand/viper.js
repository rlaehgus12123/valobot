const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function viper(int) {

        const unitskins = {
            C: {
             text: "가격: 200 | 충전량: 2\n화학 물질 발사기를 장착합니다.발사하면 바닥에 떨어졌을 때 폭발하는 통을 날립니다.통은 폭발하며 적에게 약화를 적용하고 피해를 입히는 화학 물질 지역을 일정 시간동안 생성합니다.",
             emoji: "<:emoji_41:800070452956495874> "
            },
            Q: {
            text: "가격: 200 | 충전량: 1\n가스 방사기를 장착합니다.스킬을 다시 사용하면 연료를 소모해 독성 가스 구름을 만듭니다.이 스킬은 여러 번 재사용이 가능하여 주운 후 다시 배치할 수 있습니다.",
            emoji: "<:emoji_42:800070486632431686> "
            },
            E: {
            text: "가격: X | 충전량: 1\n지형지물을 관통하는 가스 방사기 발사기를 장착합니다.발사하면 여러 개의 가스 방사기를 일렬로 길게 배치합니다.스킬을 다시 사용하면 연료를 소모해 높은 독성 연기 장벽을 생성합니다.이 스킬은 여러 번 재사용이 가능합니다.",
            emoji: "<:emoji_43:800070511907831838> "
            },
            X: {
            text: "가격: 7 포인트 | 충전량: 1\n화학 물질 분사기를 장착합니다.발사하면 사방으로 화학 물질 연기를 분사해 안에 있는 플레이어의 가시거리와 최대 체력을 감소시키는 거대 연기를 생성합니다.스킬키를 길게 누르면 연기가 일찍 사라집니다.",
            emoji: "<:emoji_44:800070548041236530> "
            }
        }

    const unitC = unitskins.C
    const unitQ = unitskins.Q
    const unitE = unitskins.E
    const unitX = unitskins.X
    var attachment = new Attachment(`${__dirname}/image/agent-image/Viper/Viper.png`, 'Viper.png')

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("바이퍼 (Viper)")
    .setThumbnail('attachment://Viper.png')
    .addField(`${unitC.emoji}**뱀 이빨 (C)**`, unitC.text)
    .addField(`${unitQ.emoji}**독성 연기 (Q)**`, unitQ.text)
    .addField(`${unitE.emoji}**독성 장막 (E)**`, unitE.text)
    .addField(`${unitX.emoji}**독사의 구덩이 (X)**`, unitX.text)
    int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    viper
}