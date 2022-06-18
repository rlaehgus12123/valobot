const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

async function cypher(int) {

        const unitskins = {
            C: {
             text: "가격: 200 | 충전량: 2\n함정에 걸린 적은 장치를 파괴하지 않으면 위치가 발각되며 멍 때리게 됩니다.\n해당 함정은 회수하여 재설치가 가능합니다.",
             emoji: "<:emoji_9:799964260558045205> "
            },
            Q: {
            text: "가격: 100 | 충전량: 2\n감옥을 생성하여 시야를 차단합니다.",
            emoji: "<:emoji_10:799964471400595466> "
            },
            E: {
            text: "가격: X | 충전량: 1\n발사하면 지정 위치에 스파이 캠을 설치하여 카메라 화면을 조작할 수 있습니다.\n카메라를 조작하는 동안 발사를 눌면 표식용 다트가 발사되는데 맞은 플레이어는 위치가 발각됩니다.\n해당 스파이 캠은 회수가 가능합니다.",
            emoji: "<:emoji_11:799964662258860053> "
            },
            X: {
            text: "가격: 6 포인트 | 충전량: 1\n적 시체에 조준하여 궁극기를 사용하면 생존한 모든 적의 위치가 발각된다.",
            emoji: "<:emoji_12:799964851564576768> "
            }
        }

        const unitC = unitskins.C
        const unitQ = unitskins.Q
        const unitE = unitskins.E
        const unitX = unitskins.X
        var attachment = new Attachment(`${__dirname}/image/agent-image/Cypher/Cypher.png`, 'Cypher.png')

         let embed = new MessageEmbed()
         .setColor("BLUE")
         .setTitle("사이퍼 (Cypher)")
         .setThumbnail('attachment://Cypher.png')
         .addField(`${unitC.emoji}**함정 (C)**`, unitC.text)
         .addField(`${unitQ.emoji}**사이퍼 감옥 (Q)**`, unitQ.text)
         .addField(`${unitE.emoji}**스파이캠 (E)**`, unitE.text)
         .addField(`${unitX.emoji}**신경 절도 (X)**`, unitX.text)
        int.reply({embeds: [embed], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
}

module.exports = {
    cypher
}