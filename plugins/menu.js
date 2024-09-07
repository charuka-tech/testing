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

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}


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
${menu.main}
║╚━━━━━━━━━━━●●●►
║╠━━❮ DOWNLOAD COMMAND 
${menu.download}
║╚━━━━━━━━━━━●●●►
║╠━━❮ GROUP COMMAND 
${menu.group}
║╚━━━━━━━━━━━●●●►
║╠━━❮ OWNER COMMAND 
${menu.owner}
║╚━━━━━━━━━━━●●●►
║╠━━❮ CONVERT COMMAND 
${menu.convert}
║╚━━━━━━━━━━━●●●►
║╠━━❮ SEARCH COMMAND 
${menu.search}
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







