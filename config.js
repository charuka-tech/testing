const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID||"Wr4FEJJL#9Mec3asX3Z7Vw3FUGYcHadaBAC_rsER2fDTYqDYmL0o",
