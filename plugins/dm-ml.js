
// list diamond                                            // harga diamond
let _diamond1 = 'ā¦æ 86 š';           let diamond1 = 'Rp 22,000 š°';
let _diamond2 = 'ā¦æ 172 š';           let diamond2 = 'Rp 41,000 š°';
let _diamond3 = 'ā¦æ 257 š';           let diamond3 = 'Rp 62,000 š°';
let _diamond4 = 'ā¦æ 706 š';           let diamond4 = 'Rp 162,000 š°';
let _diamond5 = 'ā¦æ 2195 š';           let diamond5 = 'Rp 480,000 š°';
let _diamond6 = 'ā¦æ 3688 š';           let diamond6 = 'Rp 780,000 š°';
let _diamond7 = 'ā¦æ 5532 š';           let diamond7 = 'Rp 1,200,000 š°';
let _diamond8 = 'ā¦æ 9288 š';           let diamond8 = 'Rp 1,995,000 š°';

const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix }) => {
	let shop = wm
	let prefix = usedPrefix
    let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: wm, orderTitle: `${shop}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

if (/^ml1?$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond1} dgn harga ${diamond1}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/2$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond2} dgn harga ${diamond2}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/3$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond3} dgn harga ${diamond3}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/4$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond4} dgn harga ${diamond4}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/5$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond5} dgn harga ${diamond5}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/6$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond6} dgn harga ${diamond6}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/7$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond7} dgn harga ${diamond7}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/8$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond8} dgn harga ${diamond8}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
		conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
	}
}


handler.help = new Array(8).fill('ml').map((v, i) => v + (i + 1))
handler.tags = ['diamond']
handler.command = ['ml1','ml2','ml3','ml4','ml5','ml6','ml7','ml8']

module.exports = handler