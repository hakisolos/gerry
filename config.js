//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/9etcJPe";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0htRENQdGlkTDhGY09XT016QXZSUCtpczZERkNGc01GN0xRSmV4ek1IQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3FyQUhHRFNZOXVyRFVrOXl1YjdhZlN3cUtaTHJFQittcS9QVFQ1Vy8wYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSkMrTW9vV2JPYkE3NVN4U0o3SkZ6NFBuNUZldXU5TU5rS29Hek54MW0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZHVVREtkd1V1REpxMXpXSjc4SnNWV2lZK2xRa1JmYmVlSlA3b2IrZ21zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVPUkxvb3hhRXpLMzRXVXlZYjFjMStnL0RnR1VYODB3VG5QZTJrWlBBSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikczc205RjZ0OUN4V01Zczc4cTB6V0NWSGxxNThVREdoNzRxL1pzLzdCM0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0IzdVU5VDQzK29ZTFhOdEZlM25RK0JlR3hHZXVDQ0VVUG5YdXlFVlFXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY21ZK0dJVDVSTm1MRDhBaE1iS3hpV0N5Mkg2SDZTQXdJeVJuMTR1STZFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZLSmJyNERWM2lGaGhjNExZdHREbWg0U002SU1xV0xiSmpjb2xiT0p4SG1MY0tRbDY2enBURDI5YVNuaFFhbWVoR1dRTXl5R1hIMVcyRW5tZS96SkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6IkUxc1dqa2ZiOEZ4UWRscU9lRGhJQ2U1aGFTekFyRU1PNy9vVjlac0E5WUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Img0aVdmY2RIUzNpaEMyNDUyOFNYdmciLCJwaG9uZUlkIjoiNGVmZTlhMWYtOWExYi00YTY4LWIxZDEtZTM4Njg1NjY4YzU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOVUt0VUxEOCthVW5NRUttcXdSQkowK2xMND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIV3Y5RWpadHIzeUFEQ2tCcHVHR2l3RzlpcTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjI5VkVSVzciLCJtZSI6eyJpZCI6IjIzNDkwNzE5NDU2MjI6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJHb2pvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKSGRsS2NERU9YZ2xyZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKb096VmMyNEdWQmpTZHg5OGZCSGR1Y2ZlY0VhY3Z3TnJRaUt1dS8veEYwPSIsImFjY291bnRTaWduYXR1cmUiOiJoZlgycFpFNjRaWVNZenJXMFJMQ3NhbzdNbmJtQWZmSlRZOUkzMzNwTW92VHF2TmN6UGN6SGpGSXFadHQyZnR5aTRUa3VsSkpsRXRBMmh0M0krRTdBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNDNQQlFLdWE5eUt0eGtwOWhsblFWclJTeVBBMFk1bWM3c05kQUQ4K3Y3QmV4Z1hkZC9mNGtnQjg4QVo3VTlLVlVWZ1RKb0Q0QTV2ODEzYm10cWlJQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDcxOTQ1NjIyOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2FEczFYTnVCbFFZMG5jZmZId1IzYm5IM25CR25MOERhMElpcnJ2LzhSZCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODQyNjA5OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGaGcifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
