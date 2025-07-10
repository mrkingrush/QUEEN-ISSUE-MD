const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *MR RUSHMIKA*

> *QUEEN ISSUE_MD REPO:*
*|* *https://github.com/mrkingrush/QUEEN-ISSUE-MD*

> *SUPPORT CHENNAL:*
*|* *https://whatsapp.com/channel/0029Vb0Anqe9RZAcEYc2fT2c*
> * *SYSTEM SETTING:*
*|* *ᴍʀ ʀᴜꜱʜ*
*|* *94741835275*
*╰──────────────●●►*

> *CREATED BY MR RUSH*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "QUEEN ISSUE",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'QUEEN ISSUE',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/mrkingrush" ,
thumbnailUrl: "https://files.catbox.moe/b2rrzo.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
