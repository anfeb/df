// Diamond FF 						// Harga FF
let _diamond1 = '⦿ 5 💎';           let diamond1 = 'Rp 830 💰';
let _diamond2 = '⦿ 20 💎';           let diamond2 = 'Rp 3.000💰';
let _diamond3 = '⦿ 50 💎';           let diamond3 = 'Rp 7.000💰';
let _diamond4 = '⦿ 70 💎';           let diamond4 = 'Rp 9.500💰';
let _diamond5 = '⦿ 100 💎';           let diamond5 = 'Rp 14.000💰';
let _diamond6 = '⦿ 150 💎';           let diamond6 = 'Rp 23.000💰';
let _diamond7 = '⦿ 210 💎';           let diamond7 = 'Rp 28.800💰';
let _diamond8 = '⦿ 355 💎';           let diamond8 = 'Rp 47.000💰';
let _diamond9 = '⦿ 500 💎';         let diamond9 = 'Rp 67.000💰';
let _diamond10 = '⦿ 720 💎';         let diamond10 = 'Rp 92.000💰';
let _diamond11 = '⦿ 1000 💎';         let diamond11 = 'Rp 130.000💰';
let _diamond12 = '⦿ 1075 💎';         let diamond12 = 'Rp 140.000💰';
let _diamond13  = '⦿ 1440 💎';         let diamond13 = 'Rp 200.000💰';
let _diamond14 = '⦿ 2000 💎';         let diamond14 = 'Rp 260.000💰';
let _diamond15 = '⦿ 5000 💎';         let diamond15 = 'Rp 520.000💰';

let _diamond16 = '⦿ M. Mingguan';       let diamond16 = 'Rp 28.800💰';
let _diamond17 = '⦿ M. Bulanan';      let diamond17 = 'Rp 140.000💰';

const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix }) => {
	let pp = 'https://i.ibb.co/gS0XrNc/avatar-contact.png'
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	try {
		pp = await conn.getProfilePicture(who)
	} catch (e) {

	} finally {
	let shop = wm
	let prefix = usedPrefix
    let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: wm, orderTitle: `${shop}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

if (/^ff1?$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond1} dgn harga ${diamond1}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/2$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond2} dgn harga ${diamond2}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/3$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond3} dgn harga ${diamond3}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/4$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond4} dgn harga ${diamond4}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/5$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond5} dgn harga ${diamond5}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/6$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond6} dgn harga ${diamond6}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/7$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond7} dgn harga ${diamond7}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/8$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond8} dgn harga ${diamond8}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/9$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond9} dgn harga ${diamond9}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/10$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond10} dgn harga ${diamond10}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/11$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond11} dgn harga ${diamond11}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/12$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond12} dgn harga ${diamond12}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/13$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond13} dgn harga ${diamond13}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/14$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond14} dgn harga ${diamond14}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/15$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond15} dgn harga ${diamond15}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
		conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
		}
	}
}

handler.help = new Array(15).fill('ff').map((v, i) => v + (i + 1))
handler.tags = ['diamond']
handler.command = ['ff1','ff2','ff3','ff4','ff5','ff6','ff7','ff8','ff9','ff10','ff11','ff12','ff13','ff14','ff15']

module.exports = handler