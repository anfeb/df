let handler = async (m, { conn, args, participants }) => {
    let grup = await conn.getName(m.key.remoteJid)
    let mimin = m.isGroup ? NgeriAtmin(participants) : ''
    let txt = `*Tag Admin*\n\n`
    for (let min of mimin) {
    txt += `➥ @${min.split('@')[0]}\n`
      }
conn.reply(m.chat, txt, m, { contextInfo: { mentionedJid: mimin }})
}
handler.help = ['tagadmin']
handler.tags = ['main']
handler.command = /^(adminlist|listadmin|tagadmin)$/i
handler.group = true
handler.register = false
module.exports = handler

const NgeriAtmin = (participants) => {
        atminn = []
	for (let b of participants) {
             b.isAdmin ? atminn.push(b.jid) : ''
	}
	return atminn
}
