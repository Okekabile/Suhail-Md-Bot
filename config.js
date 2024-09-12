const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035375399";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_05_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgMjMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWo0WDVKUzJGVUl2VWhqaWxlbE1YWk1Hb2xhUUdWeVlaMnJpYlczOUl2MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ0l4ZUstQWNTTzJ5LWl5QTZpbDRGZ1wiLFxuICBcInBob25lSWRcIjogXCI1YWQ1ZDc3Zi1lOTEzLTQ4MTUtODdmMC0zY2U4N2I0ZDE0OTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk4LFxuICAgICAgMTk0LFxuICAgICAgMTgyLFxuICAgICAgMyxcbiAgICAgIDEzNCxcbiAgICAgIDIyOSxcbiAgICAgIDEzMixcbiAgICAgIDE4NCxcbiAgICAgIDI0NCxcbiAgICAgIDI0MyxcbiAgICAgIDkwLFxuICAgICAgODksXG4gICAgICAxMjEsXG4gICAgICA0MyxcbiAgICAgIDE2NyxcbiAgICAgIDk0LFxuICAgICAgOTAsXG4gICAgICAxODUsXG4gICAgICA4OCxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxMDksXG4gICAgICAyNyxcbiAgICAgIDExNCxcbiAgICAgIDEwNCxcbiAgICAgIDIyMixcbiAgICAgIDg1LFxuICAgICAgMTU3LFxuICAgICAgNTAsXG4gICAgICAxNDIsXG4gICAgICAxMTksXG4gICAgICAxNyxcbiAgICAgIDQ3LFxuICAgICAgMCxcbiAgICAgIDYsXG4gICAgICA1NCxcbiAgICAgIDk4LFxuICAgICAgMTY2LFxuICAgICAgMjI1LFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIksxNTE3UFNGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM1Mzc1Mzk5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTdWNjZXNzXCIsXG4gICAgXCJsaWRcIjogXCI2MjY3Njk2MTA4MzQzNDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6ZmtkUUdFSnpMamJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwianJmZHQ5RnZhRlNwREUyY2hrTzhVdzAveTRVaXJkYlEvSW8ydkZEUS9qST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhS2tuTk56MlhERGg1UUZ5cG5ESnlxT2FqZXNCL1pRME9RY0g5ck1IQ2VwUDlWN0N1bUVYWVJMNWw2M2dVMmR0N0xvY09scW5tTjF3d2hRZmtGRHBCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCMGFZWlJFeEdEbUY3R2JKYnV2VjVnYzJubTB1THRZSWQxWHlaZXNpUFl1M1dvVDhBZlBhOCtjMVhzZzRPeURoeEpYYzBQQ1ZIaGphbENtM3g2N0dqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM1Mzc1Mzk5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MTc4NzE5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
