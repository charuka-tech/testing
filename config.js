const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID||"qAl31ZLQ#pK8Ty94-OrZEVzyVgfJkFK1kREjRQCqPkB0izbMh_G4",
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
//--------------------------------//--------------------------------//
OMDB_API_KEY: process.env.OMDB_API_KEY="76cb7f39",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94775228949",
};
