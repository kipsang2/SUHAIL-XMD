const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254742001138";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_23_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU3LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDEyLFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQxLFxuICAgICAgICA3NixcbiAgICAgICAgMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJISzRHdmljMjJ5WjZTR1lXY3NyWmVHVnFyaWdVYXhKdk9EY2Q3dld1M2NrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyWnNadUhtWFRmYTZqQVVZOE9VTkNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBmOGQyN2NmLWRiZTQtNGE0My1iMTY0LTY3ZGRlMmM0MGM5N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDIyOSxcbiAgICAgIDEzNSxcbiAgICAgIDIwMyxcbiAgICAgIDI0NCxcbiAgICAgIDIwMSxcbiAgICAgIDMyLFxuICAgICAgMTU2LFxuICAgICAgMTA2LFxuICAgICAgMTc3LFxuICAgICAgMTAwLFxuICAgICAgMjU1LFxuICAgICAgMjMxLFxuICAgICAgNixcbiAgICAgIDQxLFxuICAgICAgMjEwLFxuICAgICAgNDMsXG4gICAgICAxNjgsXG4gICAgICAzNCxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDY2LFxuICAgICAgMTAzLFxuICAgICAgMTQyLFxuICAgICAgMTg1LFxuICAgICAgNzgsXG4gICAgICAyMTMsXG4gICAgICAxNDksXG4gICAgICAyNTIsXG4gICAgICAxMyxcbiAgICAgIDE1MyxcbiAgICAgIDE4MyxcbiAgICAgIDE1MSxcbiAgICAgIDIwOSxcbiAgICAgIDE4OSxcbiAgICAgIDI0MCxcbiAgICAgIDMwLFxuICAgICAgMTcyLFxuICAgICAgNDQsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkE4N0c2UkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MjAwMTEzODoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIllvdXJOdXJzZVwiLFxuICAgIFwibGlkXCI6IFwiMTY5MjgyMzk0NzA2MTUyOjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqczlkZ0RFTVB3K0xjR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT1F4Q3NqNndWTVU2M2thTzhLampQem9aSmRmd3BGV0daOVZCanMxOHJBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqeXAwNjUwbVQwUHl5MjdNTVBiQzdtOVRDS3VBSXRSNzVpTitNQ3hxRGFvanZ4b0ZBYTFXMll4anpqbmRtcjRLYmpmQkRBWWZTRGtOc1NhN0lFNEdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvMFNKNklvS1lBcGg3aThyRnQ2ZE5ESk5EYTErZlhtSklzUGYzRVpyR1hSOHBDaENidjhxQU1pbVAxT0hiY2F2c0xuaEx0QUtwT3lXUVh1WE1xZWNBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDIwMDExMzg6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc5MzY1ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLc2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtzai5qc29uIjogIntcImtleURhdGFcIjpcIjlWUjlPMStwZnRxN3cvREhJZkZIL2dMMEd0WjZ1eGE3SUIveGxYaUVjdnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTkxNzg2NTA0LFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc5MzY0NjA4NTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
