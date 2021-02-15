const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Neon Bot Yardım Paneli')

  .addField("<a:mode:806179543911366666>| n!moderasyon",`__Botun Moderasyon Komutlarını Gösterir__`)
  
  .addField("<a:mode:806179543911366666>| Komut",`__Botun davet linkini gösterir__`)
  
  .addField("<a:mode:806179543911366666>| Komut",`__tanim__`)
  
  .addField("<a:mode:806179543911366666>| Komut",`__tanim__`)

  .addField("<a:mode:806179543911366666>| Komut",`__tanım__`)
  
  .addField("[Ekle](Bot Davet Linki) | [Destek](Destek Sunucun) " )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['moderasyon', 'm']

}

exports.help = {

  name: 'moderasyon',

  description: 'Moderasyon Menüsünü Açar',

  usage: 'moderasyon'

}