const {cmd , commands} = require('../command')
const fg = require(`api-dylux`)
const yts = require(`yt-search`)

cmd({
    pattern: "song",
    react: "🎧",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url of name")
const search = await yts(q)
const data = search.videos[0];
const url = data.url


let desc = `


 🎶𝐃𝐀𝐑𝐊 𝐂𝐘𝐁𝐄𝐑 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑🎶

> 📍title: ${data.title}
> 🧬description: ${data.description}
> 🔮time: ${data.timestamp}
> 📌ago: ${data.ago}
> 📶views: ${data.views}

 🎧𝐌𝐀𝐃𝐄 𝐁𝐘 𝐃𝐀𝐑𝐊 𝐂𝐘𝐁𝐄𝐑🎧

`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption: "📩MADE BY DARK CYBER"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})


//==========video-dl=======

cmd({
    pattern: "video",
    react: "📽️",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or name🌍")
const search = await yts(q)
const data = search.videos[0];
const url = data.url


let desc = `


 📽️𝐃𝐀𝐑𝐊 𝐂𝐘𝐁𝐄𝐑 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑📽

> 📍title: ${data.title}
> 🧬description: ${data.description}
> 🔮time: ${data.timestamp}
> 📌ago: ${data.ago}
> 📶views: ${data.views}

 📽️𝐌𝐀𝐃𝐄 𝐁𝐘 𝐃𝐀𝐑𝐊 𝐂𝐘𝐁𝐄𝐑📽️

`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document message

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"📩 MADE BY DARK CYBER"},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
