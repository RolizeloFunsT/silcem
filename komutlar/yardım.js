const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Neon Bot Yardım Paneli')

  .addField("• | v!botbilgi",`__Botun istatistiklerini gösterir__`)
  
  .addField("• | Komut",`__Botun davet linkini gösterir__`)
  
  .addField("• | Komut",`__tanim__`)
  
  .addField("• | Komut",`__tanim__`)

  .addField("• | Komut",`__tanım__`)
  
  .addField("[Ekle](Bot Davet Linki) | [Destek](Destek Sunucun) " )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}