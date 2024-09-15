const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID||"0msmTJrD#teQpWm4dYfiWwwRve1eLSYahclmtK79OgFGgBJ4JAcA",
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json",

};
