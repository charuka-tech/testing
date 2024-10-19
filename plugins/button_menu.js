const { OWNER_NAME, BOT_NAME } = require("../config");

const plugins = require("../lib/plugins");



cmd({

  pattern: "panel", // Command pattern

  fromMe: isPrivate, // Need to respond for everyone's message? true: only from sudo numbers, false: from everyone, isPrivate: same as false but will be considered as true if worktype is private

  desc: "Button Commands Panel", // Description of the command

  usage: "#panel",

  type: "user", // Command type

}, async (conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    let { prefix } = message;

      

    let data = {

        jid: message.jid,

        button: [

          {

            type: "list",

            params: {

              title: "COMMANDS",

              sections: [

                {

                  title: "OMINDU-MD COMMAND LIST",

                  rows: [

                    {

                      title: "DOWNLOAD",

                      description: "OMINDU-MD DOWNLOAD COMMANDS",

                      id: "#downloadmenu",

                    },

                    {

                        title: "SEARCH",

                        description: "OMINDU-MD SEARCH COMMANDS",

                        id: "#searchmenu",

                      },

                      {

                        title: "CONVERTER",

                        description: "OMINDU-MD CONVERTER COMMANDS",

                        id: "#convertermenu",

                      },

                  ],

                },

              ],

            },

          },

        ],

        header: {

          title: "```OMINDU-MD```",

          subtitle: "OMINDU-MD COMMANDS",

          hasMediaAttachment: false,

        },

        footer: {

          text: "POWERD BY OMINDU-MD",

        },

        body: {

          text: `╭━━━━━ᆫ ${BOT_NAME} ᄀ━━━

  ┃ ⎆  *OWNER*:  ${OWNER_NAME}

  ┃ ⎆  *PREFIX*: ${prefix}

  ┃ ⎆  *COMMANDS*: ${plugins.commands.length} 

  ╰━━━━━━━━━━━━━━━\n`,

        },

      };

      return await message.sendMessage(message.jid, data, {}, "interactive");


