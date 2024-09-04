const config = require('../config')
const {cmd , commands} = require('../command')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "tag",
     react: "🛑",
    desc: "group cdm.",
    category: "group command",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{




}catch(e){
console.log(e)
reply(`${e}`)
}
})

