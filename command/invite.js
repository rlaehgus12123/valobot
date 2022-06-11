const { Client, Collection, MessageEmbed, Intents } = require('discord.js')
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

module.exports = {
  name: "invite",
  aliases: ["초대링크", "초대"],
  description: "이 봇이 마음에 든다구요? 앗 걱정마세요 지금 당신도 이 봇을 개인서버에서 이용할 수 있어요!",
  execute(message) {
var invite_link = "https://discord.com/api/oauth2/authorize?client_id=866835727735586837&permissions=71313424&scope=bot"
var discord_invite = "https://discord.gg/Y7G2NGtXgQ"
var developd_bot = "https://koreanbots.dev/users/782487475976798208"
var discord_VALO_hart = "https://koreanbots.dev/bots/799840246719315989"
var discord_invite_team = "https://discord.gg/CpQQCAwEDc"
var website = "https://valobot.xyz/"

    let embed = new MessageEmbed()
    .setColor("0x2F3136")
    .setTitle("초대장(Invite)")
    .setDescription(`발로 버전 Ver 2.0 | **${message.client.guilds.cache.size} 서버** 에서 활동중\n\n제작자 : 승혁이다#4464\n\n> **[초대](${invite_link})** 하기\n\n> **[VALO WEB SITE](${website})**\n\n**저희 발로봇에게 하트를 주세요!**\n**[하트 눌러주기](${discord_VALO_hart})**\n\n**어라? 뭐지.. 왜 안돼..???**\n버그 발생시 **[지원 서버](${discord_invite})** 혹은 [팀 디스코드](<${discord_invite_team}>) 로 문의 주세요!\n\n발로 봇 개발자의 다른 봇을 구경하고 싶으시다면 **[여기](${developd_bot})**를 들어오시면 됩니다`)
    message.channel.send({embeds: [embed]})
  }
}