const { Client, Collection, MessageEmbed, Intents, Interaction} = require('discord.js')
const Discord = require('discord.js');
const client = new Client({ 
intents: [
Intents.FLAGS.GUILDS, 
Intents.FLAGS.GUILD_MESSAGES, 
Intents.FLAGS.GUILD_MEMBERS, 
Intents.FLAGS.GUILD_INTEGRATIONS, 
Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, 
Intents.FLAGS.DIRECT_MESSAGES, 
Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, 
] 
})

async function invite(int = require(Interaction)) {
    var invite_link = "https://discord.com/api/oauth2/authorize?client_id=866835727735586837&permissions=0&scope=bot%20applications.commands"
    var discord_invite = "https://discord.gg/Y7G2NGtXgQ"
    var developd_bot = "https://rlaehgus12123.github.io/about/me"
    var discord_VALO_hart = "https://koreanbots.dev/bots/799840246719315989"
    var discord_invite_team = "https://discord.gg/CpQQCAwEDc"
    var website = "https://valobot.xyz/"

    let embed = new MessageEmbed()
    .setColor("0x2F3136")
    .setTitle("초대장(Invite)")
    .setDescription(`제작자 : 욤 승혓#2645\n\n> **[초대](${invite_link})** 하기\n\n> **[VALO WEB SITE](${website})**\n\n**저희 발로봇에게 하트를 주세요!**\n**[하트 눌러주기](${discord_VALO_hart})**\n\n**어라? 뭐지.. 왜 안돼..???**\n버그 발생시 **[지원 서버](${discord_invite})** 혹은 [팀 디스코드](<${discord_invite_team}>) 로 문의 주세요!\n\n발로 봇 개발자의 다른 봇을 구경하고 싶으시다면 **[여기](${developd_bot})**를 들어오시면 됩니다`)
    int.reply({embeds: [embed]})

}

module.exports = {
    invite
}