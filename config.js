const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID||"Wr4FEJJL#9Mec3asX3Z7Vw3FUGYcHadaBAC_rsER2fDTYqDYmL0o",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/900435c6d3157c98c3c88.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hey dear i m online
╰━━━━━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━━━━━
┃🤖bot owner mr charuka
┃👤bot number 94775228949
╰━━━━━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━━━━━
┃MADE BY DARK CYBER MD
╰━━━━━━━━━━━━━━━━━━━,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
