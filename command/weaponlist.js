const { MessageEmbed, Interaction} = require('discord.js')
const Discord = require('discord.js')
const {equipment} = require('./weapon/equipment.js')
const {heavy} = require('./weapon/heavy.js')
const {rifle} = require('./weapon/rifle.js')
const {shield} = require('./weapon/shield.js')
const {shotgun} = require('./weapon/shotgun.js')
const {smg} = require('./weapon/smg.js')
const {sniper} = require('./weapon/sniper.js')

async function weapon(weapon_name, int = require(Interaction)) {
    if(weapon_name === "권총") {
        equipment(int)
    } else if (weapon_name === "기관총") {
        heavy(int)
    } else if (weapon_name === "소총") {
        rifle(int)
    } else if (weapon_name === "쉴드") {
        shield(int)
    } else if (weapon_name === "샷건") {
        shotgun(int)
    } else if (weapon_name === "기관단총") {
        smg(int)
    } else if (weapon_name === "저격총") {
        sniper(int)
    }
}

module.exports = {
    weapon
}