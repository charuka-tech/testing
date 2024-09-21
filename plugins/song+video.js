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
if(!q) return reply("please give me url or name🌍")
const search = await yts(q)
const data = search.videos[0];
const url = data.url


let desc = `◆𝙳𝙰𝚁𝙺 ᴍɪᴢᴜᴋɪ ᴍᴅ 𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁◆
────────────────────
│➤ title: *${data.title}*

│➤ description: *${data.description}*
  
│➤ time: *${data.timestamp}*

│➤ ago: *${data.ago}*
  
│➤ views: *${data.views}*
────────────────────
©  𝙼𝙰𝙳𝙴 𝙱𝚈 𝙼𝙸𝚉𝚄𝙺𝙸 𝙼𝙳

`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//===========================download audio===================================

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"> © ᴹᴬᴰᴱ ᴮʸ ᴹᴵᶻᵁᴷᴵ ᴹᴰ"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})


//================================video-dl=====================================

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


let desc = `◆𝙼𝙸𝚉𝚄𝙺𝙸 𝙼𝙳 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁◆
────────────────────
│➤ title: *${data.title}*

│➤ description: *${data.description}*

│➤ time: *${data.timestamp}*

│➤ ago: *${data.ago}*

│➤ views: *${data.views}*
────────────────────
© 𝙼𝙰𝙳𝙴 𝙱𝚈 𝙼𝙸𝚉𝚄𝙺𝙸 𝙼𝙳

`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//==========================download video===================================

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document message

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})

await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> © ᴹᴬᴰᴱ ᴮʸ ᴹᴵᶻᵁᴷᴵ ᴹᴰ"},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
