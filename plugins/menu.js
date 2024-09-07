const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
     react: "📃",
    desc: "get cmd list.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{




let madeMenu = ` 
╔═════════────────⛦
║👋╠ Hello: ${pushname}
║🕐╠ Uptime: ${runtime(process.uptime())}
║👤╠ Bot Owener: ᴍʀ ᴄʜᴀʀᴜᴋᴀ
║🤖╠ Bot Name: ᴍɪᴢᴜᴋɪ ᴍᴅ
║🧬╠ Prefix: [.]
║🔖╠ Versions: 1.0.0
║🎰╠ Owner Number: +94775228949
║  ╚═══════────────⛦
║╠━━❮ MAIN COMMAND 
║╠🧚.ai
║╠🧚.alive 
║╠🧚.menu
║╠🧚.news
║╠🧚.ping
║╠🧚.system 
║╚━━━━━━━━━━━●●●►
║╠━━❮ DOWNLOAD COMMAND 
║╠🧚.fb
║╠🧚.tiktok 
║╠🧚.video 
║╠🧚.song
║╠🧚.gdrive
║╠🧚.movie
║╠🧚.twitter
║╠🧚.mediafire
║╚━━━━━━━━━━━●●●►
║╠━━❮ GROUP COMMAND 
║╠🧚
║╠🧚
║╠🧚
║╠🧚
║╚━━━━━━━━━━━●●●►
║╠━━❮ OWNER COMMAND 
║╠🧚.restart
║╚━━━━━━━━━━━●●●►
║╠━━❮ CONVERT COMMAND 
║╠🧚
║╚━━━━━━━━━━━●●●►
║╠━━❮ SEARCH COMMAND 
║╠🧚.yts
║╠🧚.img
║╚━━━━━━━━━━━━●●●►
║ *CREATED BY* 
║   *DARK CREATORS™*
╚════════════──────⛦
   `
   
 await conn.sendMessage(from,{image:{url:"https://i.ibb.co/qkCxxdH/20240906-082521.jpg"},caption:madeMenu},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})







