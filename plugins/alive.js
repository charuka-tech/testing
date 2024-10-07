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

    
let cyber = `👋 HELLO ${pushname} I'm alive now
    
> *🚀Version:* ${require("../package.json").version}
> *⌛Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *🕒Runtime:* ${runtime(process.uptime())}
> *📍Platform:* ${os.hostname()}


🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot
                    
*🌻Have A Nice Day..*🌻


> ᴍɪᴢᴜᴋɪ ᴍᴅ ᴄʀᴇᴀᴛᴇ ʙʏ ᴅᴀʀᴋ ᴄʀᴇᴀᴛᴏʀꜱ
 `;

  const buttons = [
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "OWNER MENU",
            id: `.rushmenu`
          })
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "downloadmenu",
            id: `.downloadmenu`
          })
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "all menu",
            id: `.allmenu`
          })
        },
    {
          "name": "cta_copy",
          "buttonParamsJson": JSON.stringify({
            display_text: "our yt馃槂",
            id: "${prefix}ping",
             copy_code: '.rushmdwa'
          })
        },
    {
          "name": "cta_copy",
          "buttonParamsJson": JSON.stringify({
            display_text: "OWNER AND REPO",
            id: "${prefix}ping",
             copy_code: '.rushmdrepo'
          })
        }
        ];

  const msg = generateWAMessageFromContent(m.from, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: uptimeMessage
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "漏 Powered By 饾殎饾殑饾殏饾櫡 饾櫦饾櫝"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            gifPlayback: true,
            subtitle: "",
            hasMediaAttachment: false 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '911111111',
                  newsletterName: "RUSH",
                  serverMessageId: 143
                }
              }
        }),
      },
    },
  }, {});

  await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
    


    

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
      
await conn.sendMessage(from, { image: { url: "https://i.ibb.co/SsqGnFc/20240905-163614.jpg" }, caption: menumg }, { quoted:mek})
} catch (e) {
reply('*Error !!*')
l(e)
}
})

