const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  const optionsFull = `╭━〔  𝐒𝐀𝐊𝐔𝐑𝐀 𝐁𝐎𝐓 💫  〕⬣
┣☆ !enable welcome
┣☆ !disable welcome
┣☆ !enable privado
┣☆ !disable privado
┣☆ !enable antilink
┣☆ !disable antilink
┣☆ !enable antilink2
┣☆ !disable antilink2
┣☆ !enable detect2
┣☆ !disable detect2
┣☆ !enable restrict
┣☆ !enable autoread
┣☆ !disable autoread
┣☆ !enable autosticker
┣☆ !disable autosticker
┣☆ !enable antiviewonce
┣☆ !disable antiviewonce
┣☆ !enable antitoxic
┣☆ !disable antitoxic
┣☆ !enable reaction
┣☆ !disable reaction
┣☆ !enable simsimi
┣☆ !disable simsimi
╰━━━━━━━━━━━━⬣`.trim();

const isEnable = /true|enable|(turn)?on|1/i.test(command);
const chat = global.db.data.chats[m.chat];
const user = global.db.data.users[m.sender];
const bot = global.db.data.settings[conn.user.jid] || {};
const type = (args[0] || '').toLowerCase();
let isAll = false; const isUser = false;
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn);
throw false;
}
chat.welcome = isEnable;
break;
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!isAdmin) {
global.dfail('admin', m, conn);
throw false;
}
chat.detect = isEnable;
break;
case 'detect2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!isAdmin) {
global.dfail('admin', m, conn);
throw false;
}
chat.detect2 = isEnable;
break;
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.simi = isEnable;
break;
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiporno = isEnable;
break;
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.delete = isEnable;
break;
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antidelete = isEnable;
break;
case 'public':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['self'] = !isEnable;
break;
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiLink = isEnable;
break;
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiLink2 = isEnable;
break;
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiviewonce = isEnable;
break;
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.modohorny = isEnable;
break;
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.modoadmin = isEnable;
break;
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
bot.autosticker = isEnable;
break;
case 'autoread':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
global.opts['nyimak'] = isEnable;
break;
case 'autoread':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('rowner', m, conn);
throw false;
}
bot.autoread2 = isEnable;
//global.opts['autoread'] = isEnable;
break;
case 'pconly':
case 'privateonly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['pconly'] = isEnable;
break;
case 'gconly':
case 'grouponly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['gconly'] = isEnable;
break;
case 'swonly':
case 'statusonly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['swonly'] = isEnable;
break;
case 'anticall':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.antiCall = isEnable;
break;
case 'antiprivado':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.antiPrivate = isEnable;
break;
case 'modejadibot':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
bot.modejadibot = isEnable;
break;
case 'antispam':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.antispam = isEnable;
break;
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiToxic = isEnable;
break;
case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break;
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiTraba = isEnable;
break;
case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break;
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn); 
throw false;
}
}
chat.antiArab = isEnable;
break;
case 'antiarabes2':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiArab2 = isEnable;
break;
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: fkontak});
throw false;
}
await conn.reply(m.chat, `╭─⬣「 𝐒𝐀𝐊𝐔𝐑𝐀 𝐁𝐎𝐓 😊 」⬣
┃֪࣪💫 𝙾𝙿𝙲𝙸𝙾𝙽: ${type} 
│━━━━━━━━━━━━━━━
│🟢 𝙴𝚂𝚃𝙰𝙳𝙾: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
│━━━━━━━━━━━━━━━
│⚙️ 𝙿𝙰𝚁𝙰: ${isAll ? '𝚂𝙰𝙺𝚄𝚁𝙰𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'} 
╰─⬣`, fkontak, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: packname,
body: `🍒 Bienvenido ` + nombre, previewType: 0, thumbnail: imagen6, sourceUrl: global.md}}})} 

handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;
export default handler;