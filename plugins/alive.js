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

    
let cyber = ` ┏━━━━━ •ᴀʟɪᴠᴇ ɴᴏᴡ•━━━━┈⊷  
> 🤖 ʙᴏᴛ ɴᴀᴍᴇ: *ᴅᴀʀᴋ ᴄʏʙᴇʀ ᴍᴅ*              
> 🕐Uptime: *${runtime(process.uptime())}*
> 📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
> 💫 ᴘʀᴇғɪx: [ . ]
┗━━━━━━━━━━━━━━━━┈⊷
 `


 await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/900435c6d3157c98c3c88.jpg"},caption:cyber},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})



