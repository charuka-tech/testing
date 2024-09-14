const config = require('../config')
const {cmd , commands} = require('../command')
const {runtime} = require('../lib/functions')

cmd({   name: "mute",
        fromMe: "isPublic",
        desc: "Mutes the group.",
        category: "group"
    },

    
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  
    async ({
        m, client, args
    }) => {

        if (!await m.isAdmin(client.user.id)) return m.reply("Admin access not conferred.")
        if (!await m.isAdmin(m.sender)) return m.reply("Only for authorized administrators.")
        await client.groupSettingUpdate(m.jid, 'announcement');
        return await m.reply("Messages restricted to group admins.");
    })


}catch(e){
console.log(e)
reply(`${e}`)
}
})

