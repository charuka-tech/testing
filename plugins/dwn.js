const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

//====your bot name=======
let cap = '┏━━━━━━━━━━━━━┓\n\n⬆️ *ᴅᴀʀᴋ ᴄʏʙᴇʀ ꜰʙ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*☑️\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✷▎☢ *ᴄʀᴇᴀᴛᴇʀ*: ᴍʀ ᴄʜᴀʀᴜᴋᴀ\n\n✷▎☏ *ᴄʀᴇᴀᴛᴇʀ ɴᴜᴍʙᴇʀ*:  wa.me//+94775228949\n\n┗━━━━━━━━━━━━━┛\n\n*ʏᴏᴜʀ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*...🔥🔥'

// <========FETCH API URL========>
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


//========================fb downloader=============================
cmd({
    pattern: "fb",
    react: "☑️",
    alias: ["facebook"],
    desc: "download fb videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*pleas give me fb url*🌍")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`)
        reply("*⬆️Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.hd }, mimetype: "video/mp4", caption: `- QUALITY HD\n\n> ${cap}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.sd }, mimetype: "video/mp4", caption: `- QUALITY SD \n\n> ${cap}` }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})


//===============================twitter dl (x)=============================
cmd({
    pattern: "twitter",
    react: "📑 ",
    alias: ["twdl"],
    desc: "download tw videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me twitter url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`)
        reply("*⬆️Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `- QUALITY HD\n\n> ${cap}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `- QUALITY SD \n\n> ${cap}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//=========================gdrive(google drive) dl==============================
cmd({
    pattern: "gdrive",
    react: "📬",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me gdrive url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("*🧚Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: cap }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//=============================mediafire dl================================
cmd({
    pattern: "mediafire",
    react: "🗳️",
    alias: ["mfire"],
    desc: "download mfire files",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me mediafire url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`)
        reply("*🧚Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: cap }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})


