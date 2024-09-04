//const config = require('../config')
//const {cmd , commands} = require('../command')
//const os = require("os")
//const {runtime} = require('../lib/functions')

//cmd({
 //   pattern: "alive",
//    react: "👋",
//    desc: "Check bot online or no.",
//    category: "main",
 //   filename: __filename
//},
//async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
//try{

    
//let cyber = ` ┏━━━━━ •ᴀʟɪᴠᴇ ɴᴏᴡ•━━━━┈⊷  
//> 🤖 ʙᴏᴛ ɴᴀᴍᴇ: *ᴅᴀʀᴋ ᴄʏʙᴇʀ ᴍᴅ*              
//> 🕐Uptime: *${runtime(process.uptime())}*
//> 📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
//> 💫 ᴘʀᴇғɪx: [ . ]
//┗━━━━━━━━━━━━━━━━┈⊷
// `


 //await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/900435c6d3157c98c3c88.jpg"},caption:cyber},{quoted:mek})



//}catch(e){
//console.log(e)
//reply(`${e}`)
//}
//})

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./Assets/GHOST.mp3"
    let url = "https://github.com/Nadunsl"
    let murl = "https://YouTube.com"
    let img = "https://telegra.ph/file/b1b157e944010efebf1d7.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "HELLO USER IM ONLINE",
          body: "CYBER MD",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;




