const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const{runtime} = require('../lib/functions')






cmd({
    pattern: "alive",
    react: "👋",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    
let cyber = `👋 HELLO ${pushname} I'm alive now
    
> *🚀Version:* ${require("../package.json").version}
> *⌛Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *🕒Runtime:* ${runtime(process.uptime())}
> *📍Platform:* ${os.hostname()}


🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot
                    
*🌻Have A Nice Day..*🌻


> ᴍɪᴢᴜᴋɪ ᴍᴅ ᴄʀᴇᴀᴛᴇ ʙʏ ᴅᴀʀᴋ ᴄʀᴇᴀᴛᴏʀꜱ
 `;
    let dbtn = await conn.buttongen([{
				
				quickReplyButton: {
					displayText: 'menu',
					id: '.menu' 
				}
			}, {
				quickReplyButton: {
					displayText: 'ping',
					id: '.ping '
				}
			}])
			msg.button = dbtn.button
			if(dbtn.type) 
				

		
		


  

    


    

 await conn.sendMessage(from,{image:{url:"https://i.ibb.co/SsqGnFc/20240905-163614.jpg"},caption:cyber},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "menu2",
    react: "📂",
    alias: ["panel","list","commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    let menuc1 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'admin'){
if(!commands[i].dontAddCommandList){
menuc1 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc2 = ``
for (let i=0;i<commands.length;i++) { 
  if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){
  menuc2 += `*│⩥* .${commands[i].pattern}\n`
  }}};

let menuc3 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
    menuc3 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc4 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc4 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc5 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc5 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc6 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'owner'){
if(!commands[i].dontAddCommandList){
  menuc6 += `*│⩥* .${commands[i].pattern}\n`
}}};
let menumg = `*Hellow👸* ${pushname}

*╭─     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*
*│🕵️‍♂️ 𝘙𝘶𝘯 𝘛𝘪𝘮𝘦 -* ${runtime(process.uptime())} 
*│🕵️‍♂️ 𝘙𝘢𝘮 𝘜𝘴𝘦 -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────●●►*
*👸 𝘘𝘶𝘦𝘦𝘯 𝘋𝘦𝘸 𝘔𝘥 𝘊𝘰𝘮𝘮𝘢𝘮𝘥 𝘗𝘢𝘯𝘦𝘭*
*╭──────────●●►*
*│🧙‍♂️ MAIN COMMANDS*
*│   ───────*

${menuc1}*╰───────────●●►*
*╭──────────●●►*
*│🧙‍♂️ MAIN COMMANDS*
*│   ───────*

${menuc2}*╰───────────●●►*
*╭──────────●●►*
*│🧙‍♂️ MAIN COMMANDS*
*│   ───────*

${menuc3}*╰───────────●●►*
*╭──────────●●►*
*│🧙‍♂️ MAIN COMMANDS*
*│   ───────*

${menuc4}*╰───────────●●►*
*╭──────────●●►*
*│🧙‍♂️ MAIN COMMANDS*
*│   ───────*

${menuc5}*╰───────────●●►*
*╭──────────●●►*
*│🧙‍♂️ MAIN COMMANDS*
*│   ───────*

${menuc6}*╰───────────●●►*



*•Qᴜᴇᴇɴ ᴅᴇᴡ ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ•*`
	     };
        const _0x300969 = {
          quoted: _0x52165a
        };
        return await _0x5b1fc0.replyList(_0x2b6d5b, _0x53ce41, _0x300969);
      } else {
        const _0x45eb6d = [{
          title: "",
          rows: [{
            title: "1",
            rowId: _0x11345c + "downmenu",
            description: "Downloader Commands"
          }, {
            title: "2",
            rowId: _0x11345c + "searchmenu",
            description: "Search Commands"
          }, {
            title: "3",
            rowId: _0x11345c + "convertmenu",
            description: "Converter Commands"
          }, {
            title: "4",
            rowId: _0x11345c + "logomenu",
            description: "Logo Commands"
          }, {
            title: "5",
            rowId: _0x11345c + "mainmenu",
            description: "Main Commands"
          }, {
            title: "6",
            rowId: _0x11345c + "groupmenu",
            description: "Group Commands"
          }, {
            title: "7",
            rowId: _0x11345c + "bugmenu",
            description: "Bug commands"
          }, {
            title: "8",
            rowId: _0x11345c + "othermenu",
            description: "Other commands"
          }]
        }];
      
await conn.sendMessage(from, { image: { url: "https://i.ibb.co/SsqGnFc/20240905-163614.jpg" }, caption: menumg }, { quoted:mek})
} catch (e) {
reply('*Error !!*')
l(e)
}
})

