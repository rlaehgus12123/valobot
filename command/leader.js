const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
    name: "leader",
    aliases: ["순위표", "순위"],
    description: "발로란트의 순위를 봅니다",
    async execute(message) { 

const getHtml = async () => {
    try {
        return await axios.get("https://dak.gg/valorant/leaderboard?shard=kr")
    } catch(err) {
        console.log(err)
    }
}

getHtml().then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("tbody")

    $bodyList.each(function(i, elem) {
        ulList = {
            name: $(this).find('a.player-info__name').text().split("\n", 20),
            link: $(this).find('a.player-info__name').attr("href")
        }
    })

    try {
        const embed = new MessageEmbed()
        .setColor(`0x2F3136`)
        .setTitle("순위표")
        .setDescription(`현재 1위는 **[${ulList.name[1]}](${ulList.link})** 님 입니다`)
        .addField("1위", ulList.name[1])
        .addField("2위", ulList.name[3])
        .addField("3위", ulList.name[5])
        .addField("4위", ulList.name[7])
        .addField("5위", ulList.name[9])
        .addField("6위", ulList.name[11])
        .addField("7위", ulList.name[13])
        .addField("8위", ulList.name[15])
        .addField("9위", ulList.name[17])
        .addField("10위", ulList.name[19])
        message.channel.send({embeds: [embed]})
    } catch(err) {
        if(err) {
            console.log(err)
        }
    }
}).catch(err => { console.log(err) })

    }
}