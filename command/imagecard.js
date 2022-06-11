const { MessageEmbed } = require('discord.js');
const axios = require("axios");
const cheerio = require("cheerio");
const Discord = require('discord.js')
const { PREFIX } = require('../config.json')
const { MessageAttachment: Attachment } = require('discord.js')
const data = require('./module/module.js')

module.exports = {
  name: "imagecard",
  aliases: ["전적카드", "랭크카드"],
  description: "발로란트의 전적을 이미지로 반환합니다",
  async execute(message) { 

    const regex = new RegExp('"[^"]+"', 'g');
    var arguments = [];
    var json = message.content
    json.match(regex).forEach(element => {
        if (!element) return;
        return arguments.push(element.replace(/"/g, ''));
    })

    if(arguments.length >= 2) {
      let embed = new MessageEmbed()
      .setTitle(":x:  ERROR :x: ")
      .setColor("RED")
      .setDescription(`> "닉네임#태그" \n위의 양식에 따라 입력해주세요!`)
      return message.reply({embeds: [embed]}).catch(console.error);
    } else if(arguments[0] === undefined) {
      let embed = new MessageEmbed()
      .setTitle(":x:  ERROR :x: ")
      .setColor("RED")
      .setDescription("닉네임이나 태그가 입력되지 않았습니다!")
      return message.reply({embeds: [embed]}).catch(console.error);
    } else if(arguments[0].includes("#") === false) {
      let embed = new MessageEmbed()
      .setTitle(":x:  ERROR :x: ")
      .setColor("RED")
      .setDescription("닉네임이나 태그가 입력되지 않았습니다!")
      return message.reply({embeds: [embed]}).catch(console.error);
    }

    let name_tag = await arguments[0].split("#")

        let embed = new MessageEmbed()
	.setColor("0x2F3136")
	.setTitle("🔎**" + arguments[0] + "**님의 전적을 불러오는중...")
	.setDescription("잠시 후 플레이어의 전적이 나옵니다!")
        const search_embed = await message.channel.send({embeds: [embed]})

    let record_data = await data.data.rank(name_tag[0], name_tag[1])

        if(record_data === 451 || record_data === 404) {
          let embed = new MessageEmbed()
          .setTitle(":x:  ERROR :x: ")
          .setColor("RED")
          .setDescription("이런.. 플레이어를 찾는데 실패했어요...\n\n**왜???**\n아마 잘못된 닉네임 이거나 검색한 플레이어가 비공개 처리 된걸거에요!\n\n[tracker.gg](https://tracker.gg/valorant) 해당 사이트에 들어가서 로그인 해주세요!")
          return message.reply({embeds: [embed]}).catch(console.error);
        }

        const { createCanvas, loadImage } = require('canvas');
        const canvas = createCanvas(736,436);
        const ctx = canvas.getContext('2d')

        const bg = await loadImage(`${__dirname}/image/profile/bg.png`);
        const l_image = await loadImage(record_data.record.image)
        
        ctx.strokeStyle = '#0099ff';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        //텍스트
        ctx.drawImage(bg,0,0,736,436)
        ctx.fillStyle = "#DDDDFF"
        ctx.font = 'bold 30px Sans'
        ctx.fillText(`${record_data.user_info.nickname}`,40,50)
        ctx.font = 'bold 22px Sans'
        ctx.fillText(`${record_data.record.lank}`,75,121)
          // 전적 표시
        ctx.font = 'bold 25px Sans'
        //첫 번째 줄
        ctx.fillText(`승률`,235,120)
        ctx.fillText(`판수`,335,120)
        ctx.fillText(`킬뎃`,435,120)
        ctx.fillText(`딜량`,535,120)
        // 두번째 줄
        ctx.fillText(`헤드샷`,235,220)
        ctx.fillText(`평균 킬`,435,220)

          // 전적 값
        ctx.font = 'bold 20px Sans'
        // 첫번째 줄
        ctx.fillText(`${record_data.record.winrate}`,235,150)
        ctx.fillText(`${record_data.record.avgscore}`,335,150)
        ctx.fillText(`${record_data.record.kd}`,435,150)
        ctx.fillText(`${record_data.record.avgdmg}`,535,150)
        // 두번째 줄
        ctx.fillText(`${record_data.record.headshot}`,235,250)
        ctx.fillText(`${record_data.record.avgkills}`,435,250)
        
        ctx.drawImage(l_image,20,90,50,50)
        const attachment = new Attachment(canvas.toBuffer(), 'lank.png')
	let embed1 = new MessageEmbed()
	.setTitle("Success!")
        .setColor(`0x2F3136`)
	.setDescription("사진이 발급 되었습니다.!")
        search_embed.edit({embeds: [embed1], files: [attachment]})

    }
}
