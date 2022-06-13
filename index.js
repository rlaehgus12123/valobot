const { Client, Collection, MessageEmbed, Intents } = require('discord.js')
const Discord = require('discord.js')
const { readdirSync } = require("fs");
const { join } = require("path");
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
const { TOKEN, PREFIX } = require('./config.json')
const {rank} = require("./command/rank.js");
const {imagecard} = require('./command/imagecard.js')
const {help} = require('./command/help.js')
const {invite} = require('./command/invite.js')

client.on('ready', () => {
  console.log('VALO 디코봇 온라인! | 제작 : 욤 승혓')
  client.user.setActivity("VALORANT 유저들 전적을 확인 하는중");
})

client.on('interactionCreate', int => {
    if (!int.isCommand) return


    if(int.commandName === "도움말"){
        help(int)
    }

    if(int.commandName === "초대링크") {
        invite(int)
    }

    if(int.commandName === "전적"){
        nick = int.options.getString("닉네임");
        // #이 입력되지 않았을때 대응
        if(nick.includes("#") === false) {
            let embed = new MessageEmbed()
                .setTitle(":x:  ERROR :x: ")
                .setColor("RED")
                .setDescription("닉네임에 #이 존재 하지 않습니다")
            return int.reply({embeds: [embed]});
        }
        rank(nick, int)
    }

    if(int.commandName === "전적카드"){
        nick = int.options.getString("닉네임");
        if(nick.includes("#") === false) {
            let embed = new MessageEmbed()
                .setTitle(":x:  ERROR :x: ")
                .setColor("RED")
                .setDescription("닉네임에 #이 존재 하지 않습니다")
            return int.reply({embeds: [embed]});
        }
        imagecard(nick, int)
    }

    if(int.commandName === "맵") {
        map = int.command.options[0].choices
        console.log(map)
    }

})

   client.on("guildCreate", guild => {
      const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
           console.log(client.guilds.cache.size + "의 서버")
           client.channels.cache.get('800088801682128937').send(`${guild.name} (${guild.id}) : **가입**\n현재 접속 서버 : ${client.guilds.cache.size}`)
           console.log("로그 전송완료!")
      let embed = new MessageEmbed()
          .setTitle("VALO 사용방법")
          .setDescription(
            "`발로야 도움` 을 통해 명령어들을 보실 수 있습니다\n`발로야 전적 <플레이어 닉네임>#<태그>` 을 사용하시면 발로란트의 유저 정보를 볼 수 있습니다\n\n 이 외에도 무기 및 요원 리스트도 불 수있으니 자주 이용 부탁드립니다!\n\n[여기](https://valobot.xyz)를 클릭하셔서 웹에 방문 한번 부탁드립니다!"
            )
          .setFooter("copyright © 2020. Every-Team Service, all rights reserved")
             channel.send({embeds: [embed]}).catch(err => {
               if(err) {
                 console.log(err)
               }
         });
   });

client.on('guildDelete', guild => {
    //client => { client.guild.get('790019140835475468').send(message.guild.name + "(" + message.guild.id + ") : " + "의 서버에 가입.");

    //서버에서 길드로.
    console.log(client.guilds.cache.size + "의 서버")

    client.channels.cache.get('800088801682128937').send(`${guild.name} (${guild.id}) : **탈퇴**\n현재 접속 서버 : ${client.guilds.cache.size}`)
    console.log("로그 전송완료!")

})

  client.login(TOKEN)


module.exports = {client}