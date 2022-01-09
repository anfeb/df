let simple = require('./lib/simple')
let util = require('util')
let fs = require('fs')
let chalk = require('chalk')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    if (global.db.data == null) await global.loadDatabase()
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!('registered' in user)) user.registered = false
          if (!user.registered) {
            if (!('name' in user)) user.name = this.getName(m.sender)
            if (!isNumber(user.nim)) user.age = -1
            if (!isNumber(user.regTime)) user.regTime = -1
          }
          if (!('banned' in user)) user.banned = false
          if (!('level' in user)) user.level = 0

        } else global.db.data.users[m.sender] = {
          exp: 0,
          limit: 10,
          registered: false,
          name: this.getName(m.sender),
          age: -1,
          regTime: -1,
          banned: false,
          level: 0,
        }

        let chat = global.db.data.chats[m.chat]
        if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = true
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('antiLink' in chat)) chat.antiLink = false
          if (!('antispam' in chat)) chat.antispam = true
          if (!('autoread' in chat)) chat.autoread = false
          if (!('delete' in chat)) chat.delete = true
          if (!('desc' in chat)) chat.desc = true
          if (!('useDocument' in chat)) chat.useDocument = false
          
        } else global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: true,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          antiLink: false,
          antispam: true,
          autoread: false,
          delete: true,
          desc: true,
          useDocument: false,
        }

        let settings = global.db.data.settings[this.user.jid]
        if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
        if (settings) {
          if (!'anon' in settings) settings.anon = true
          if (!'anticall' in settings) settings.anticall = true
          if (!'group' in settings) settings.group = false
          if (!'private' in settings) settings.private = false
          if (!'self' in settings) settings.self = false
        } else global.db.data.settings[this.user.jid] = {
          anon: true,
          anticall: true,
          group: false,
          private: false,
          self: false,
        }
      } catch (e) {
        console.error(e)
      }
      if (!m.fromMe && db.data.settings[this.user.jid].self) return
      if (db.data.settings[this.user.jid].private && m.chat.endsWith('g.us')) return
      // if (m.chat.endsWith('broadcast')) return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 20)

      let usedPrefix
      let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isPrems = isROwner || db.data.users[m.sender].premium
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // data pengguna
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // data kamu (sebagai bot)
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // apakah pengguna admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // apakah kamu (sebagai bot) admin?
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
            let chat = global.db.data.chats[m.chat]
            let user = global.db.data.users[m.sender]
            let set = global.db.data.settings[this.user.jid]
            if ((!isPrems || !m.isGroup) && set.group) return
            if (!(['g-enable.js', 'o-unbanchat.js', 'i-donate.js', 'i-owner.js', 'i-info.js'].includes(name) || isPrems) && chat && chat.isBanned) return
            if (!(['g-enable.js', 'o-unbanchat.js', 'i-donate.js', 'i-owner.js', 'i-info.js'].includes(name) || isPrems) && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // keduanya owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // owner sebnarnya
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // no owner / yang numpang
            fail('owner', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // hanya grup
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // kamu (sebagai bot) admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // pengguna admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // chat pribadi
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // daftar
            fail('unreg', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 0 // pendapatan XP tiap perintah
          if (xp > 200) m.reply('Ngecit -_-') // awokawok
          else m.exp += xp
          if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
            await this.send2Button(m.chat, `limit kamu habis, cara belinya ketik *${usedPrefix}buy* atau klik tombol dibawah`, wm, 'Beli', '.buy', 'Beli Semua', '.buyall', m)
            continue // limit habis
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e.message ? e.message : e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            // if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
          }
          break
        }
      }
    } finally {
      let user, stats = global.db.data.stats
      if (m) {
        if (m.sender && (user = global.db.data.users[m.sender])) {
          user.exp += m.exp
          //user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
      if (db.data.chats[m.chat].autoread) await this.chatRead(m.chat).catch(_ => _)
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.db.data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            if (user.includes(this.user.jid)) return // biar ngga nyambut diri sendiri, kalo simulasi harus tag yang lain
            let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
            try {
              pp = await this.getProfilePicture(user)
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'selamat datang, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
                (chat.sBye || this.bye || conn.bye || 'sampai jumpa, @user!')).replace(/@user/g, '@' + user.split('@')[0])
              let wel = API('hardianto', '/api/welcome3', {
                profile: pp,
                name: this.getName(user),
                bg: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                namegb: this.getName(jid),
                member: groupMetadata.participants.length
              })
              let lea = API('hardianto', '/api/goodbye3', {
                profile: pp,
                name: this.getName(user),
                bg: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                namegb: this.getName(jid),
                member: groupMetadata.participants.length
              })
              await this.sendButtonLoc(jid, action === 'add' ? wel : lea, text, wm, action === 'add' ? 'selamat datang' : 'sampai jumpa', '.intro')
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user sekarang admin')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user sekarang bukan admin')
        text = text.replace(/@user/g, '@' + participants[0].split('@')[0])
        if (chat.detect) this.reply(jid, text)
        break
    }
  },
  async delete(m) {
    if (m.key.fromMe) return
    let chat = global.db.data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.sendButton(m.key.remoteJid, `
terdeteksi @${m.participant.split`@`[0]} menghapus pesan
`.trim(), wm, 'matikan fitur ini', '.0 antidelete', m.message)
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    if (!db.data.settings[this.user.jid].anticall) return
    let jid = json[2][0][1]['from']
    let isOffer = json[2][0][2][0][0] == 'offer'
    let users = global.db.data.users
    let user = users[jid] || {}
    if (user.whitelist) return
    if (jid && isOffer) {
      const tag = this.generateMessageTag()
      const nodePayload = ['action', 'call', ['call', {
        'from': this.user.jid,
        'to': `${jid.split`@`[0]}@s.whatsapp.net`,
        'id': tag
      }, [['reject', {
        'call-id': json[2][0][2][0][1]['call-id'],
        'call-creator': `${jid.split`@`[0]}@s.whatsapp.net`,
        'count': '0'
      }, null]]]]

      this.sendJSON(nodePayload, tag)
    }
  },
  async GroupUpdate({ jid, desc, descId, descTime, descOwner, announce }) {
    if (!db.data.chats[jid].desc) return
    if (!desc) return
    let caption = `
@${descOwner.split`@`[0]} baru saja mengganti deskripsi grup.

${desc}
        `.trim()
    this.sendButton(jid, caption, wm, 'matikan fitur ini', '.0 desc')

  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'perintah ini hanya bisa digunakan oleh _*Pemilik Bot*_',
    owner: 'perintah ini hanya bisa digunakan oleh _*Owner Bot*_',
    premium: 'perintah ini hanya untuk pengguna _*Premium*_',
    group: 'perintah ini hanya bisa digunakan digrup',
    private: 'perintah ini hanya bisa digunakan dichat pribadi',
    admin: 'perintah ini hanya untuk admin grup',
    botAdmin: 'jadikan bot sebagai admin untuk menggunakan perintah ini',
    unreg: 'daftar untuk menggunakan perintah ini:\n\nformat:\n*.reg nama.umur*\n\ncontoh:\n*.reg sinta cantik.20*',
  }[type]
  if (msg) return m.reply(msg)
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("memperbaharui 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
