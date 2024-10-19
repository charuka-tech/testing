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
if(!q) return reply("❌ please give me url or name🌍")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let mala = `乂 *X - D O W N L O A D E R*

    *◦ Title:* ${mov.result.desc}
`
                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                { name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'Tap Here!',
               sections: [{
                  rows: [{
                     title: 'DOWNLOAD VIDEO SD QUALITY',
                     // description: `X`,
                     id: prefix + `xdl ${mov.result.video_sd}`
                  }, {
                     title: 'DOWNLOAD VIDEO HD QUALITY',
                     // description: `X`,
                     id: prefix + `xdl ${mov.result.video_hd}`
                  }, {
                     title: 'DOWNLOAD AUDIO',
                     // description: `X`,
                     id: prefix + `xmp3 ${mov.result.audio}`
		  }]
               }]
            })
         }]
	

        let message = {
            image: mov.result.thumb,
            header: '',
            footer: 'mizuki md',
            body: mala
        }   
return conn.sendButtonMessage(from, buttons, m, message) 
    
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
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
if(!q) return reply("❌ please give me url or name🌍")
const search = await yts(q)
const data = search.videos[0];
const url = data.url


let desc = `✦ 𝐌𝐈𝐙𝐔𝐊𝐈 𝐌𝐃 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐃𝐄𝐑 ✦
────────────────────
│➤ title: *${data.title}*

│➤ description: *${data.description}*

│➤ time: *${data.timestamp}*

│➤ ago: *${data.ago}*

│➤ views: *${data.views}*
────────────────────
> © 𝙼𝙰𝙳𝙴 𝙱𝚈 𝙼𝙸𝚉𝚄𝙺𝙸 𝙼𝙳

`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//==========================download video===================================

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document message

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})

await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> © 𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗠𝗜𝗭𝗨𝗞𝗜 𝗠𝗗"},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
