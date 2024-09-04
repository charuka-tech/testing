const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
     react: "🪩",
    desc: "get bot repo",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  let repo = `┏━━━━━━ •ᴀʟɪᴠᴇ ɴᴏᴡ•━━━━┈⊷  
> 🤖 ʙᴏᴛ ɴᴀᴍᴇ: *ᴅᴀʀᴋ ᴄʏʙᴇʀ ᴍᴅ*              
> 🔮ʙᴏᴛ ʀᴇᴘᴏ: *ᴄᴏᴍᴍɪɴɢ ꜱᴏᴏɴ*
> 📡 ᴘʟᴀᴛғᴏʀᴍ: *linux*
> 💫 ᴘʀᴇғɪx: [ . ]
> 🔖 ᴠᴇʀꜱɪᴏɴꜱ: 1.0.0
┗━━━━━━━━━━━━━━━━━━┈⊷
  
  `
  
return reply(`${repo}`)

}catch(e){
console.log(e)
reply(`${e}`)
}
})
