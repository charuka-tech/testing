const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
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
╭━━━━━━━━━━━━━━━━━━
┃👋 *Hello ${pushname}* 
┃👤Bot Owener: Mr Charuka 
┃🤖Bot Name: Dark Cyber Md
┃🕐uptime: ${uptime}
┃🧬Prefix: [.]
╰━━━━━━━━━━━━━━━━━━━ 
╭━━━━━━━━━━━━━━━━━━━
┃ > MAIN COMMAND
┃${menu.main}
┃
┃
╰━━━━━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━━━━━
┃> DOWLOAD COMMAND
┃
┃${menu.download}
┃
╰━━━━━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━━━━━
┃ > GROUP COMMAND
┃
┃${menu.group}
┃
╰━━━━━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━━━━━
┃> OWNER COMMAND
┃
┃${menu.owner}
┃
╰━━━━━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━━━━━
┃ > CONVERT COMMAND
┃
┃${menu.convert}
┃
╰━━━━━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━━━━━
┃> SEARCH COMMAND
┃
┃${menu.search}
┃
╰━━━━━━━━━━━━━━━━━━━
 * MADE BY DARK CYBER MD *
   `
   
 await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/900435c6d3157c98c3c88.jpg"},caption:madeMenu},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})

