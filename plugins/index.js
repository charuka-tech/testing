const axios = require("axios"); 
 const mongoose = require('mongoose'); 
 const CryptoJS = require("crypto-js"); 
const makeWASocket = require("@whiskeysockets/baileys").default
const { delay ,Browsers,MessageRetryMap,fetchLatestBaileysVersion,WA_DEFAULT_EPHEMERAL,useMultiFileAuthState,makeInMemoryStore } = require("@whiskeysockets/baileys")
    const pino = require("pino");
const request = require('@cypress/request');
// replace the value below with the Telegram token you receive from @BotFather

 const UserSchema = new mongoose.Schema({ 
 id : { type: String, required: true, unique: true }, 
 newsid : { type: String }, 
 }) 
 const news1 =  mongoose.model("news1", UserSchema) 
  
  
         async function XAsena() { 
             mongoose.connect('mongodb+srv://Jithula:Jithula@cluster0.i9f4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0') 
   .then(() => console.log('✅Connected Sucess!✅')); 
  
             const { state, saveCreds } = await useMultiFileAuthState(__dirname+'/session')
            const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
            const { version, isLatest } = await fetchLatestBaileysVersion();
            try {
                const session = makeWASocket({
                    logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['Jithula', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: version,
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return {
                    conversation: 'An Error Occurred, Repeat Command!'
                }
            }
        })
        store.bind(session.ev)
  
                 //------------------------------------------------------ 
  
                 session.ev.on("connection.update", async (s) => { 
                     const { 
                         connection, 
                         lastDisconnect 
                     } = s 
                     if (connection == "open") { 
  
 async function news() { 
  
     let response = await fetch('https://hirunews-api-x.cleverapps.io/api/latest'); 
     let data = await response.json(); 
let mg =`*${data.title}* 
●⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋●  
${data.desc} 
●⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋● 
*${data.time}*
●⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋●

*🗞️ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜɪʀᴜ ɴᴇᴡꜱ🗞️*

🪩 *ɢʀᴏᴜᴘ ʟɪɴᴋ*: *https://chat.whatsapp.com/JPgILcY8jPB3Xx1Z19aenE*

> ᴍᴀᴅᴇ ʙʏ ᴍʀ ᴄʜᴀʀᴜᴋᴀ 

●⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌●`
         let newss = await news1.findOne({ id: '123' }) 
  
     if (!newss) { 
         await new news1({ id: '123', newsid: data.id, events:'true' }).save() 
           await session.sendMessage("120363320172873548@g.us",{image:{url: data.image}, caption:mg},{ ephemeralExpiration: WA_DEFAULT_EPHEMERAL })
     } else { 
         if(newss.newsid == data.id )  
          { 
           return 
          } 
          else{ 
             await news1.updateOne({ id: '123' }, { newsid : data.id, events:'true'}) 
             await session.sendMessage("120363320172873548@g.us",{image:{url: data.image}, caption:mg},{ ephemeralExpiration: WA_DEFAULT_EPHEMERAL })
          } 
  
     } 
  
 } 
 setInterval(news, 10000);  
  
                     } 
                     if ( 
                         connection === "close" && 
                         lastDisconnect && 
                         lastDisconnect.error && 
                         lastDisconnect.error.output.statusCode != 401 
                     ) { 
                         XAsena() 
                     } 
                 }) 
                 session.ev.on('creds.update', 
                     saveCreds) 
          
session.ev.on("messages.upsert", 
                     () => {}) 
  
             }catch(err) { 
                 console.log( 
                     err + " 😪Error Occured Please report to Owner and Stay tuned" 
                 ); 
             } 
  
  
         } 
         XAsena()
