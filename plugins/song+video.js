const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yts-search')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try}

    
if(!q) return reply ("please give me url or name")

const search= await yts (q)
const data= search.videos[0]
const url= data.url


let desc= `


`🎵DARK CYBER SONG DOWNLOADER🎵`

📍title: ${data.title}
🧬description: ${}
🔮time: ${data.timestamp}
📌ago: ${data.ago}
📶views: $ {dta.views}

> 🎵MADE BY DARK CYBER🎵

await conn.sendMessage  (from,{ image:{url:data.thumbnail},caption: desc,quoted:mak);


// download audio

let down =await.fg.uta(url)
let download =down.dl_url


// send audio message 


await conn sendMessage  (from,{audio:{url:download url},mimetype:"audio/mpeg"},{quoted:mek})

    





} catch (e){
console.log(e)
reply (`${e}`)
}
    





