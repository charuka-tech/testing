const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')


cmd({
    pattern: "alive",
    react: "👋",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    
let cyber = `•👋 Hello  *${pushname}* I'm Alive Now•
 > ʜᴇʟʟᴏ *${pushname}*
 > ʙᴏᴛ ɴᴀᴍᴇ: *ᴍɪᴢᴜᴋɪ ᴍᴅ*              
 > ᴜptime: *${runtime(process.uptime())}*
 > ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
 > ᴘʀᴇғɪx: [ . ]
   ᴍɪᴢᴜᴋɪ ᴍᴅ ᴄʀᴇᴀᴛᴇ ʙʏ ᴅᴀʀᴋ ᴄʀᴇᴀᴛᴏʀꜱ
 `

    

 await conn.sendMessage(from,{image:{url:"https://i.ibb.co/SsqGnFc/20240905-163614.jpg"},caption:cyber},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})

