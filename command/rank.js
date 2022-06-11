const { MessageEmbed } = require('discord.js');
const { PREFIX } = require('../config.json')
const { api_key } = require("../config.json")

const data = require('./module/module.js')

module.exports = {
  name: "rank",
  aliases: ["전적", "랭크"],
  description: "발로란트의 전적을 검색합니다",
  async execute(message) { 
      try {
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
          .setDescription('닉네임이나 태그가 입력되지 않았습니다!\n> "닉네임#태그" \n위의 양식에 따라 입력해주세요!')
          return message.reply({embeds: [embed]}).catch(console.error);
        } else if(arguments[0].includes("#") === false) {
          let embed = new MessageEmbed()
          .setTitle(":x:  ERROR :x: ")
          .setColor("RED")
          .setDescription('닉네임이나 태그가 입력되지 않았습니다!\n> "닉네임#태그" \n위의 양식에 따라 입력해주세요!')
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
        const embed1 = new MessageEmbed()
        .setColor(`0x2F3136`)
        .setAuthor(`${record_data.user_info.nickname} 님의 전적`, `${record_data.user_info.profile_image}`, `${record_data.user_info.profile_url}`)
        .setDescription(`**랭크전**`)
        .addField("현재 랭크(Rank)", `**${record_data.record.lank}**`)
        .addField("승률(WinRate)", `**${record_data.record.winrate}**`)
        .addField("평균 판수(AvgScore)", `**${record_data.record.avgscore}**`)
        .addField("킬뎃(K/D)", `**${record_data.record.kd}**`)
        .addField("평균 딜량(AvgDMG)", `**${record_data.record.avgdmg}**`)
        .addField("헤드샷(HeadShot)", `**${record_data.record.headshot}**`)
        .addField("평균 킬(AvgKills)", `**${record_data.record.avgkills}**`)
        .setThumbnail(record_data.record.image)
        search_embed.edit({embeds: [embed1]})

      } catch(err) {
        console.log(err)
        var embed = new MessageEmbed()
        .setTitle(":x:  ERROR :x: ")
        .setColor("RED")
        .setDescription('닉네임이나 태그가 입력되지 않았습니다!\n> "닉네임#태그" \n위의 양식에 따라 입력해주세요!')
        return message.reply({embeds: [embed]}).catch(console.error);
      }
    }
  }
