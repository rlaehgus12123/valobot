const { MessageEmbed } = require('discord.js')
const axios = require('axios')

async function patchnote(int) {
    const patch_data = await axios.get('https://playvalorant.com/page-data/ko-kr/news/tags/patch-notes/page-data.json')
    let main_data = patch_data.data.result.data.articles.nodes[0]
        
    const embed = new MessageEmbed()
    .setTitle(main_data.title)
    .setURL(`https://playvalorant.com/ko-kr${main_data.url.url}`)
    .setDescription(main_data.description)
    .setImage(main_data.banner.url)
    int.reply({embeds: [embed]})
}

module.exports = {
    patchnote
}