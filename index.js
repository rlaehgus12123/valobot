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
const fetch = require('node-fetch')
const fs = require("fs");

// 웹 구동 코드 // 
const http = require('http');
const express = require('express');
const expressip = require('express-ip');
const app = express();
const router = express.Router();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.static('404'));
app.use(expressip().getIpInfoMiddleware);

// http 서버 
app.get('/', (req, res) => {
  res.render('index', { 
    server: `${client.guilds.cache.size}`, 
    user: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`,
    music: "JVpTp8IHdEg", 
    
  })
  console.log(req.ipInfo.ip + ": GET / HTTPS/1.1" + " 200 -");
})

app.get('*', (req, res) => {
    res.render('404', {})
})

const listener = server.listen(8082, function() {
    console.log("Web Server Onlien : HTTPS :" + listener.address().port);
})
// http 서버 END

client.commands = new Collection();
client.commands1 = new Collection();
client.commands2 = new Collection();

client.prefix = PREFIX;
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const cooldowns = new Collection();

fs.readdir("./command/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      let props = require(`./command/${file}`);
      let commandName = file.split(".")[0];
      console.log(`[Command Manager]: Loading Command ${commandName}`);
      client.commands.set(commandName, props);
    });
  });

  const commandFiles = readdirSync(join(__dirname, "command")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "command", `${file}`));
  client.commands.set(command.name, command);
}

const commandFiles1 = readdirSync(join(__dirname, "command/unitcommand")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles1) {
  const command1 = require(join(__dirname, "command/unitcommand", `${file}`));
  client.commands1.set(command1.name, command1);
}

const commandFiles2 = readdirSync(join(__dirname, "command/weapon")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles2) {
  const command2 = require(join(__dirname, "command/weapon", `${file}`));
  client.commands2.set(command2.name, command2);
}

client.on('ready', () => {
  console.log('VALO 디코봇 온라인! | 제작 : 욤 승혓')
  client.user.setActivity("VALORANT 유저들 전적을 확인 하는중");
})

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    
  
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
  
    const [, matchedPrefix] = message.content.match(prefixRegex);
  
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
  
  const command = client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName)) || client.commands1.get(commandName) ||  client.commands1.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName)) || client.commands2.get(commandName) ||  client.commands2.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName))
    
  
  if (!commandName) {
    message.channel.send(`어엇? 접두사 뒤에 아무것도 없어요! **${PREFIX} 도움** 으로 많은 명령어들을 보실 수 있어요!`).catch(err => { if(err){console.log(err)} })
      return;
  } else {
    client.channels.cache.get('802864958571937803').send(`${message.guild.name} [ ${message.author.tag} ] : **명령 사용**\n사용 명령어 : ${PREFIX} **${commandName}**`)
  }
    
    if (!command) return;
  
    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Collection());
    }
    
  
  
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;
  
  if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
  
      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(
          `명령어 재사용 시간까지 ${timeLeft.toFixed(1)} 의 초 가 남았습니다. 사용 명령어 : \`${command.name}\` 입니다.`
        );
      }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("알수없는 오류 발견").catch(console.error);
    }
  })

client.on('guildCreate', guild => {
 //client => { client.guild.get('790019140835475468').send(message.guild.name + "(" + message.guild.id + ") : " + "의 서버에 가입."); 
 
 //서버에서 길드로.
 console.log(client.guilds.cache.size + "의 서버")

    client.channels.cache.get('800088801682128937').send(`${guild.name} (${guild.id}) : **가입**\n현재 접속 서버 : ${client.guilds.cache.size}`)
    console.log("로그 전송완료!")
    
})

client.on('guildDelete', guild => {
 //client => { client.guild.get('790019140835475468').send(message.guild.name + "(" + message.guild.id + ") : " + "의 서버에 가입."); 
 
 //서버에서 길드로.
 console.log(client.guilds.cache.size + "의 서버")

    client.channels.cache.get('800088801682128937').send(`${guild.name} (${guild.id}) : **탈퇴**\n현재 접속 서버 : ${client.guilds.cache.size}`)
    console.log("로그 전송완료!")
    
   })
   
   client.on("guildCreate", guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
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


  client.login(TOKEN)