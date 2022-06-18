const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9');
const {SlashCommandBuilder} = require("@discordjs/builders");
const { TOKEN } = require('./config.json');
const client = "866835727735586837"
const rest = new REST({version: '9'}).setToken(TOKEN);
( async () => {
    try {
        await rest.put(
            Routes.applicationCommands(client),
            {
                body: [
                    data = new SlashCommandBuilder()
                        .setName("도움말")
                        .setDescription("명령어들을 봅니다"),
                    data = new SlashCommandBuilder()
                        .setName("전적")
                        .setDescription("발로란트 전적을 불러옵니다")
                        .addStringOption(option => option.setName("닉네임").setDescription("닉네임#태그 형태로 입력해주세요!").setRequired(true)),
                    data = new SlashCommandBuilder()
                        .setName("전적카드")
                        .setDescription("발로란트의 전적을 이미지로 반환합니다")
                        .addStringOption(option => option.setName("닉네임").setDescription("닉네임#태그 형태로 입력해주세요!").setRequired(true)),
                    data = new SlashCommandBuilder()
                        .setName("순위표")
                        .setDescription("발로란트의 순위를 봅니다"),
                    data = new SlashCommandBuilder()
                        .setName("맵")
                        .setDescription("발로란트 맵의 정보를 불러옵니다")
                        .addStringOption(option => option.setName("맵").setDescription("발로란트의 맵에 정보를 확인 합니다").addChoices(
                            {name: "어센트", value: "어센트"},
                                   {name: "바인드", value: "바인드"},
                                   {name: "헤이븐", value: "헤이븐"},
                                   {name: "스플릿", value: "스플릿"},
                                   {name: "아이스박스", value: "아이스박스"},
                                   {name: "브리즈", value: "브리즈"},
                                   {name: "프랙처", value: "프랙처"},
                        ).setRequired(true)),
                    data = new SlashCommandBuilder()
                        .setName("초대링크")
                        .setDescription("발로봇을 초대 할 수 있는 링크가 발급되요!"),
                    data = new SlashCommandBuilder()
                        .setName("무기")
                        .setDescription("무기 별 대미와 장점 단점을 알려드려요")
                        .addStringOption(option => option.setName("무기").setDescription("무기의 정보를 확인합니다").addChoices(
                            {name: "권총", value:"권총"},
                            {name:"기관총", value: "기관총"},
                            {name:"소총", value: "소총"},
                            {name:"쉴드", value: "쉴드"},
                            {name:"샷건", value: "샷건"},
                            {name:"기관단총", value: "기관단총"},
                            {name:"저격총", value: "저격총"},
                        ).setRequired(true)), //JUST WAITING
                    data = new SlashCommandBuilder()
                        .setName("요원")
                        .setDescription("요원")
                        .addStringOption(option =>
                            option.setName("요원")
                                .setDescription("요원의 이름을 입력해주세요")
                                .addChoices(
                                    {name: "아스트라", value: "아스트라"},
                                    {name: "브리치", value: "브리치"},
                                    {name: "브림스톤", value: "브림스톤"},
                                    {name: "체임버", value: "체임버"},
                                    {name: "사이퍼", value: "사이퍼"},
                                    {name: "페이드", value: "페이드"},
                                    {name: "제트", value: "제트"},
                                    {name: "케이오", value: "케이오"},
                                    {name: "킬조이", value: "킬조이"},
                                    {name: "네온", value: "네온"},
                                    {name: "오멘", value: "오멘"},
                                    {name: "피닉스", value: "피닉스"},
                                    {name: "레이즈", value: "레이즈"},
                                    {name: "레이나", value: "레이나"},
                                    {name: "세이지", value: "세이지"},
                                    {name: "스카이", value: "스카이"},
                                    {name: "소바", value: "소바"},
                                    {name: "바이퍼", value: "바이퍼"},
                                    {name: "요루", value: "요루"},
                                    )),
                    data = new SlashCommandBuilder()
                        .setName("패치노트")
                        .setDescription("발로란트의 패치노트를 확인합니다")
                ]
            }
        )
    } catch (err) {
        console.log(err)
    }
})()
