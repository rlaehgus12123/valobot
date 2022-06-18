const { MessageEmbed, Interaction} = require('discord.js')
const {astra} = require('./unitcommand/astra.js')
const {breach} = require('./unitcommand/breach')
const {brimstone} = require('./unitcommand/brimstone.js')
const {chamber} = require('./unitcommand/chamber.js')
const {cypher} = require('./unitcommand/cypher.js')
const {fade} = require('./unitcommand/fade.js')
const {jett} = require('./unitcommand/jett.js')
const {kayo} = require('./unitcommand/kayo.js')
const {killjoy} = require('./unitcommand/killjoy.js')
const {neon} = require('./unitcommand/neon.js')
const {omen} = require('./unitcommand/omen.js')
const {phoenix} = require('./unitcommand/phoenix.js')
const {raze} = require('./unitcommand/raze.js')
const {reyna} = require('./unitcommand/reyna.js')
const {sage} = require('./unitcommand/sage.js')
const {skye} = require('./unitcommand/skye.js')
const {sova} = require('./unitcommand/sova.js')
const {viper} = require('./unitcommand/viper.js')
const {yoru} = require('./unitcommand/yoru.js')

async function unit(uitname, int = require(Interaction)) {
    if(uitname === "아스트라") {
        astra(int)
    } else if (uitname === "브리치") {
        breach(int)
    } else if (uitname === "브림스톤") {
        brimstone(int)
    } else if (uitname === "체임버") {
        chamber(int)
    } else if (uitname === "사이퍼") {
        cypher(int)
    } else if (uitname === "페이드") {
        fade(int)
    } else if (uitname === "제트") {
        jett(int)
    } else if (uitname === "케이오") {
        kayo(int)
    } else if (uitname === "킬조이") {
        killjoy(int)
    } else if (uitname === "네온") {
        neon(int)
    } else if (uitname === "오멘") {
        omen(int)
    } else if (uitname === "피닉스") {
        phoenix(int)
    } else if (uitname === "레이즈") {
        raze(int)
    } else if (uitname === "레이나") {
        reyna(int)
    } else if (uitname === "세이지") {
        sage(int)
    } else if (uitname === "스카이") {
        skye(int)
    } else if (uitname === "소바") {
        sova(int)
    } else if (uitname === "바이퍼") {
        viper(int)
    } else if (uitname === "요루") {
        yoru(int)
    }
}

module.exports = {
    unit
}