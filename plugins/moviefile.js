const { cmd } = require('../command');
const sinhalasub = require('sinhalasub.lk');

cmd({
    pattern: "mv",
    desc: "download movies",
    category: "download",
    react: "🎥",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("*Please provide the movie name or title📍*");

        // Fetch movie data using sinhalasub.lk package
        const movie = await sinhalasub.lk(q);
        const data = movie.result;

        if (!data) return reply("Movie not found!");

        let desc = `───────────────────
✨𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥✨
───────────────────

╭───────────────╮  
 ➢📌 ᴛɪᴛʟᴇ_* ÷ ${data.title}
 ➢⭐ 𝗜𝗠𝗗𝗯_* ÷ ${data.imdb}
 ➢🎬 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆_* ÷ ${data.category.join(', ')}
 ➢🗓️ 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲_* ÷ ${data.date}
 ➢💻 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻_* ÷ ${data.description}

 Your Movie Download Request Uploading. You Can See The File In Document Format Below.
╰───────────────╯

> Qᴜᴇᴇɴ-ᴢᴀᴢɪᴇ-ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴʙᴛ
`;

        // Send movie details and image
        await conn.sendMessage(from, { image: { url: data.image }, caption: desc }, { quoted: mek });

        // Filter and prepare the 480p and 720p download options
        const downloadOptions = data.dl_links.filter(link => link.quality === "SD 480p" || link.quality === "HD 720p");

        for (const option of downloadOptions) {
            const downloadUrl = option.link;

            // Send the movie as a document with quality and size in the description
            await conn.sendMessage(from, {
                document: { url: downloadUrl },
                mimetype: "video/mp4",
                fileName: `${data.title} (${option.quality}).mp4`,
                caption: `> 𝗤𝗨𝗘𝗘𝗡-𝗭𝗔𝗭𝗜𝗘 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗡𝗕𝗧\n\nQuality: ${option.quality}\nSize: ${option.size}`
            }, { quoted: mek });
        }
    } catch (e) {
        reply(`${e}`);
    }
});
