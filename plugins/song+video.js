const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yts-search')

cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try}

    
if(!q) return reply ("please give me url or name")

const search= await yts (q)
const data= search.videos[0]
const url= data.url


let desc= `


> 🎵DARK CYBER SONG DOWNLOADER🎵

📍title: ${data.title}
🧬description: ${data.description}
🔮time: ${data.timestamp}
📌ago: ${data.ago}
📶views: ${data.views}

> 🎵MADE BY DARK CYBER🎵 `

await conn.sendMessage  (from,{ image:{url:data.thumbnail},caption: desc,quoted:mak);


// download audio

let down =await.fg.uta(url)
let download =download url.dl_url


// send audio + decumet message 


await conn sendMessage  (from,{audio:{url:download url},mimetype:"audio/mpeg"},{quoted:mek})
await conn sendMessage  (from,{document:{url:download url},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"MADE BY DARK CYBER MD"},{quoted:mek})


    





} catch (e){
console.log(e)
reply (`${e}`)
}
})
    





//=============================VIDEO-DL==========================





cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try}

    
if(!q) return reply ("please give me url or name")

const search= await yts (q)
const data= search.videos[0]
const url= data.url


let desc= `


> 📽️DARK CYBER VIDEO DOWNLOADER📽️

📍title: ${data.title}
🧬description: ${data.description}
🔮time: ${data.timestamp}
📌ago: ${data.ago}
📶views: ${data.views}

> 🎵MADE BY DARK CYBER🎵 `

await conn.sendMessage  (from,{ image:{url:data.thumbnail},caption: desc,quoted:mak);


// download video

let down =await.fg.uta(url)
let download =download url.dl_url


// send video + document message 


await conn sendMessage  (from,{video:{url:download url},mimetype:"video/mp4"},{quoted:mek})
await conn sendMessage  (from,{document:{url:download url},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"MADE BY DARK CYBER MD"},{quoted:mek})



    





} catch (e){
console.log(e)
reply (`${e}`)
}
})
