const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { MessageAttachment: Attachment } = require('discord.js')

module.exports = {
  name: "map",
  aliases: ["맵"],
  description: "발로란트 맵 정보를 봅니다",
  execute(message) {

    let embed = new MessageEmbed()
    .setColor("0x2F3136")
    .setTitle("발로란트 맵 보기")
    .setDescription("1. 어센트\n2. 바인드\n3. 헤이븐\n4. 스플릿\n5. 아이스박스\n6. 브리즈\n7. 프랙처")
    message.channel.send({embeds: [embed]}).then(emoji => {
      emoji.react("1️⃣")
      emoji.react("2️⃣")
      emoji.react("3️⃣")
      emoji.react("4️⃣")
      emoji.react("5️⃣")
      emoji.react("6️⃣")
      emoji.react("7️⃣")
      
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = emoji.createReactionCollector({ filter, time: 10000 });
      
      collector.on("collect", (reaction, user) => {
     switch (reaction.emoji.name) {
       case "1️⃣":
	var attachment = new Attachment(`${__dirname}/image/Map-image/KR-ascent.jpg`, 'KR-ascent.jpg')
     let EmbedMap = new MessageEmbed()
     reaction.users.remove(user.id);
         EmbedMap.setColor("0x2F3136")
         EmbedMap.setTitle("발로란트 **어센트** 맵")
         EmbedMap.setDescription("설명\n```어센트에서는 소규모 진지전과 소모전을 벌일 수 있는 개방 구역을 중심으로 두 지점이 나뉘어 있습니다. 각 지점은 해체 불가능한 폭탄 문으로 수비를 강화할 수 있으며, 일단 문이 닫히면 문을 파괴하거나 다른 길을 찾아야 합니다. 가능한 한 많은 지역을 지키세요.```")
         EmbedMap.setImage('attachment://KR-ascent.jpg')
         message.channel.send({embeds: [EmbedMap], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
            collector.stop()
     }
    switch (reaction.emoji.name) {
       case "2️⃣":
	var attachment = new Attachment(`${__dirname}/image/Map-image/kr-bind.jpg`, 'kr-bind.jpg')
     let EmbedMap = new MessageEmbed()
     reaction.users.remove(user.id);
         EmbedMap.setColor("0x2F3136")
         EmbedMap.setTitle("발로란트 **바인드** 맵")
         EmbedMap.setDescription("설명\n```두 지점으로 구성되며 중간 지점이 없어 왼쪽 또는 오른쪽을 선택해야 합니다. 양쪽 지점에는 공격팀을 위한 지름길과 한쪽으로만 이동할 수 있는 순간이동기 한 쌍이 있어 측면 공격에 활용할 수 있습니다.```")
         EmbedMap.setImage('attachment://kr-bind.jpg')
         message.channel.send({embeds: [EmbedMap], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
            collector.stop()
     }
   switch (reaction.emoji.name) {
       case "3️⃣":
	var attachment = new Attachment(`${__dirname}/image/Map-image/KR-haven.jpg`, 'KR-haven.jpg')
     let EmbedMap = new MessageEmbed()
     reaction.users.remove(user.id);
         EmbedMap.setColor("0x2F3136")
         EmbedMap.setTitle("발로란트 **헤이븐** 맵")
         EmbedMap.setDescription("설명\n```잊혀진 수도원 아래에서 세 지점을 장악하기 위한 요원들의 전투가 활발히 벌어집니다. 장악해야 할 지역이 더 많지만, 수비팀이 추가 지역을 이용해 공격적인 압박을 가할 수 있습니다.```")
         EmbedMap.setImage('attachment://KR-haven.jpg')
         message.channel.send({embeds: [EmbedMap], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
            collector.stop()
     }
  switch (reaction.emoji.name) {
       case "4️⃣":
	var attachment = new Attachment(`${__dirname}/image/Map-image/kr-split.jpg`, 'kr-split.jpg')
     let EmbedMap = new MessageEmbed()
     reaction.users.remove(user.id);
         EmbedMap.setColor("0x2F3136")
         EmbedMap.setTitle("발로란트 **스플릿** 맵")
         EmbedMap.setDescription("설명\n```멀리 가려면 위로 이동해야 합니다. 높이 솟아오른 중앙 구역이 두 지점을 나누고 있어 줄사다리 두 개를 이용해 재빨리 움직일 수 있죠. 각 지점에는 장악에 아주 중요한 탑이 세워져 있습니다. 속수무책으로 당하지 않으려면 꼭 위쪽을 확인하세요.```")
         EmbedMap.setImage('attachment://kr-split.jpg')
         message.channel.send({embeds: [EmbedMap], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
            collector.stop()
     }
     switch (reaction.emoji.name) {
      case "5️⃣":
	var attachment = new Attachment(`${__dirname}/image/Map-image/KR-icebox.jpg`, 'KR-icebox.jpg')
    let EmbedMap = new MessageEmbed()
    reaction.users.remove(user.id);
        EmbedMap.setColor("0x2F3136")
        EmbedMap.setTitle("발로란트 **아이스박스** 맵")
        EmbedMap.setDescription("설명\n```다음 전장은 혹한 지대에 위치한 킹덤의 비밀 발굴 현장입니다. 눈과 쇠붙이로 둘러싸인 스파이크 설치 지점에서는 전후좌우로 능숙하게 교전하는 능력이 필수죠. 집라인을 이용한 기습 공격으로 적의 허를 찔러보세요.```")
        EmbedMap.setImage('attachment://KR-icebox.jpg')
         message.channel.send({embeds: [EmbedMap], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
           collector.stop()
    }
    switch (reaction.emoji.name) {
      case "6️⃣":
	var attachment = new Attachment(`${__dirname}/image/Map-image/kr-Breeze.jpg`, 'kr-Breeze.jpg')
    let EmbedMap = new MessageEmbed()
    reaction.users.remove(user.id);
        EmbedMap.setColor("0x2F3136")
        EmbedMap.setTitle("발로란트 **브리즈** 맵")
        EmbedMap.setDescription("설명\n```열대 파라다이스의 역사적 유적과 해변 동굴의 경치를 만끽해보세요. 하지만 엄호가 필요할 겁니다. 탁 트인 넓은 공간에서 원거리 교전이 펼쳐지니까요. 측면 공격에 잘 대비한다면 승리에 한 걸음 다가갈 수 있을 것입니다.```")
        EmbedMap.setImage('attachment://kr-Breeze.jpg')
         message.channel.send({embeds: [EmbedMap], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
           collector.stop()
    }
    switch (reaction.emoji.name) {
      case "7️⃣":
	var attachment = new Attachment(`${__dirname}/image/Map-image/kr-fracture.jpg`, 'kr-fracture.jpg')
    let EmbedMap = new MessageEmbed()
    reaction.users.remove(user.id);
        EmbedMap.setColor("0x2F3136")
        EmbedMap.setTitle("발로란트 **프랙처** 맵")
        EmbedMap.setDescription("설명\n```레디어나이트 실험 실패로 파괴된 일급 비밀 연구 시설입니다. 수비팀의 전략은 맵처럼 두 갈래로 나누어집니다. 공격팀의 영역에서 맞붙거나 위기에 대비하여 공격을 견디세요.```")
        EmbedMap.setImage('attachment://kr-fracture.jpg')
         message.channel.send({embeds: [EmbedMap], files: [attachment]}).catch(err => { if(err){ console.log(err) } });
           collector.stop()
    }
     
    })
  })
    
    
    
  }
}