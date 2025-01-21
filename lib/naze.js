process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
/*
 * Recode By Sychyy @Naze
 * Follow https://github.com/sychyy
 * Whatsapp : https://wa.me/6287862997267
 */
require('./settings');
require('./setown');
const sharp = require('sharp');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const gis = require('g-i-s');
const Jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const { youtube } = require("btch-downloader")
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const {
	JSDOM
} = require('jsdom');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const {
	performance
} = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const {
	Akinator,
	AkinatorAnswer
} = require('aki-api');
const {
	exec,
	spawn,
	execSync
} = require('child_process');
const {
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	getBinaryNodeChildren,
	generateWAMessageContent,
	MessageType,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	getContentType
} = require('@whiskeysockets/baileys');
const prem = require('./src/premium');
const {
	LoadDataBase
} = require('./src/message');
const {
	TelegraPh,
	UguuSe
} = require('./lib/uploader');
const {
	toAudio,
	toPTT,
	toVideo
} = require('./lib/converter');
const {
	imageToWebp,
	videoToWebp,
	writeExif
} = require('./lib/exif');
const {
	rdGame,
	iGame,
	tGame,
	gameSlot,
	gameCasinoSolo,
	gameMerampok,
	gameBegal,
	daily,
	buy,
	setLimit,
	addLimit,
	addUang,
	setUang,
	transfer
} = require('./lib/game');
const {
	pinterest,
	pinterest2,
	wallpaper,
	remini,
	wikimedia,
	quotesAnime,
	multiDownload,
	yanzGpt,
	happymod,
	umma,
	ringtone,
	jadwalsholat,
	styletext,
	tiktokDl,
	facebookDl,
	instaStory,
	bk9Ai,
	ytMp3,
	mediafireDl,
	quotedLyo,
	simi
} = require('./lib/screaper');
const {
	unixTimestampSeconds,
	generateMessageTag,
	processTime,
	webApi,
	getRandom,
	getBuffer,
	fetchJson,
	runtime,
	clockString,
	sleep,
	isUrl,
	getTime,
	formatDate,
	tanggal,
	formatp,
	jsonformat,
	reSize,
	toHD,
	logic,
	generateProfilePicture,
	bytesToSize,
	checkBandwidth,
	getSizeMedia,
	parseMention,
	getGroupAdmins,
	readFileTxt,
	readFileJson,
	getHashedPassword,
	generateAuthToken,
	cekMenfes,
	generateToken,
	batasiTeks,
	randomText,
	isEmoji,
	getTypeUrlMedia,
	pickRandom,
	getAllHTML
} = require('./lib/function');
// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
// Database Game
let suit = db.game.suit = []
let menfes = db.game.menfes = []
let tekateki = db.game.tekateki = []
let akinator = db.game.akinator = []
let tictactoe = db.game.tictactoe = []
let tebaklirik = db.game.tebaklirik = []
let kuismath = db.game.kuismath = []
let tebaklagu = db.game.tebaklagu = []
let tebakkata = db.game.tebakkata = []
let family100 = db.game.family100 = []
let susunkata = db.game.susunkata = []
let tebakbom = db.game.tebakbom = []
let tebakkimia = db.game.tebakkimia = []
let caklontong = db.game.caklontong = []
let tebaknegara = db.game.tebaknegara = []
let tebakgambar = db.game.tebakgambar = []
let tebakepep = db.game.tebakepep = []
let tebakbendera = db.game.tebakbendera = []
let typemenu = "s4";
let typoDetectionEnabled = true; // Status default: aktif
let autoAi = false; // Default mati
// Variabel penyimpanan sesi chat rahasia
let secretChat = {};
// Penyimpanan status autoai2 (gunakan database jika diperlukan)
let autoAIStatus = false;
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
// Variabel global untuk menyimpan prompt default
let llamaPrompt = "ngobrol singkat dengan bahasa indonesia tidak baku dan kamu adalah SychyyBotz";
let userPrompt = "kalo jawab pake bahasa indonesia ga baku aja dan kamu adalah SychyyBotz"; // Default prompt
    
// Fungsi Menambahkan Command
const addCmd = (id, command) => {
	// Konversi hash ke Base64
	const base64Hash = Buffer.from(id).toString('base64');
	const obj = {
		id: base64Hash,
		chats: command
	}; // Simpan dengan Base64
	_scommand.push(obj);
	fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand, null, 2)); // Simpan ke database
};
// Fungsi Mendapatkan Posisi Command
const getCommandPosition = (id) => {
	const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
	let position = null;
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === base64Hash) {
			position = i;
		}
	});
	return position;
};
// Fungsi Mendapatkan Command Berdasarkan Hash
const getCmd = (id) => {
	const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
	let position = null;
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === base64Hash) {
			position = i;
		}
	});
	if (position !== null) {
		return _scommand[position].chats;
	}
};
// Fungsi Mengecek Apakah Command Ada
const checkSCommand = (id) => {
	const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
	let status = false;
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === base64Hash) {
			status = true;
		}
	});
	return status;
};
// Fungsi Format Monospace
function monospace(string) {
	return '```' + string + '```';
}

// 1. Fungsi untuk membaca semua nama case dari file
const getAllCases = () => {
    const fileContent = fs.readFileSync("./naze.js", "utf-8");
    const caseRegex = /case\s*['"`](.*?)['"`]\s*:/g;
    let match;
    const cases = [];
    while ((match = caseRegex.exec(fileContent)) !== null) {
        cases.push(match[1]);
    }
    return cases;
};

// 2. Deteksi typo dengan didYouMean
const detectTypoCommand = (input) => {
    const validCommands = getAllCases(); // Ambil semua nama case
    const suggestedCommand = didYouMean(input, validCommands);
    if (suggestedCommand) {
        return suggestedCommand;
    }
    return null;
};
module.exports = sych = async (sych, m, chatUpdate, store) => {
	try {
		await LoadDataBase(sych, m);
		const content = JSON.stringify(m.message);
		const type = m.message ? Object.keys(m.message)[0] : null;
		let _chats = type === "conversation" && m.message.conversation ? m.message.conversation : type == "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : type == "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : type == "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : type == "buttonsResponseMessage" && m.message[type].selectedButtonId ? m.message[type].selectedButtonId : type == "stickerMessage" && getCmd(m.message[type].fileSha256.toString("base64")) !== null && getCmd(m.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(m.message[type].fileSha256.toString("base64")) : "";
		const cmd = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		const botNumber = await sych.decodeJid(sych.user.id)
		const from = m.key.remoteJid;
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const prefix = /^[°zZ#@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ''
		const body = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budy = (typeof m.text == 'string' ? m.text : '')
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		
    
		const text = args.join(' ')
		const q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment().tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const setv = pickRandom(listv)
		const readmore = String.fromCharCode(8206).repeat(999)
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
		const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false
		// Data untuk menyimpan status pengguna
		const emojis = global.emot;
		const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
		const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage");
		const extendedText = MessageType;
		// Fake
		sych.deleteMessage = async (chatId, key) => {
			try {
				await sych.sendMessage(chatId, {
					delete: key
				});
				console.log(`Pesan berhasil dihapus: ChatID - ${chatId}, Key -`, key);
			} catch (error) {
				console.error(`Gagal menghapus pesan: ChatID - ${chatId}, Key -`, key, 'Error:', error);
			}
		};
		const ftrol = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: 123,
					status: 1,
					surface: 1,
					message: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
					orderTitle: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
					thumbnail: fake.thumbnail,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: `${prefix + command}`, jpegThumbnail: fake.thumbnail } },
    };
		const repPy = {
	key: {
		remoteJid: 'status@broadcast',
		participant: '0@s.whatsapp.net',
		fromMe: false,
		id: `${owname}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: my.ch,
newsletterName: `${botname}`,
jpegThumbnail: fake.thumbnail,
caption: `${botname}`,
inviteExpiration: Date.now() + 1814400000
}
}}
		const fkontak = {
			key: {
				remoteJid: 'status@broadcast',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: `${botname}`
			},
			message: {
				contactMessage: {
					displayName: (m.pushName || author),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		}
		const ftroli2 = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: 123,
					status: 1,
					surface: 1,
					message: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
					orderTitle: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
					thumbnail: fake.texz, //Gambarnye
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		/*
		
		[ ! ] INI KALO CUMA 1 LINK (NOT RANDOM)
		const sycreply = (teks) => {
			sych.sendMessage(m.chat, {
				text: teks,
				contextInfo: {
					externalAdReply: {
						"showAdAttribution": true,
						"containsAutoReply": true,
						"title": `${global.botname}`,
						"body": `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
						"previewType": "VIDEO",
						"thumbnailUrl": 'https://i.ibb.co.com/3rqCPX6/fk.jpg',
						"sourceUrl": 'https://github.com/sychyy'
					}
				}
			}, {
				quoted: fkontak
			})
		}
		*/
		// Daftar thumbnail URL yang bisa dipilih secara random
// Lokasi file JSON di folder 'database'
const thumbListFilePath = path.join(__dirname, 'database', 'thumbList.json');

// Fungsi untuk membaca data thumbnail dari file JSON
const readThumbList = () => {
    if (!fs.existsSync(thumbListFilePath)) {
        // Jika file tidak ada, buat file baru dengan array kosong
        fs.writeFileSync(thumbListFilePath, JSON.stringify([]));
        return [];
    }
    const data = fs.readFileSync(thumbListFilePath, 'utf-8');
    return JSON.parse(data);
};

// Fungsi untuk menulis data thumbnail ke file JSON
const writeThumbList = (thumbList) => {
    fs.writeFileSync(thumbListFilePath, JSON.stringify(thumbList, null, 2));
};

// Fungsi untuk menambahkan thumbnail
const addthumb = (nama, url) => {
    const thumbList = readThumbList();
    // Cek apakah nama sudah ada
    if (thumbList.find(thumb => thumb.name === nama)) {
        return 'Thumbnail dengan nama tersebut sudah ada.';
    }
    // Menambahkan thumbnail ke dalam daftar
    thumbList.push({ name: nama, url: url });
    writeThumbList(thumbList);
    return `Thumbnail dengan nama ${nama} berhasil ditambahkan.`;
};

// Fungsi untuk menghapus thumbnail berdasarkan nama
const delthumb = (nama) => {
    const thumbList = readThumbList();
    const index = thumbList.findIndex(thumb => thumb.name === nama);
    if (index === -1) {
        return 'Thumbnail dengan nama tersebut tidak ditemukan.';
    }
    thumbList.splice(index, 1);
    writeThumbList(thumbList);
    return `Thumbnail dengan nama ${nama} berhasil dihapus.`;
};

// Fungsi untuk menampilkan daftar thumbnail
const listthumb = () => {
    const thumbList = readThumbList();
    if (thumbList.length === 0) {
        return 'Tidak ada thumbnail yang tersimpan.';
    }
    return thumbList.map(thumb => `Nama: ${thumb.name}, URL: ${thumb.url}`).join('\n');
};

// Fungsi untuk memilih thumbnail secara random dari daftar
const getRandomThumb = () => {
    const thumbList = readThumbList();
    return thumbList[Math.floor(Math.random() * thumbList.length)]?.url || 'https://i.ibb.co.com/x6cRFN1/6cbaad220c211d8399577906a2f30856.jpg';
};

// Fungsi sycreply yang diperbarui
const sycreply = (teks) => {
    sych.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl":  my.gh
            }
        }
    }, {
        quoted: fkontak
    })
}
// 3. Modifikasi pengolahan command
if (isCmd && m.sender !== botNumber && !m.isGroup) {
    if (typoDetectionEnabled) { // Periksa apakah fitur aktif
        let typoCorrection = detectTypoCommand(command);
        if (typoCorrection && typoCorrection !== command) {
            return sycreply(`Mungkin yang Anda maksud adalah: *${prefix}${typoCorrection}*`);
        }
    }
}
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
				db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		})
		// Auto Set Bio
		if (db.set[botNumber].autobio) {
			let setbio = db.set[botNumber]
			if (new Date() * 1 - setbio.status > 60000) {
				await sych.updateProfileStatus(`${sych.user.name} | 🎯 Runtime : ${runtime(os.uptime())}`)
				setbio.status = new Date() * 1
			}
		}
		// Set Public
		if (!sych.public) {
			console.log("Bot dalam mode self");
			if (!isCreator && !m.key.fromMe) {
				console.log("Pesan ditolak: bukan kreator atau pemilik bot");
				return;
			}
		}
		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
			if (db.set[botNumber].autoread && sych.public) sych.readMessages([m.key]);
		}
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = {
						mentionedJid: [chats.key.participant],
						isForwarded: true,
						forwardingScore: 1,
						quotedMessage: {
							conversation: '*Anti Delete❗*'
						},
						...chats.key
					}
					const pesan = chats.type === 'conversation' ? {
						extendedTextMessage: {
							text: chats.msg,
							contextInfo: {
								mentionedJid: [chats.key.participant],
								isForwarded: true,
								forwardingScore: 1,
								quotedMessage: {
									conversation: '*Anti Delete❗*'
								},
								...chats.key
							}
						}
					} : {
						[chats.type]: chats.msg
					}
					await sych.relayMessage(m.chat, pesan, {})
				}
			}
			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match('chat.whatsapp.com/')) {
					const isGcLink = new RegExp(`https://chat.whatsapp.com/${await sych.groupInviteCode(m.chat)}`, 'i').test(m.text);
					if (isGcLink) return
					await sych.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender
						}
					})
					await sych.relayMessage(m.chat, {
						extendedTextMessage: {
							text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`,
							contextInfo: {
								mentionedJid: [m.key.participant],
								isForwarded: true,
								forwardingScore: 1,
								quotedMessage: {
									conversation: '*Anti Link❗*'
								},
								...m.key
							}
						}
					}, {})
				}
			}
			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 6000) {
					await sych.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender
						}
					})
					await sych.relayMessage(m.chat, {
						extendedTextMessage: {
							text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`,
							contextInfo: {
								mentionedJid: [m.key.participant],
								isForwarded: true,
								forwardingScore: 1,
								quotedMessage: {
									conversation: '*Anti Virtex❗*'
								},
								...m.key
							}
						}
					}, {})
					await sych.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg.nativeFlowMessage && m.msg.nativeFlowMessage.messageParamsJson && m.msg.nativeFlowMessage.messageParamsJson.length > 3500) {
					await sych.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender
						}
					})
					await sych.relayMessage(m.chat, {
						extendedTextMessage: {
							text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`,
							contextInfo: {
								mentionedJid: [m.key.participant],
								isForwarded: true,
								forwardingScore: 1,
								quotedMessage: {
									conversation: '*Anti Bug❗*'
								},
								...m.key
							}
						}
					}, {})
					await sych.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
		}
		// Filter Bot
		if (m.isBot) return
		// Mengetik
		if (db.set[botNumber].autotyping && sych.public && isCmd) {
			await sych.sendPresenceUpdate('composing', m.chat)
		}
		if (db.set[botNumber].autovn && sych.public && isCmd) {
			// Mengirimkan status 'recording' (seperti voice note sedang direkam)
			await sych.sendPresenceUpdate('recording', m.chat);
		}
		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['Wa\'alaikumusalam', 'Wa\'alaikumusalam wr wb', 'Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
			sycreply(pickRandom(jwb_salam))
		}
		// Cek Expired
		prem.expiredCheck(sych, premium);
		// TicTacToe
		let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				sycreply({
					'-3': 'Game telah berakhir',
					'-2': 'Invalid',
					'-1': 'Posisi Invalid',
					0: 'Posisi Invalid',
				} [ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				} [v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				db.users[m.sender].limit += 3
				db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat) room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await sych.sendMessage(room.x, {
				text: str,
				mentions: parseMention(str)
			}, {
				quoted: m
			})
			await sych.sendMessage(room.o, {
				text: str,
				mentions: parseMention(str)
			}, {
				quoted: m
			})
			if (isTie || isWin) {
				delete tictactoe[room.id]
			}
		}
		// Suit PvP
		let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					sycreply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`)
					delete suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				sycreply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) sych.sendMessage(roof.p, {
					text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`
				}, {
					quoted: m
				})
				if (!roof.pilih2) sych.sendMessage(roof.p2, {
					text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`
				}, {
					quoted: m
				})
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) sycreply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						sycreply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
					}
					delete suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i;
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				sycreply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
				if (!roof.pilih2) sych.sendMessage(roof.p2, {
					text: '_Lawan sudah memilih_\nSekarang giliran kamu'
				})
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				sycreply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) sych.sendMessage(roof.p, {
					text: '_Lawan sudah memilih_\nSekarang giliran kamu'
				})
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				sych.sendMessage(roof.asal, {
					text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(),
					mentions: [roof.p, roof.p2]
				}, {
					quoted: m
				})
				delete suit[roof.id]
			}
		}
		// Tebak Bomb
		let pilih = '🌀',
			bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				sych.sendMessage(m.chat, {
					react: {
						text: '❌',
						key: m.key
					}
				})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await sycreply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`);
					sych.sendMessage(m.chat, {
						react: {
							text: '😂',
							key: m.key
						}
					})
					delete tebakbom[m.sender];
				} else await sycreply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].uang += 6000
					await sycreply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Uang 💰 *+6000*`);
					delete tebakbom[m.sender];
				} else sycreply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		// Akinator
		if (m.sender in akinator) {
			if (m.quoted && akinator[m.sender].key == m.quoted.id) {
				if (budy == '5') {
					akinator[m.sender].isWin = false
					await akinator[m.sender].cancelAnswer()
					let {
						key
					} = await m.reply(`🎮 Akinator Game Back :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
					akinator[m.sender].key = key.id
				} else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
					sych.sendMessage(m.chat, {
						react: {
							text: '🎊',
							key: m.key
						}
					})
					delete akinator[m.sender]
				} else {
					if (!isNaN(budy)) {
						if (akinator[m.sender].isWin) {
							let {
								key
							} = await sych.sendMessage(m.chat, {
								image: {
									url: akinator[m.sender].sugestion_photo
								},
								caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`,
								contextInfo: {
									mentionedJid: [m.sender]
								}
							}, {
								quoted: m
							})
							akinator[m.sender].key = key.id
						} else {
							await akinator[m.sender].answer(budy)
							if (akinator[m.sender].isWin) {
								let {
									key
								} = await sych.sendMessage(m.chat, {
									image: {
										url: akinator[m.sender].sugestion_photo
									},
									caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`,
									contextInfo: {
										mentionedJid: [m.sender]
									}
								}, {
									quoted: m
								})
								akinator[m.sender].key = key.id
							} else {
								let {
									key
								} = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
								akinator[m.sender].key = key.id
							}
						}
					}
				}
			}
		}
		// Game
		const games = {
			tebaklirik,
			tekateki,
			tebaklagu,
			tebakkata,
			kuismath,
			susunkata,
			tebakkimia,
			caklontong,
			tebaknegara,
			tebakgambar,
			tebakepep,
			tebakbendera
		}
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if (m.quoted && id == m.quoted.id) {
				if (gameName == 'kuismath') {
					jawaban = game[m.chat + id].jawaban
					const difficultyMap = {
						'noob': 1,
						'easy': 1.5,
						'medium': 2.5,
						'hard': 4,
						'extreme': 5,
						'impossible': 6,
						'impossible2': 7
					};
					let randMoney = difficultyMap[kuismath[m.chat + id].mode]
					if (!isNaN(budy)) {
						if (budy.toLowerCase() == jawaban) {
							db.users[m.sender].uang += randMoney * 1000
							await sycreply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${randMoney * 1000}*`)
							delete kuismath[m.chat + id]
						} else sycreply('*Jawaban Salah!*')
					}
				} else {
					jawaban = game[m.chat + id].jawaban
					let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
					let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
					if (jawabBenar) {
						db.users[m.sender].uang += bonus * 1
						await sycreply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${bonus}*`)
						delete game[m.chat + id]
					} else sycreply('*Jawaban Salah!*')
				}
			}
		}
		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
				sycreply(caption)
				if (isWin || isSurender) delete family100[m.chat]
			}
		}
		// Menfes
		if (!m.isGroup) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = {
						isForwarded: true,
						forwardingScore: 1,
						quotedMessage: {
							conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`
						},
						key: {
							remoteJid: '0@s.whatsapp.net',
							fromMe: false,
							participant: '0@s.whatsapp.net'
						}
					}
					const pesan = m.type === 'conversation' ? {
						extendedTextMessage: {
							text: m.msg,
							contextInfo: {
								isForwarded: true,
								forwardingScore: 1,
								quotedMessage: {
									conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`
								},
								key: {
									remoteJid: '0@s.whatsapp.net',
									fromMe: false,
									participant: '0@s.whatsapp.net'
								}
							}
						}
					} : {
						[m.type]: m.msg
					}
					await sych.relayMessage(menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			sycreply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			sycreply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		switch (command) {
			// Tempat Add Case
			case '19rujxl1e': {
				console.log('.')
			}
			break
			// Owner Menu
			case 'setbio': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text) return sycreply('Mana text nya?')
				sych.setStatus(q)
				sycreply(`*Bio telah di ganti menjadi ${q}*`)
			}
			break
			case "addcmd":
			case "setcmd":
				if (isQuotedSticker) {
					if (!q) return sycreply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
					var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
					addCmd(kodenya, q);
					sycreply("Done!");
					await sych.sendMessage(m.chat, {
						react: {
							text: '🔐', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} else {
					sycreply("tag stickenya");
				}
				break;
			case "delcmd":
				if (!isQuotedSticker) return sycreply(`Penggunaan : ${command} tagsticker`);
				var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
				_scommand.splice(getCommandPosition(kodenya), 1);
				fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
				sycreply("Done!");
				await sych.sendMessage(m.chat, {
					react: {
						text: '🚫', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan perintah
					}
				});
				break;
			case "listcmd":
				teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
				cemde = [];
				for (let i of _scommand) {
					cemde.push(i.id);
					teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
				}
				sycreply(teksnyee, cemde, true);
				break;
			case 'setppbot': {
				if (!isCreator) return sycreply(mess.owner)
				if (!/image/.test(mime)) return sycreply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await sych.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let {
						img
					} = await generateProfilePicture(media)
					await sych.query({
						tag: 'iq',
						attrs: {
							to: botNumber,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{
							tag: 'picture',
							attrs: {
								type: 'image'
							},
							content: img
						}]
					})
					await fs.unlinkSync(media)
					sycreply('Sukses')
				} else {
					await sych.updateProfilePicture(botNumber, {
						url: media
					})
					await fs.unlinkSync(media)
					sycreply('Sukses')
				}
			}
			break
			case 'delppbot': {
				if (!isCreator) return sycreply(mess.owner)
				await sych.removeProfilePicture(sych.user.id)
				sycreply('Sukses')
			}
			break
			case 'join': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text) return sycreply('Masukkan Link Group!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return sycreply('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				await sych.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return sycreply('Grup Tidak Di Temukan❗');
					if (res.data == 401) return sycreply('Bot Di Kick Dari Grup Tersebut❗');
					if (res.data == 409) return sycreply('Bot Sudah Join Di Grup Tersebut❗');
					if (res.data == 410) return sycreply('Url Grup Telah Di Setel Ulang❗');
					if (res.data == 500) return sycreply('Grup Penuh❗');
				})
			}
			break
			case 'leave': {
				if (!isCreator) return sycreply(mess.owner)
				await sych.groupLeave(m.chat).then(() => sych.sendFromOwner(owner, 'Sukses Keluar Dari Grup', m, {
					contextInfo: {
						isForwarded: true
					}
				}))
			}
			break
			case 'blokir':
			case 'block': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text && !m.quoted) {
					sycreply(`*< / >* Example: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await sych.updateBlockStatus(numbersOnly, 'block').then((a) => sycreply(mess.done)).catch((err) => sycreply('Gagal!'))
				}
			}
			break
			case 'listblock': {
				let anu = await sych.fetchBlocklist()
				sycreply(`Total Block : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
			}
			break
			case 'openblokir':
			case 'unblokir':
			case 'openblock':
			case 'unblock': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text && !m.quoted) {
					sycreply(`*< / >* Example: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await sych.updateBlockStatus(numbersOnly, 'unblock').then((a) => sycreply(mess.done)).catch((err) => sycreply('Gagal!'))
				}
			}
			break
			case 'adduang': {
				if (!isCreator) return sycreply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return sycreply(`Kirim/tag Nomernya!\n*< / >* Example:\n${prefix + command} 62xxx 1000`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await sych.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return sycreply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].uang) {
					addUang(args[1], nmrnya, db)
					sycreply('Sukses Add Uang')
				} else {
					sycreply('User tidak terdaftar di database!')
				}
			}
			break
			case 'addlimit': {
				if (!isCreator) return sycreply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return sycreply(`Kirim/tag Nomernya!\n*< / >* Example:\n${prefix + command} 62xxx 10`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await sych.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return sycreply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].limit) {
					addLimit(args[1], nmrnya, db)
					sycreply('Sukses Add limit')
				} else {
					sycreply('User tidak terdaftar di database!')
				}
			}
			break
			case 'listpc': {
				if (!isCreator) return sycreply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				if (anu.length === 0) return sycreply(teks)
				for (let i of anu) {
					if (store.messages[i] && store.messages[i].array && store.messages[i].array[0]) {
						let nama = store.messages[i].array[0].pushName
						teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
					}
				}
				await sych.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				if (!isCreator) return sycreply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				if (anu.length === 0) return sycreply(teks)
				for (let i of anu) {
					let metadata = store.groupMetadata[i] || await sych.groupMetadata(i)
					teks += `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				await sych.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'setmenu':{
               if (!isCreator) return sycreply(mess.owner)
               if (!text) return sycreply(`There are 8 menu(s1,s2,s3,s4,s5,s6,s7,s8,s9)\nPlease select one\nExample ${prefix + command} s1`)
               if (text.startsWith('s')) {
                  typemenu = text
                  m.reply(mess.done)
               } else {
                  m.reply(`There are 8 menu(s1,s2,s3,s4,s5,s6,s7,s8,s9)\nPlease select one\nExample ${prefix + command} s1`)
               }
            }
            break
			case 'creategc':
			case 'buatgc': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text) return sycreply(`*< / >* Example:\n${prefix + command} *Nama Gc*`)
				let group = await sych.groupCreate(q, [m.sender])
				let res = await sych.groupInviteCode(group.id)
				await sych.sendMessage(m.chat, {
					text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`,
					detectLink: true
				}, {
					quoted: m
				});
				await sych.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await sych.sendMessage(group.id, {
					text: 'Done'
				})
			}
			break
			case 'addpr':
			case 'addprem':
			case 'addpremium': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text) return sycreply(`*< / >* Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30 hari`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await sych.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return sycreply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (teks2) {
					if (db.users[nmrnya] && db.users[nmrnya].limit) {
						prem.addPremiumUser(nmrnya, teks2.replace(/[^0-9]/g, '') + 'd', premium);
						sycreply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium
					} else sycreply('Nomer tidak terdaftar di BOT !')
				} else {
					sycreply(`Masukkan waktunya!\*< / >* Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`)
				}
			}
			break
			case 'delpr':
			case 'delprem':
			case 'delpremium': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text) return sycreply(`*< / >* Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && db.users[nmrnya].limit) {
					if (prem.checkPremiumUser(nmrnya, premium)) {
						premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
						fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
						sycreply(`Sukses ${command} @${nmrnya.split('@')[0]}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.free
					} else {
						sycreply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`)
					}
				} else sycreply('Nomer tidak terdaftar di BOT !')
			}
			break
			case 'listpr':
			case 'listprem':
			case 'listpremium': {
				if (!isCreator) return sycreply(mess.owner)
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${db.users[userprem.id].limit}\n➸ *Uang*: ${db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				sycreply(txt)
			}
			break
			case 'upsw': {
				if (!isCreator) return sycreply(mess.owner)
				const statusJidList = Object.keys(db.users)
				const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				if (quoted.isMedia) {
					if (/image|video/.test(quoted.mime)) {
						await sych.sendMessage('status@broadcast', {
							[`${quoted.mime.split('/')[0]}`]: await quoted.download(),
							caption: text || m.quoted?.body || ''
						}, {
							statusJidList
						})
						sych.sendMessage(m.chat, {
							react: {
								text: '✅',
								key: m.key
							}
						})
					} else if (/audio/.test(quoted.mime)) {
						await sych.sendMessage('status@broadcast', {
							audio: await quoted.download(),
							mimetype: 'audio/mp4',
							ptt: true
						}, {
							backgroundColor,
							statusJidList
						})
						sych.sendMessage(m.chat, {
							react: {
								text: '✅',
								key: m.key
							}
						})
					} else sycreply('Only Support video/audio/image/text')
				} else if (quoted.text) {
					await sych.sendMessage('status@broadcast', {
						text: text || m.quoted?.body || ''
					}, {
						textArgb: 0xffffffff,
						font: Math.floor(Math.random() * 9),
						backgroundColor,
						statusJidList
					})
					sych.sendMessage(m.chat, {
						react: {
							text: '✅',
							key: m.key
						}
					})
				} else sycreply('Only Support video/audio/image/text')
			}
			break
			case 'addcase': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text && !text.startsWith('case')) return sycreply('Masukkan Casenya!')
				fs.readFile('naze.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisi = data.indexOf("case '19rujxl1e':");
					if (posisi !== -1) {
						const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
						fs.writeFile('naze.js', codeBaru, 'utf8', (err) => {
							if (err) {
								sycreply('Terjadi kesalahan saat menulis file: ', err);
							} else {
								sycreply('Case berhasil ditambahkan');
							}
						});
					} else {
						sycreply('Gagal Menambahkan case!');
					}
				});
			}
			break
			case 'getcase': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text) return sycreply('Masukkan Nama Casenya!')
				try {
					const getCase = (cases) => {
						return "case" + `'${cases}'` + fs.readFileSync("naze.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
					}
					sycreply(`${getCase(text)}`)
				} catch (e) {
					sycreply(`case ${text} tidak ditemukan!`)
				}
			}
			break
			case 'delcase': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text) return sycreply('Masukkan Nama Casenya!')
				fs.readFile('naze.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
					const modifiedData = data.replace(regex, '');
					fs.writeFile('naze.js', modifiedData, 'utf8', (err) => {
						if (err) {
							sycreply('Terjadi kesalahan saat menulis file: ', err);
						} else {
							sycreply('Case berhasil dihapus dari file');
						}
					});
				});
			}
			break
			case 'getsession': {
				if (!isCreator) return sycreply(mess.owner)
				await sych.sendMessage(m.chat, {
					document: fs.readFileSync('./nazedev/creds.json'),
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, {
					quoted: m
				});
			}
			break
			case 'deletesession':
			case 'delsession': {
				if (!isCreator) return sycreply(mess.owner)
				fs.readdir('./nazedev', async function(err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return sycreply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if (filteredArray.length == 0) return sycreply(teks);
					filteredArray.map(function(e, i) {
						teks += (i + 1) + `. ${e}\n`
					})
					if (text && text == 'true') {
						let {
							key
						} = await m.reply('Menghapus Session File..')
						await filteredArray.forEach(function(file) {
							fs.unlinkSync('./nazedev/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah Session', {
							edit: key
						})
					} else sycreply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'deletesampah':
			case 'delsampah': {
				if (!isCreator) return sycreply(mess.owner)
				fs.readdir('./database/sampah', async function(err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return sycreply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['gif', 'png', 'bin', 'mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
					let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
					if (filteredArray.length == 0) return sycreply(teks);
					filteredArray.map(function(e, i) {
						teks += (i + 1) + `. ${e}\n`
					})
					if (text && text == 'true') {
						let {
							key
						} = await m.reply('Menghapus Sampah File..')
						await filteredArray.forEach(function(file) {
							fs.unlinkSync('./database/sampah/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah', {
							edit: key
						})
					} else sycreply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'sc':
			case 'script':
			case 'esce': {
				const iniesce = `https://github.com/sychyy/sychee\n⬆️ Itu Sc nya cuy`
					sych.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'IDR',
                          amount1000: '5000000000',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: iniesce,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
				await sych.sendMessage(m.chat, {
					react: {
						text: '🔗', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan perintah
					}
				});
			}
			break
			case 'donasi':
			case 'donate': {
				sycreply('Donasi Dapat Melalui Url Dibawah Ini :\nhttps://saweria.co/sych')
			}
			break
			// Group Menu
			case 'add': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				if (!text && !m.quoted) {
					sycreply(`*< / >* Example: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
							for (let i of res) {
								let invv = await sych.groupInviteCode(m.chat)
								if (i.status == 408) return sycreply('Dia Baru-Baru Saja Keluar Dari Grub Ini!')
								if (i.status == 401) return sycreply('Dia Memblokir Bot!')
								if (i.status == 409) return sycreply('Dia Sudah Join!')
								if (i.status == 500) return sycreply('Grub Penuh!')
								if (i.status == 403) {
									await sych.sendMessage(m.chat, {
										text: `@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`,
										mentions: [numbersOnly]
									}, {
										quoted: m
									})
									await sych.sendMessage(`${numbersOnly ? numbersOnly : '6282113821188@s.whatsapp.net'}`, {
										text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`,
										detectLink: true,
										mentions: [numbersOnly, m.sender]
									}, {
										quoted: fkontak
									}).catch((err) => sycreply('Gagal Mengirim Undangan!'))
								} else if (i.status !== 200) {
									sycreply('Gagal Add User')
								}
							}
						})
					} catch (e) {
						sycreply('Terjadi Kesalahan! Gagal Add User')
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				if (!text && !m.quoted) {
					sycreply(`*< / >* Example: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => sycreply('Gagal Kick User!'))
				}
			}
			break
			case 'promote': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				if (!text && !m.quoted) {
					sycreply(`*< / >* Example: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => sycreply('Gagal!'))
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				if (!text && !m.quoted) {
					sycreply(`*< / >* Example: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => sycreply('Gagal!'))
				}
			}
			break
			case 'setname':
			case 'setnamegc':
			case 'setsubject':
			case 'setsubjectgc': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				if (!text && !m.quoted) {
					sycreply(`*< / >* Example: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await sych.groupUpdateSubject(m.chat, teksnya).catch((err) => sycreply('Gagal!'))
				}
			}
			break
			case 'setdesc':
			case 'setdescgc':
			case 'setdesk':
			case 'setdeskgc': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				if (!text && !m.quoted) {
					sycreply(`*< / >* Example: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await sych.groupUpdateDescription(m.chat, teksnya).catch((err) => sycreply('Gagal!'))
				}
			}
			break
			case 'setppgroups':
			case 'setppgrup':
			case 'setppgc': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				if (!m.quoted) return sycreply('Reply Gambar yang mau dipasang di Profile Bot')
				if (!/image/.test(mime) && /webp/.test(mime)) return sycreply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await sych.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
				if (text.length > 0) {
					let {
						img
					} = await generateProfilePicture(media)
					await sych.query({
						tag: 'iq',
						attrs: {
							to: m.chat,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{
							tag: 'picture',
							attrs: {
								type: 'image'
							},
							content: img
						}]
					})
					await fs.unlinkSync(media)
					sycreply('Sukses')
				} else {
					await sych.updateProfilePicture(m.chat, {
						url: media
					})
					await fs.unlinkSync(media)
					sycreply('Sukses')
				}
			}
			break
			case 'delete':
			case 'del':
			case 'd': {
				if (!m.quoted) return sycreply('Reply pesan yang mau di delete')
				await sych.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: m.isBotAdmin ? false : true,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
			break
			case 'linkgroup':
			case 'linkgrup':
			case 'linkgc':
			case 'urlgroup':
			case 'urlgrup':
			case 'urlgc': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				let response = await sych.groupInviteCode(m.chat)
				await sych.sendMessage(m.chat, {
					text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await sych.groupMetadata(m.chat)).subject}`,
					detectLink: true
				}, {
					quoted: m
				});
			}
			break
			case 'revoke':
			case 'newlink':
			case 'newurl': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				await sych.groupRevokeInvite(m.chat).then((a) => {
					sycreply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`)
				}).catch((err) => sycreply('Gagal!'))
			}
			break
			case 'gc':
			case 'grup': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				let teks = text.split(' ')
				let set = db.groups[m.chat]
				switch (teks[0]) {
					case 'close':
					case 'open':
						await sych.groupSettingUpdate(m.chat, teks[0] == 'close' ? 'announcement' : 'not_announcement').then(a => sycreply(`*Sukses ${teks[0] == 'open' ? 'Membuka' : 'Menutup'} Group*`))
						break
					case 'antilink':
					case 'antivirtex':
					case 'antidelete':
					case 'welcome':
					case 'mute':
					case 'antitoxic':
					case 'waktusholat':
					case 'nsfw':
						if (teks[1] == 'on' || teks[1] == 'true') {
							if (set[teks[0]]) return sycreply('*Sudah Aktif Sebelumnya*')
							set[teks[0]] = true
							sycreply('*Sukse Change To On*')
						} else if (teks[1] == 'off' || teks[1] == 'false') {
							set[teks[0]] = false
							sycreply('*Sukse Change To Off*')
						} else {
							sycreply(`❗${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
						}
						break
					default:
						sycreply(`${m.metadata.subject}\n- Mute : ${set.mute ? '✅' : '❌'}\n- Anti Link : ${set.antilink ? '✅' : '❌'}\n- Anti Virtex : ${set.antivirtex ? '✅' : '❌'}\n- Anti Delete : ${set.antidelete ? '✅' : '❌'}\n- Welcome : ${set.welcome ? '✅' : '❌'}\n\n*< / >* Example:\n${prefix + command} antilink off`)
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await sych.sendMessage(m.chat, {
					text: teks,
					mentions: m.metadata.participants.map(a => a.id)
				}, {
					quoted: m
				})
			}
			break
			case 'hidetag':
			case 'h': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				sych.sendMessage(m.chat, {
					text: q ? q : '',
					mentions: m.metadata.participants.map(a => a.id)
				}, {
					quoted: m
				})
			}
			break
			case 'totag': {
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				if (!m.quoted) return sycreply(`Reply pesan dengan caption ${prefix + command}`)
				delete m.quoted.chat
				await sych.sendMessage(m.chat, {
					forward: m.quoted.fakeObj,
					mentions: m.metadata.participants.map(a => a.id)
				})
			}
			break
			case 'listonline':
			case 'liston': {
				if (!m.isGroup) return sycreply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return sycreply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await sych.sendMessage(m.chat, {
					text: 'List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`,
					mentions: online
				}, {
					quoted: m
				}).catch((e) => sycreply('Gagal'))
			}
			break
			// Bot Menu
			case 'owner': {
				try {
					const carouselCards = [{
						header: {
							title: "Owner Bot",
							hasMediaAttachment: true,
							imageMessage: (await generateWAMessageContent({
								image: {
									url: './src/media/sych.png'
								}
							}, {
								upload: sych.waUploadToServer
							})).imageMessage
						},
						body: {
							text: `━━━━━━ ✨ *${botname}* ✨ ━━━━━━\n🔰 *OWNER RULES* 🔰\n🚫 Jangan spam\n🤝 Gunakan sopan\n📵 Hindari panggilan\n━━━━━━ 🌟 *Terima Kasih* 🌟 ━━━━━━`
						},
						footer: {
							text: ""
						},
						nativeFlowMessage: {
							buttons: [{
								"name": "cta_url",
								"buttonParamsJson": JSON.stringify({
									display_text: `Owner (yDa🔱)`, //ganti jadi (${owname})
									url: `https://wa.me/+${owner}`
								})
							}]
						}
					}, {
						header: {
							title: "Bot WhatsApp",
							hasMediaAttachment: true,
							imageMessage: (await generateWAMessageContent({
								image: {
									url: './src/media/sychy.png'
								}
							}, {
								upload: sych.waUploadToServer
							})).imageMessage
						},
						body: {
							text: `━━━━━━ ✨ *${botname}* ✨ ━━━━━━\n🔰 *BOT RULES* 🔰\n🚷 Tidak boleh spam\n💬 Tidak boleh berkata kasar\n📴 Tidak boleh call\n━━━━━━ 🔥 *Terima Kasih* 🔥 ━━━━━━`
						},
						footer: {
							text: ""
						},
						nativeFlowMessage: {
							buttons: [{
								"name": "cta_url",
								"buttonParamsJson": JSON.stringify({
									display_text: `Botz (${botname})🔑`,
									url: `https://wa.me/+${botnum}`
								})
							}]
						}
					}];
					// Generate carousel message
					const carouselMessage = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadata: {},
									deviceListMetadataVersion: 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.fromObject({
									body: {
										text: "Berikut ada kontak owner dan bot, silakan hubungi jika diperlukan! ✨📱"
									},
									footer: {
										text: "Sych Bot"
									},
									header: {
										hasMediaAttachment: false
									},
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
										cards: carouselCards
									})
								})
							}
						}
					}, {});
					// Kirim pesan carousel
					await sych.relayMessage(m.chat, carouselMessage.message, {
						messageId: carouselMessage.key.id
					});
				} catch (error) {
					console.error("Kesalahan saat mengirim carousel:", error);
					await sych.sendMessage(m.chat, {
						text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan hubungi AI untuk memeriksa log kesalahan."
					}, {
						quoted: m
					});
				}
			}
			break;
			case 'profile':
			case 'cek': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await sycreply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`)
			}
			break
			case 'leaderboard': {
				const entries = Object.entries(db.users).sort((a, b) => b[1].uang - a[1].uang).slice(0, 10).map(entry => entry[0]);
				let teksnya = '╭──❍「 *LEADERBOARD* 」❍\n'
				for (let i = 0; i < entries.length; i++) {
					teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].uang.toLocaleString('id-ID')}\n│\n`
				}
				sycreply(teksnya + '╰──────❍');
			}
			break
			case 'req':
			case 'request': {
				if (!text) return sycreply('Mau Request apa ke Owner?')
				await sych.sendMessage(m.chat, {
					text: `*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_`
				}, {
					quoted: m
				})
				await sych.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, {
					contextInfo: {
						mentionedJid: [m.sender],
						isForwarded: true
					}
				})
			}
			break
			case 'totalfitur': {
				const total = ((fs.readFileSync('./naze.js').toString()).match(/case '/g) || []).length
				sycreply(`Total Fitur : ${total}`);
			}
			break
			case 'daily':
			case 'claim': {
				daily(m, db)
				await sych.sendMessage(m.chat, {
					react: {
						text: '🎉', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan perintah
					}
				});
			}
			break
			case 'transfer':
			case 'tf': {
				transfer(m, args, db)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				sych.sendMessage(m.chat, {
					react: {
						text: args[0],
						key: m.quoted ? m.quoted.key : m.key
					}
				})
			}
			break
			case 'tagme': {
				sych.sendMessage(m.chat, {
					text: `@${m.sender.split('@')[0]}`,
					mentions: [m.sender]
				}, {
					quoted: m
				})
			}
			break
			case 'runtime':
			case 'tes':
			case 'bot': {
				let teks = text.split(' ')
				let set = db.set[botNumber]
				switch (teks[0]) {
					case 'mode':
						if (!teks[1]) {
							return sycreply('Gunakan perintah: mode self/public');
						}
						if (teks[1].toLowerCase() === 'public') {
							if (sych.public) {
								return sycreply('*Mode public sudah aktif sebelumnya.*');
							}
							sych.public = true;
							console.log("Mode diubah ke public");
							return sycreply('*Sukses mengubah mode ke Public Usage.*');
						} else if (teks[1].toLowerCase() === 'self') {
							if (!sych.public) {
								return sycreply('*Mode self sudah aktif sebelumnya.*');
							}
							sych.public = false;
							console.log("Mode diubah ke self");
							return sycreply('*Sukses mengubah mode ke Self Usage.*');
						} else {
							return sycreply('Gunakan perintah: mode self/public');
						}
						break;
					case 'anticall':
					case 'autobio':
					case 'autoread':
					case 'autotyping':
					case 'autovn':
					case 'readsw':
						if (teks[1] == 'on') {
							if (set[teks[0]]) return sycreply('*Sudah Aktif Sebelumnya*')
							set[teks[0]] = true
							sycreply('*Sukse Change To On*')
						} else if (teks[1] == 'off') {
							set[teks[0]] = false
							sycreply('*Sukse Change To Off*')
						} else {
							sycreply(`${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
						}
						break
					case 'set':
					case 'settings':
						let settingsBot = Object.entries(set).map(([key, value]) => {
							let list = key == 'status' ? new Date(value).toLocaleString('id-ID', {
								hour: '2-digit',
								minute: '2-digit',
								second: '2-digit'
							}) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
							return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
						}).join('\n');
						sycreply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}`);
						break
					default:
						if (teks[0] || teks[1]) sycreply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- autoAi : ${prefix} *autoai on/off*\n- autoAi2 : ${prefix} *autoai2 on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Auto VoiceNote : *${prefix + command} autovn on/off*\n- Read Sw : *${prefix + command} readsw on/off*`)
				}
				if (!teks[0] && !teks[1]) return sych.sendMessage(m.chat, {
					text: `*Bot Telah Online Selama*\n*${runtime(os.uptime())}*`
				}, {
					quoted: m
				})
			}
			break
			case 'ping':
			case 'botstatus':
			case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, {
					length
				}) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				await sych.sendMessage(m.chat, {
					react: {
						text: '💻', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan perintah
					}
				});
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(os.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				sycreply(respon)
			}
			break
			case 'speedtest':
			case 'speed': {
				sycreply('Testing Speed...')
				let cp = require('child_process')
				let {
					promisify
				} = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py --share')
				} catch (e) {
					o = e
				} finally {
					let {
						stdout,
						stderr
					} = o
					if (stdout.trim()) sycreply(stdout)
					if (stderr.trim()) sycreply(stderr)
				}
			}
			break
			case 'afk': {
				let user = db.users[m.sender]
				user.afkTime = +new Date
				user.afkReason = text
				sycreply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`)
			}
			break
			case 'readviewonce':
			case 'readviewone':
			case 'rvo': {
				if (!m.quoted) return sycreply(`Reply view once message\n*< / >* Example: ${prefix + command}`)
				try {
					if (m.quoted.msg.viewOnce) {
						m.quoted.msg.viewOnce = false
						await sych.sendMessage(m.chat, {
							forward: m.quoted
						}, {
							quoted: m
						})
					} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
						m.quoted.msg.message.audioMessage.viewOnce = false
						m.quoted.msg.message.audioMessage.contextInfo = {
							forwardingScore: 1,
							isForwarded: true,
							mentionedJid: [m.sender]
						}
						await sych.relayMessage(m.chat, m.quoted.msg.message, {})
					} else {
						sycreply(`Reply view once message\n*< / >* Example: ${prefix + command}`)
					}
				} catch (e) {
					sycreply('Media Tidak Valid!')
				}
			}
			break
			case 'inspect': {
				if (!text) return sycreply('Masukkan Link Group!')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return sycreply('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await sych.groupGetInviteInfo(code).then(anu => {
					let {
						id,
						subject,
						owner,
						subjectOwner,
						creation,
						desc,
						descId,
						participants,
						size,
						descOwner
					} = anu
					let par = `*Nama Gc* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Jumlah Member* : ${size}\n*Gc Dibuat Tanggal* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*Nama GC Diubah Oleh* : @${subjectOwner.split('@')[0]}` : '*Nama GC Diubah Oleh* : -'}\n${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					sych.sendTextMentions(m.chat, par, m);
				}).catch((res) => {
					if (res.data == 406) return sycreply('Grup Tidak Di Temukan❗');
					if (res.data == 410) return sycreply('Url Grup Telah Di Setel Ulang❗');
				});
			}
			break
			case 'addmsg': {
				if (!m.quoted) return sycreply('Reply Pesan Yang Ingin Disave Di Database')
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} file name`)
				let msgs = db.database
				if (text.toLowerCase() in msgs) return sycreply(`'${text}' telah terdaftar di list pesan`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				sycreply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`)
			}
			break
			case 'delmsg':
			case 'deletemsg': {
				if (!text) return sycreply('Nama msg yg mau di delete?')
				let msgs = db.database
				if (text == 'allmsg') {
					db.database = {}
					sycreply('Berhasil menghapus seluruh msg dari list pesan')
				} else {
					if (!(text.toLowerCase() in msgs)) return sycreply(`'${text}' tidak terdaftar didalam list pesan`)
					delete msgs[text.toLowerCase()]
					sycreply(`Berhasil menghapus '${text}' dari list pesan`)
				}
			}
			break
			case 'getmsg': {
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
				let msgs = db.database
				if (!(text.toLowerCase() in msgs)) return sycreply(`'${text}' tidak terdaftar di list pesan`)
				await sych.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
				let seplit = Object.entries(db.database).map(([nama, isi]) => {
					return {
						nama,
						message: getContentType(isi)
					}
				})
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
				}
				sycreply(teks)
			}
			break
		
// Case untuk listthumb
case 'listthumb': {
if (!isCreator) return sycreply(mess.owner)
    const thumbList = readThumbList();
    if (thumbList.length === 0) {
        return sycreply('Tidak ada thumbnail yang tersimpan.');
    }
    let teks = '「 LIST THUMBNAIL 」\n\n';
    for (let thumb of thumbList) {
        teks += `*Name:* ${thumb.name}\n*URL:* ${thumb.url}\n───────────────\n`;
    }
    sycreply(teks);
    break;
}

// Case untuk addthumb
case 'addthumb': {
if (!isCreator) return sycreply(mess.owner)
    if (!text) return sycreply(`*< / >* Example: ${prefix + command} thumbnail_name|image_url`);
    let [nama, url] = text.split('|');
    if (!nama || !url) return sycreply(`Please provide both name and URL in the correct format.`);
    
    const thumbList = readThumbList();
    if (thumbList.find(thumb => thumb.name === nama)) {
        return sycreply(`Thumbnail dengan nama '${nama}' sudah terdaftar.`);
    }

    thumbList.push({ name: nama, url: url });
    writeThumbList(thumbList);

    sycreply(`Thumbnail dengan nama '${nama}' berhasil ditambahkan!`);
    break;
}

// Case untuk delthumb
case 'delthumb':
case 'deletethumb': {
if (!isCreator) return sycreply(mess.owner)
    if (!text) return sycreply('Nama thumbnail yang ingin dihapus?');
    const thumbList = readThumbList();
    const index = thumbList.findIndex(thumb => thumb.name === text.toLowerCase());
    if (index === -1) return sycreply(`Thumbnail dengan nama '${text}' tidak ditemukan.`);
    
    thumbList.splice(index, 1);
    writeThumbList(thumbList);

    sycreply(`Thumbnail dengan nama '${text}' berhasil dihapus.`);
    break;
}
			case 'q':
			case 'quoted': {
				if (!m.quoted) return sycreply('Reply Pesannya!')
				const anu = await m.getQuotedObj()
				if (!anu) return sycreply('Format Tidak Tersedia!')
				if (!anu.quoted) return sycreply('Pesan Yang Anda Reply Tidak Mengandung Reply')
				await sych.relayMessage(m.chat, {
					[anu.quoted.type]: anu.quoted.msg
				}, {})
			}
			break
			case 'confes':
			case 'confess':
			case 'menfes':
			case 'menfess': {
				if (m.isGroup) return sycreply(mess.private)
				if (menfes[m.sender]) return sycreply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} 62xxxx|Nama Samaran`)
				let [teks1, teks2] = text.split`|`
				if (teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await sych.onWhatsApp(tujuan)
					if (!onWa.length > 0) return sycreply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
					menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2 ? teks2 : 'Orang',
						waktu: setTimeout(() => {
							if (menfes[m.sender]) sycreply(`_Waktu ${command} habis_`)
							delete menfes[m.sender];
						}, 600000)
					};
					menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Penerima',
						waktu: setTimeout(() => {
							if (menfes[tujuan]) sych.sendMessage(tujuan, {
								text: `_Waktu ${command} habis_`
							});
							delete menfes[tujuan];
						}, 600000)
					};
					sych.sendMessage(tujuan, {
						text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`
					});
					sycreply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`)
				} else {
					sycreply(`Masukkan Nomernya!\n*< / >* Example : ${prefix + command} 62xxxx|Nama Samaran`)
				}
			}
			break
			case 'delconfes':
			case 'delconfess':
			case 'delmenfes':
			case 'delmenfess': {
				if (!menfes[m.sender]) return sycreply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				let anu = menfes[m.sender]
				sych.sendMessage(anu.tujuan, {
					text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}`
				})
				sycreply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete menfes[anu.tujuan];
				delete menfes[m.sender];
			}
			break
			// Tools Menu
			case 'fetch':
			case 'get': {
				if (!/^https?:\/\//.test(text)) return sycreply('Awali dengan http:// atau https://');
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/text|json|html|plain/.test(res.headers['content-type'])) {
						await sycreply(text)
					} else {
						sycreply(util.format(res.data))
					}
				} catch (e) {
					sycreply(util.format(e))
				}
			}
			break
			case 'toaud':
			case 'toaudio': {
				if (!/video|audio/.test(mime)) return sycreply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await sych.sendMessage(m.chat, {
					audio: audio,
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
			}
			break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return sycreply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await sych.sendMessage(m.chat, {
					document: audio,
					mimetype: 'audio/mpeg',
					fileName: `Convert By Sych Bot.mp3`
				}, {
					quoted: m
				})
			}
			break
			case 'restart':
				if (!isCreator) return sycreply(mess.owner)
				sycreply(`restarting ${global.botname}`)
				sycreply(`Done ✅`)
				await sleep(3000)
				process.exit()
				break
			case 'tovn':
			case 'toptt':
			case 'tovoice': {
				if (!/video|audio/.test(mime)) return sycreply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await quoted.download()
				let audio = await toPTT(media, 'mp4')
				await sych.sendMessage(m.chat, {
					audio: audio,
					mimetype: 'audio/ogg; codecs=opus',
					ptt: true
				}, {
					quoted: m
				})
			}
			break
			case 'togif': {
				if (!/webp|video/.test(mime)) return sycreply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await sych.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return sycreply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					sych.sendMessage(m.chat, {
						video: buffer,
						gifPlayback: true
					}, {
						quoted: m
					})
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toimage':
			case 'toimg': {
				if (!/webp|video/.test(mime)) return sycreply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await sych.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return sycreply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					sych.sendMessage(m.chat, {
						image: buffer
					}, {
						quoted: m
					})
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return sycreply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await quoted.download()
					const msg = await generateWAMessageContent({
						video: anu
					}, {
						upload: sych.waUploadToServer
					})
					await sych.relayMessage(m.chat, {
						ptvMessage: msg.videoMessage
					}, {})
				} else {
					sycreply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
			}
			break
			case 'tourl': {
				try {
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
						// Menambahkan pesan loading dan menyimpan key untuk edit nanti
						let {
							key
						} = await m.reply(mess.wait)

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						let media = await quoted.download();
						let anu = await UguuSe(media);
						// Mengedit pesan setelah URL dihasilkan
						m.reply('Url : ' + anu.url, {
							edit: key
						});
					} else {
						sycreply('Send Media yg ingin di Upload!');
					}
				} catch (e) {
					// Mengedit pesan error jika terjadi masalah
					m.reply('Server Uploader sedang offline!', {
						edit: key
					});
				}
			}
			break;
			case 'tiktokslide':
			case 'ttslide': {
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				if (!text) {
					console.log('Teks URL TikTok tidak ditemukan.');
					return sycreply(`*< / >* Example: ${prefix + command} url_tiktok`);
				}
				if (!text.includes('tiktok.com')) {
					console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
					return sycreply('URL Tidak Mengandung Result Dari TikTok!');
				}
				try {
					console.log('Memulai proses pengunduhan dari URL TikTok:', text);
					const hasil = await tiktokDl(text);
					if (!hasil || hasil.data.length === 0) {
						console.log('Tidak ada gambar atau media yang ditemukan.');
						return sycreply('Tidak ada foto yang ditemukan!');
					}
					// Buat carousel card untuk setiap gambar
					const carouselCards = await Promise.all(hasil.data.map(async (item, index) => {
						// Mengonversi gambar ke URL menggunakan UguuSe
						let media = await fetch(item.url);
						let buffer = await media.buffer();
						let imageUrl = await UguuSe(buffer); // Proses untuk mendapatkan URL
						return {
							header: {
								title: `Foto ${index + 1}`,
								hasMediaAttachment: true,
								imageMessage: (await generateWAMessageContent({
									image: {
										url: item.url
									}
								}, {
									upload: sych.waUploadToServer
								})).imageMessage
							},
							body: {
								text: `Foto ${index + 1} dari TikTok✈️.`
							},
							footer: {
								text: "Klik tombol untuk melihat lebih detail."
							},
							nativeFlowMessage: {
								buttons: [{
									"name": "cta_url",
									"buttonParamsJson": JSON.stringify({
										display_text: "Lihat di TikTok",
										url: text
									})
								}, {
									"name": "cta_url",
									"buttonParamsJson": JSON.stringify({
										display_text: "Lihat Foto",
										url: imageUrl.url // URL gambar yang dihasilkan
									})
								}]
							}
						};
					}));
					// Buat pesan carousel
					const carouselMessage = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadata: {},
									deviceListMetadataVersion: 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.fromObject({
									body: {
										text: `Hasil foto dari TikTok: ${text}`
									},
									footer: {
										text: "TikTok Slide Bot by Sych"
									},
									header: {
										hasMediaAttachment: false
									},
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
										cards: carouselCards
									})
								})
							}
						}
					}, {});
					// Kirim pesan carousel
					await sych.relayMessage(m.chat, carouselMessage.message, {
						messageId: carouselMessage.key.id
					});
					console.log('Carousel dikirimkan dengan sukses.');
				} catch (e) {
					console.error('Gagal mengunduh atau membuat carousel:', e);
					sycreply('Gagal memproses permintaan Anda. Silakan coba lagi.');
				}
			}
			break;
			case 'img2text': {
				try {
					// Periksa apakah file media valid (gambar)
					if (/webp|jpg|jpeg|png/.test(mime)) {
						// Menambahkan pesan loading dan menyimpan key untuk edit nanti
						let {
							key
						} = await m.reply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						// Unduh media
						let media = await quoted.download();
						// Unggah media ke Uguu.se untuk mendapatkan URL
						let anu = await UguuSe(media);
						if (!anu.url) throw 'Gagal mengunggah media ke Uguu.se!';
						// Kirim URL ke API Anda
						let response = await fetch(`https://api.siputzx.my.id/api/ai/image2text?url=${anu.url}`);
						let result = await response.json();
						// Periksa respons API
						if (result.status && result.data) {
							// Terjemahkan hasil ke Bahasa Indonesia menggunakan translate-google-api
							let translatedText = await translate(result.data, {
								from: 'en',
								to: 'id'
							});
							// Kirim hasil terjemahan ke pengguna
							m.reply(`*Hasil Deskripsi Gambar (Bahasa Indonesia):*\n\n${translatedText}`, {
								edit: key
							});
						} else {
							m.reply('Gagal mendapatkan deskripsi gambar dari API!', {
								edit: key
							});
						}
					} else {
						sycreply('Kirim gambar yang ingin diubah menjadi teks!');
					}
				} catch (e) {
					// Tangani error dan kirim pesan jika ada masalah
					console.error(e);
					m.reply('Terjadi kesalahan saat memproses gambar!', {
						edit: key
					});
				}
			}
			break;
			case 'texttospech':
			case 'tts':
			case 'tospech': {
				if (!text) return sycreply('Mana text yg mau diubah menjadi audio?')
				let {
					tts
				} = require('./lib/tts')
				let anu = await tts(text)
				sych.sendMessage(m.chat, {
					audio: anu,
					ptt: true,
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
			}
			break
			case 'translate':
			case 'tr': {
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					sycreply(list_tr)
				} else {
					if (!m.quoted && (!text || !args[1])) return sycreply(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, {
							to: lang,
							autoCorrect: true
						})
						sycreply(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						sycreply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
			break
			case 'toqr':
			case 'qr': {
				if (!text) return sycreply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				await sych.sendMessage(m.chat, {
					image: {
						url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text
					},
					caption: 'Nih Bro'
				}, {
					quoted: m
				})
			}
			break
			case 'tohd':
			case 'remini':
			case 'hd': {
				if (/image/.test(mime)) {
					let media = await quoted.download()
					remini(media, 'enhance').then(a => {
						sych.sendMessage(m.chat, {
							image: a,
							caption: 'Done'
						}, {
							quoted: m
						});
					}).catch(e => sycreply('Server sedang offline!'));
				} else {
					sycreply(`Kirim/Reply Gambar dengan format\n*< / >* Example: ${prefix + command}`)
				}
			}
			break
			case 'shutdown': {
				if (!isCreator) {
					return sycreply('Hanya pemilik bot yang dapat mengeksekusi perintah ini.');
				}
				await sych.sendMessage(m.chat, {
					text: 'Bot sedang dimatikan...'
				}, {
					quoted: m
				});
				process.exit(); // Menghentikan bot
			}
			break;
			case 'ssweb': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} https://github.com/nazedev/naze-md`)
				try {
					let anu = 'https://' + text.replace(/^https?:\/\//, '')
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu
						},
						caption: 'Done'
					}, {
						quoted: m
					})
				} catch (e) {
					sycreply('Server SS web Sedang Offline!')
				}
			}
			break
			case 'readmore': {
				let teks1 = text.split`|` [0] ? text.split`|` [0] : ''
				let teks2 = text.split`|` [1] ? text.split`|` [1] : ''
				sycreply(teks1 + readmore + teks2)
			}
			break
			case 'getexif': {
				if (!m.quoted) return sycreply(`Reply sticker\nDengan caption ${prefix + command}`)
				if (!/sticker|webp/.test(quoted.type)) return sycreply(`Reply sticker\nDengan caption ${prefix + command}`)
				const img = new webp.Image()
				await img.load(await m.quoted.download())
				sycreply(util.format(JSON.parse(img.exif.slice(22).toString())))
			}
			break
			case 'cuaca':
			case 'weather': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} jakarta`)
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					sycreply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					sycreply('Kota Tidak Di Temukan!')
				}
			}
			break
			case 'sticker':
case 'colong':
case 's': {
    try {
        console.log('Memulai proses konversi ke stiker...');

        // Cek tipe mime yang didukung
        if (!/image|video|webp|gif/.test(mime)) {
            console.log('Mime tipe tidak valid, harus image, video, gif, atau webp.');
            return sycreply(`Kirim/reply image/video/gif/sticker untuk mengonversi ke stiker.`);
        }
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
        // Unduh media yang direply
        let media = await quoted.download();
        console.log('Media berhasil diunduh.');

        
        console.log('Reaksi berhasil diberikan pada pesan.');

        const { exec } = require('child_process');
        const fs = require('fs');

        // Jika media berupa video/gif
        if (/video|gif/.test(mime)) {
            console.log('Memproses media video atau gif...');
            
            // Simpan sementara file video
            const inputPath = './temp/input.mp4';
            const outputPath = './temp/output.webp';
            fs.writeFileSync(inputPath, media);

            // Konversi video ke WebP dengan FFmpeg (potong durasi ke 6 detik)
            exec(`ffmpeg -i ${inputPath} -t 6 -vf "scale=512:512" -loop 0 -preset default -an -vsync 0 ${outputPath}`, async (err) => {
                if (err) {
                    console.error('Terjadi kesalahan saat mengonversi video/gif ke stiker:', err);
                    return sycreply('Gagal mengonversi video/gif ke stiker!');
                }

                console.log('Video berhasil dikonversi ke WebP.');

                // Kirim sebagai stiker animasi
                let buffer = fs.readFileSync(outputPath);
                await sych.sendAsSticker(m.chat, buffer, m, {
                    packname: global.packname,
                    author: global.author
                });
                console.log('Stiker animasi berhasil dikirim.');

                // Hapus file sementara
                fs.unlinkSync(inputPath);
                fs.unlinkSync(outputPath);
            });

        } else { // Jika media berupa gambar
            console.log('Memproses media gambar...');
            const sharp = require('sharp');
            sharp(media).resize(512, 512) // Menyesuaikan ukuran gambar (512x512 px)
                .webp() // Konversi ke format WebP
                .toBuffer() // Menghasilkan buffer dari gambar
                .then(async (buffer) => {
                    console.log('Gambar berhasil diproses menjadi format WebP.');
                    // Kirim buffer gambar sebagai stiker
                    await sych.sendAsSticker(m.chat, buffer, m, {
                        packname: global.packname,
                        author: global.author
                    });
                    // Memberikan reaksi pada pesan pengguna
        await sych.sendMessage(m.chat, {
            react: {
                text: '💟', // Emoji reaksi
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
                    console.log('Stiker berhasil dikirim.');
                }).catch((err) => {
                    console.error('Terjadi kesalahan saat memproses gambar:', err);
                    sycreply('Terjadi kesalahan saat mengonversi gambar ke stiker!');
                });
        }

    } catch (e) {
        console.error('Terjadi kesalahan saat memproses media:', e);
        sycreply('Terjadi kesalahan saat memproses media!');
    }
}
break;
			case 'smeme':
			case 'stickmeme':
			case 'stikmeme':
			case 'stickermeme':
			case 'stikermeme': {
				try {
					console.log('Memulai proses pembuatan stiker meme...');
					let mime = (quoted.msg || m.msg).mimetype || '';
					if (!/image|webp/.test(mime)) {
						console.log('Mime tipe tidak valid, harus image atau webp.');
						return sycreply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`);
					}
					if (!text) {
						console.log('Teks caption tidak ditemukan.');
						return sycreply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`);
					}
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					console.log('Menunggu proses meme...');
					let [atas, bawah] = text.split('|');
					atas = atas ? atas.trim() : '-';
					bawah = bawah ? bawah.trim() : '-';
					console.log(`Teks atas: ${atas}, Teks bawah: ${bawah}`);
					let quotedMedia = m.quoted ? m.quoted : m;
					let media = await quotedMedia.download();
					console.log('Gambar/sticker berhasil diunduh.');
					let uploadResponse = await UguuSe(media); // Pastikan fungsi UguuSe berfungsi
					let mediaUrl = uploadResponse.url;
					console.log('Gambar berhasil diunggah ke UguuSe, URL:', mediaUrl);
					// Buat URL meme
					let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${encodeURIComponent(mediaUrl)}`;
					console.log('URL meme berhasil dibuat:', memeUrl);
					// Unduh file dari URL meme
					let response = await fetch(memeUrl);
					if (!response.ok) {
						console.log('Gagal mengunduh gambar meme.');
						throw new Error('Gagal mengunduh gambar meme.');
					}
					let buffer = await response.buffer();
					console.log('Meme berhasil diunduh.');
					// Konversi ke stiker menggunakan sharp atau library lain
					let webpBuffer = await sharp(buffer).resize(512, 512, {
						fit: 'contain'
					}).webp().toBuffer();
					console.log('Meme berhasil dikonversi ke format WebP.');
					// Kirim stiker
					await sych.sendAsSticker(m.chat, webpBuffer, m, {
						packname: packname,
						author: author
					});
					console.log('Stiker meme berhasil dikirim.');
					// Memberikan reaksi pada pesan pengguna
					await sych.sendMessage(m.chat, {
						react: {
							text: '💭', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
					console.log('Reaksi berhasil diberikan pada pesan.');
				} catch (e) {
					console.error('Terjadi kesalahan:', e);
					sycreply('Terjadi kesalahan saat membuat stiker meme!');
				}
			}
			break;
			case 'emojimix': {
				if (!text) {
					console.log("Input kosong!");
					return sycreply(`*< / >* Example: ${prefix + command} 😅+🤔`);
				}
				let [emoji1, emoji2] = text.split`+`;
				if (!emoji1 || !emoji2) {
					console.log("Emoji tidak valid atau tidak dipisahkan dengan '+'.");
					return sycreply(`*< / >* Example: ${prefix + command} 😅+🤔`);
				}
				console.log(`Emoji1: ${emoji1}, Emoji2: ${emoji2}`);
				try {
					console.log("Mengirim permintaan ke API...");
					let response = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
					console.log("Respons dari API diterima:", response.data);
					let results = response.data.results;
					if (results.length < 1) {
						console.log("Hasil emoji mix tidak ditemukan.");
						return sycreply(`Mix Emoji ${text} Tidak Ditemukan!`);
					}
					console.log(`Jumlah hasil ditemukan: ${results.length}`);
					for (let res of results) {
						let stickerUrl = res.media_formats.png_transparent.url;
						console.log(`URL Sticker: ${stickerUrl}`);
						// Buat folder temp jika belum ada
						const tempDir = path.resolve(__dirname, 'temp');
						if (!fs.existsSync(tempDir)) {
							console.log("Membuat folder temp...");
							fs.mkdirSync(tempDir, {
								recursive: true
							});
						}
						// Unduh file ke folder sementara
						const filePath = path.join(tempDir, `sticker_${Date.now()}.png`);
						const writer = fs.createWriteStream(filePath);
						const download = await axios({
							url: stickerUrl,
							method: 'GET',
							responseType: 'arraybuffer',
						});
						const buffer = Buffer.from(download.data);
						// Konversi gambar menjadi WebP menggunakan sharp
						const filePathWebP = path.join(tempDir, `sticker_${Date.now()}.webp`);
						await sharp(buffer).webp().toFile(filePathWebP);
						console.log(`File dikonversi ke: ${filePathWebP}`);
						// Kirim sebagai sticker
						await sych.sendAsSticker(m.chat, filePathWebP, m, {
							packname: packname,
							author: author
						});
						console.log("Sticker berhasil dikirim.");
						// Hapus file setelah selesai
						fs.unlinkSync(filePathWebP);
					}
				} catch (e) {
					console.error("Terjadi kesalahan:", e);
					sycreply('Gagal Mix Emoji!');
				}
			}
			break;
			case 'reminder': {
    if (!text || !args[0] || !args[1]) return sycreply('Gunakan: !reminder [waktu(detik)] [pesan]');
    const time = parseInt(args[0]) * 1000;
    const message = args.slice(1).join(' ');

    sycreply(`Pengingat diatur! Bot akan mengingatkan dalam ${args[0]} detik.`);
    setTimeout(() => {
        sycreply(`⏰ Pengingat: ${message}`);
    }, time);
}
break;
			case 'qc':
			case 'quote':
			case 'fakechat': {
				if (!text && !m.quoted) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
				try {
					let ppnya = await sych.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
					let pesan = text || m.quoted.text;
					let res = await quotedLyo(pesan, m.pushName, ppnya);
					// Debugging base64
					let base64Image = res.result.image;
					console.log('Base64 Data (partial):', base64Image.slice(0, 100));
					// Perbaiki format jika header hilang
					if (!base64Image.startsWith('data:image/')) {
						base64Image = `data:image/webp;base64,${base64Image}`;
					}
					// Validasi base64
					if (!/^data:image\/(png|jpeg|jpg|webp);base64,/.test(base64Image)) {
						throw new Error('Invalid base64 format. Expected image format.');
					}
					// Konversi base64 ke buffer
					let buffer = Buffer.from(base64Image.split(',')[1], 'base64');
					// Pastikan gambar berbentuk persegi
					buffer = await sharp(buffer).resize({
						width: 512, // Ukuran persegi
						height: 512, // Ukuran persegi
						fit: 'contain', // Atur agar proporsional
						background: {
							r: 0,
							g: 0,
							b: 0,
							alpha: 0
						}, // Latar belakang transparan
					}).webp().toBuffer();
					// Kirim buffer sebagai stiker
					await sych.sendAsSticker(m.chat, buffer, m, {
						packname: packname,
						author: author
					});
				} catch (e) {
					console.error(e);
					sycreply('Terjadi kesalahan: ' + e.message);
				}
			}
			break;
			case 'brat': {
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`*${prefix + command}* Teksnya`);
				try {
					// Log langkah pertama
					console.log('Mengambil gambar dari API pertama...');
					const response = await fetch('https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(text || m.quoted.text));
					if (!response.ok) throw new Error('API pertama gagal merespons');
					const buffer = await response.buffer();
					console.log('Gambar berhasil diambil dari API pertama, mulai konversi...');
					const outputPath = './temp_sticker.webp';
					await sharp(buffer).resize(512, 512, {
						fit: 'contain'
					}).webp({
						quality: 100
					}).toFile(outputPath);
					console.log('Konversi ke WebP selesai, mengirim stiker...');
					await sych.sendMessage(m.chat, {
						sticker: {
							url: outputPath
						}
					}, {
						quoted: m
					});
					console.log('Stiker berhasil dikirim, menghapus file sementara...');
					fs.unlinkSync(outputPath);
				} catch (e) {
					console.error('Error pada API pertama:', e.message);
					try {
						// Log langkah kedua
						console.log('Mengambil gambar dari API kedua...');
						const response = await fetch('https://mannoffc-x.hf.space/brat?q=' + encodeURIComponent(text || m.quoted.text));
						if (!response.ok) throw new Error('API kedua gagal merespons');
						const buffer = await response.buffer();
						console.log('Gambar berhasil diambil dari API kedua, mulai konversi...');
						const outputPath = './temp_sticker.webp';
						await sharp(buffer).resize(512, 512, {
							fit: 'contain'
						}).webp({
							quality: 100
						}).toFile(outputPath);
						console.log('Konversi ke WebP selesai, mengirim stiker...');
						await sych.sendMessage(m.chat, {
							sticker: {
								url: outputPath
							}
						}, {
							quoted: m
						});
						console.log('Stiker berhasil dikirim, menghapus file sementara...');
						fs.unlinkSync(outputPath);
					} catch (e) {
						console.error('Error pada API kedua:', e.message);
						sycreply('Server Brat Sedang Offline!');
					}
				}
			}
			break;
			// Fungsi untuk membuat metadata Exif
			async function generateExif(packname, author) {
				const exif = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author
				};
				const jsonBuffer = Buffer.from(JSON.stringify(exif), 'utf-8');
				const exifBuffer = Buffer.concat([
					Buffer.from([0x00, 0x00, 0x16, 0x00, 0x00]),
					jsonBuffer
				]);
				return exifBuffer;
			}
			case 'sticktele': {
				if (!text) return sycreply(`*${prefix + command}* membutuhkan query teks`);
				try {
					console.log('Mengambil data dari API Telegram Sticker...');
					const apiUrl = `https://api.siputzx.my.id/api/d/telegramsticker?query=${encodeURIComponent(text)}`;
					const response = await fetch(apiUrl);
					if (!response.ok) throw new Error('Gagal merespons dari API');
					const result = await response.json();
					if (!result.stickers || result.stickers.length === 0) {
						return sycreply('Tidak ada stiker yang ditemukan untuk query tersebut.');
					}
					console.log('Stiker ditemukan, mengambil stiker pertama...');
					const sticker = result.stickers[0]; // Ambil stiker pertama
					const stickerBuffer = await fetch(sticker.fileUrl).then(res => res.buffer());
					console.log('Mengirim stiker...');
					await sych.sendMessage(m.chat, {
						sticker: stickerBuffer
					}, {
						quoted: m
					});
					console.log('Stiker berhasil dikirim.');
				} catch (e) {
					console.error('Error:', e.message);
					sycreply(`Terjadi kesalahan: ${e.message}`);
				}
			}
			break;
			case 'wasted': {
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await sych.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'Nih Bro', m)
					} else {
						sycreply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					sycreply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'drivedl': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} url_drive`)
				if (!text.includes('drive.google.com')) return sycreply('Url Tidak Mengandung Hasil Dari Google Drive!')
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					await sych.sendMessage(m.chat, {
						react: {
							text: "✅",
							key: m.key
						}
					});
					const apiUrl = `https://api.agatz.xyz/api/drivedl?url=${text}`;
					const response = await fetch(apiUrl);
					const hasil = await response.json();
					if (hasil.status !== 200 || !hasil.data) {
						sycreply('File Tidak ditemukan!')
					} else {
						await sych.sendFileUrl(m.chat, hasil.data.download, `*🎐File:* ${hasil.data.name}\n*Link:* ${hasil.data.link}`, m);
					}
				} catch (e) {
					sycreply('Server downloader Google Drive sedang offline!');
				}
			}
			break;
			case 'kucing': {
				try {
					// Memberi tahu pengguna bahwa gambar sedang dimuat
					sycreply('Loading, mohon tunggu sebentar...');
					// Logging untuk proses pengambilan data
					console.log('Mengambil gambar kucing dari server...');
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cats'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🐱', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
					console.log('Gambar kucing berhasil dikirim.');
				} catch (e) {
					console.error('Error saat mengambil gambar kucing:', e);
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'encode': {
				if (!text) return sycreply('Harap masukkan teks yang ingin dienkripsi!');
				try {
					// Proses encoding Base64
					const encodedText = Buffer.from(text, 'utf-8').toString('base64');
					sycreply(`${encodedText}`);
				} catch (err) {
					sycreply('Terjadi kesalahan saat mengenkripsi teks.');
				}
			}
			break;
			case 'decode': {
				if (!text) return sycreply('Harap masukkan teks terenkripsi untuk didekode!');
				try {
					// Proses decoding Base64
					const decodedText = Buffer.from(text, 'base64').toString('utf-8');
					sycreply(`${decodedText}`);
				} catch (err) {
					sycreply('Pesan tidak valid atau bukan Base64.');
				}
			}
			break;
			case 'cekcuaca': {
				if (!text) return sycreply('Masukkan lokasi! Contoh: cekcuaca Jakarta');
				try {
					const url = `https://wttr.in/${encodeURIComponent(text)}?format=%l:+%C+%t+%h+%w`;
					const res = await fetch(url);
					if (!res.ok) throw new Error('Gagal mendapatkan data cuaca!');
					const weatherInfo = await res.text();
					// Terjemahkan hasil cuaca ke Bahasa Indonesia
					const translated = await translate(weatherInfo, {
						to: 'id'
					});
					sycreply(`🌤️ Informasi Cuaca:\n\n${translated}`);
				} catch (error) {
					console.error(error);
					sycreply('Terjadi kesalahan saat mengambil data cuaca. Pastikan lokasi yang dimasukkan benar.');
				}
			}
			break;
			case 'bluearchive': {
				try {
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/blue-archive'
						}
					}, {
						quoted: m
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'delowner':
    if (!isCreator) return sycreply('Perintah ini hanya dapat digunakan oleh creator!');
    if (!args[0]) return sycreply('Masukkan nomor yang ingin dihapus dari owner!');
    const removeOwner = args[0].replace(/[^0-9]/g, '');
    if (!global.owner.includes(removeOwner)) return sycreply('Nomor tersebut tidak ada dalam daftar owner!');
    global.owner = global.owner.filter(num => num !== removeOwner);
    fs.writeFileSync('./setown.js', `global.owner = ${JSON.stringify(global.owner)};`);
    sycreply(`Berhasil menghapus owner: ${removeOwner}`);
    break;
    case 'addowner':
    if (!isCreator) return sycreply('Perintah ini hanya dapat digunakan oleh creator!');
    if (!args[0]) return sycreply('Masukkan nomor yang ingin ditambahkan sebagai owner!');
    const newOwner = args[0].replace(/[^0-9]/g, '');
    if (global.owner.includes(newOwner)) return sycreply('Nomor tersebut sudah menjadi owner!');
    global.owner.push(newOwner);
    fs.writeFileSync('./setown.js', `global.owner = ${JSON.stringify(global.owner)};`);
    sycreply(`Berhasil menambahkan owner: ${newOwner}`);
    break;
    case 'listowner':
    const ownerList = global.owner.map((num, index) => `${index + 1}. ${num}`).join('\n');
    sycreply(`Daftar Owner:\n${ownerList}`);
    break;
			case 'cjpn': {
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/japan'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇯🇵', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'ckorea': {
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/korea'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇰🇷', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			// CASE untuk memulai chat rahasia
			case 'startsecret': {
				if (!m.isGroup) return sycreply('Fitur ini hanya bisa digunakan di grup!');
				let target = m.mentionedJid[0]; // Ambil pengguna yang ditandai
				if (!target) return sycreply('Tag pengguna yang ingin diajak chat rahasia!');
				// Cek apakah target sudah dalam sesi rahasia
				if (secretChat[target]) return sycreply('Pengguna tersebut sudah berada dalam sesi rahasia!');
				// Simpan sesi rahasia
				secretChat[target] = {
					partner: m.sender,
					chat: []
				};
				secretChat[m.sender] = {
					partner: target,
					chat: []
				};
				sycreply(`✅ Sesi chat rahasia dimulai dengan @${target.split('@')[0]}.\nGunakan perintah "!endsecret" untuk mengakhiri sesi.`);
			}
			break;
			// CASE untuk mengirim pesan rahasia
			case 'secretmsg': {
				if (!secretChat[m.sender]) return sycreply('Kamu tidak berada dalam sesi rahasia!');
				let partner = secretChat[m.sender].partner;
				let msg = text; // Ambil teks dari pengguna
				// Kirim pesan rahasia
				secretChat[partner].chat.push(msg);
				secretChat[m.sender].chat.push(msg);
				sych.sendMessage(partner, {
					text: `📩 Pesan Rahasia: ${msg}`
				}, {
					quoted: m
				});
				sycreply('📨 Pesan rahasia terkirim!');
			}
			break;
			// CASE untuk mengakhiri sesi chat rahasia
			case 'endsecret': {
				if (!secretChat[m.sender]) return sycreply('Kamu tidak berada dalam sesi rahasia!');
				let partner = secretChat[m.sender].partner;
				// Hapus sesi rahasia
				delete secretChat[m.sender];
				delete secretChat[partner];
				sycreply('🚫 Sesi chat rahasia telah berakhir.');
				sych.sendMessage(partner, {
					text: '🚫 Sesi chat rahasia telah berakhir.'
				});
			}
			break;
			case 'cindo': {
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/indonesia'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇮🇩', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'cthai': {
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/thailand'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇹🇭', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'cviet': {
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/vietnam'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇻🇳', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'cchina': {
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/china'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇨🇳', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'trigger':
			case 'triggered': {
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await sych.sendMessage(m.chat, {
							document: {
								url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url
							},
							fileName: 'triggered.gif',
							mimetype: 'image/gif'
						}, {
							quoted: m
						})
					} else {
						sycreply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					sycreply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'setexif': {
				if (!isCreator) return sycreply(mess.owner)
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} packname|author`)
				global.packname = text.split("|")[0]
				global.author = text.split("|")[1]
				sycreply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
			}
			break
			case 'nulis': {
				sycreply(`**< / >* Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
			}
			break
			case 'nuliskiri': {
				if (!text) return sycreply(`Kirim perintah *${prefix + command}* Teksnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', ['./src/nulis/images/buku/sebelumkiri.jpg', '-font', './src/nulis/font/Indie-Flower.ttf', '-size', '960x1280', '-pointsize', '23', '-interline-spacing', '2', '-annotate', '+140+153',
					fixHeight, './src/nulis/images/buku/setelahkiri.jpg'
				]).on('error', () => sycreply(mess.error)).on('exit', () => {
					sych.sendMessage(m.chat, {
						image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'),
						caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
					}, {
						quoted: m
					})
				})
			}
			break
			case 'nuliskanan': {
				if (!text) return sycreply(`Kirim perintah *${prefix + command}* Teksnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', ['./src/nulis/images/buku/sebelumkanan.jpg', '-font', './src/nulis/font/Indie-Flower.ttf', '-size', '960x1280', '-pointsize', '23', '-interline-spacing', '2', '-annotate', '+128+129',
					fixHeight, './src/nulis/images/buku/setelahkanan.jpg'
				]).on('error', () => sycreply(mess.error)).on('exit', () => {
					sych.sendMessage(m.chat, {
						image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'),
						caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
					}, {
						quoted: m
					})
				})
			}
			break
			case 'foliokiri': {
				if (!text) return sycreply(`Kirim perintah *${prefix + command}* Teksnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', ['./src/nulis/images/folio/sebelumkiri.jpg', '-font', './src/nulis/font/Indie-Flower.ttf', '-size', '1720x1280', '-pointsize', '23', '-interline-spacing', '4', '-annotate', '+48+185',
					fixHeight, './src/nulis/images/folio/setelahkiri.jpg'
				]).on('error', () => sycreply(mess.error)).on('exit', () => {
					sych.sendMessage(m.chat, {
						image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'),
						caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
					}, {
						quoted: m
					})
				})
			}
			break
			case 'tiktokstalk':
			case 'ttstalk':
			case 'tiktokprofile':
			case 'ttprofile': {
				if (!text) {
					console.log('TikTok username not provided.');
					return sycreply('*< / >* Example: ' + prefix + command + ' username_tiktok');
				}
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					console.log('Fetching TikTok profile for username:', text);
					const url = `https://api.tiklydown.eu.org/api/stalk?user=${text}`;
					const response = await fetch(url);
					const data = await response.json();
					if (data.status === 200 && data.data && data.data.user) {
						const user = data.data.user;
						const stats = data.data.stats;
						const profileMessage = `*Name:* ${user.nickname}\n*Username:* @${user.uniqueId}\n*Signature:* ${user.signature || 'No signature available'}\n*Followers:* ${stats.followerCount}\n*Following:* ${stats.followingCount}\n*Likes:* ${stats.heartCount}\n*Videos:* ${stats.videoCount}\n*Region:* ${user.region}\n*Verified:* ${user.verified ? 'Yes' : 'No'}`;
						sycreply(profileMessage)
					} else {
						console.log('Failed to retrieve TikTok profile data.');
						sycreply('Failed to retrieve TikTok profile or invalid username.');
					}
				} catch (e) {
					console.error('Error fetching TikTok profile:', e);
					sycreply('An error occurred while fetching the profile. Please try again later.');
				}
				break;
			}
			case 'foliokanan': {
				if (!text) return sycreply(`Kirim perintah *${prefix + command}* Teksnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', ['./src/nulis/images/folio/sebelumkanan.jpg', '-font', './src/nulis/font/Indie-Flower.ttf', '-size', '1720x1280', '-pointsize', '23', '-interline-spacing', '4', '-annotate', '+89+190',
					fixHeight, './src/nulis/images/folio/setelahkanan.jpg'
				]).on('error', () => sycreply(mess.error)).on('exit', () => {
					sych.sendMessage(m.chat, {
						image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'),
						caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
					}, {
						quoted: m
					})
				})
			}
			break
			case 'liriksearch': case 'liriks': {
    if (!text) {
        console.log('Lirik lagu tidak diberikan.');
        return sycreply('Contoh: ' + prefix + command + ' tak bisa ku teruskan dunia kita berbeda');
    }
    try {
        sycreply(mess.wait); // Memberikan respons sementara

        // Emoji animasi selama proses
        const reactEmojis = ["🎵", "🎶", "🔍", "🎶", "🎵", "✅"];
        for (const emoji of reactEmojis) {
            await sych.sendMessage(m.chat, {
                react: {
                    text: emoji,
                    key: m.key
                }
            });
        }

        console.log('Mencari lirik untuk:', text);
        const url = `https://api.agatz.xyz/api/lirik?message=${encodeURIComponent(text)}`;
        const response = await fetch(url);
        const result = await response.json();

        if (result.status === 200 && result.data && result.data.status) {
            const { title, album, thumb, lyrics } = result.data;

            // Mengirimkan hasil pencarian lirik dengan thumbnail API
            const message = `🎶 *Lirik Lagu* 🎶\n\n` +
                `*Judul:* ${title}\n` +
                `*Album:* ${album || 'Tidak diketahui'}\n\n` +
                `*Lirik:*\n${lyrics}`;

            // Menggunakan thumbnail dari API
            sych.sendMessage(m.chat, {
                text: message,
                contextInfo: {
                    externalAdReply: {
                        "showAdAttribution": true,
                        "containsAutoReply": true,
                        "title": `${title}`,
                        "body": `Album: ${album}`,
                        "previewType": "PHOTO",
                        "thumbnailUrl": thumb, // Mengambil thumbnail dari API
                        "sourceUrl": my.gh
                    }
                }
            }, {
                quoted: fkontak
            });

        } else {
            console.log('Gagal mengambil data lirik.');
            sycreply('Gagal menemukan lirik lagu atau lagu tidak ditemukan.');
        }
    } catch (e) {
        console.error('Error fetching lyrics:', e);
        sycreply('Terjadi kesalahan saat mencari lirik lagu. Silakan coba lagi nanti.');
    }
    break;
}
			case 'bass':
			case 'blown':
			case 'deep':
			case 'earrape':
			case 'fast':
			case 'fat':
			case 'nightcore':
			case 'reverse':
			case 'robot':
			case 'slow':
			case 'smooth':
			case 'tupai': {
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						let media = await sych.downloadAndSaveMediaMessage(qmsg)
						let ran = `./database/sampah/${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return sycreply(err)
							let buff = fs.readFileSync(ran)
							sych.sendMessage(m.chat, {
								audio: buff,
								mimetype: 'audio/mpeg'
							}, {
								quoted: m
							})
							fs.unlinkSync(ran)
						});
					} else {
						sycreply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
					}
				} catch (e) {
					sycreply('Gagal!')
				}
			}
			break
			case 'tinyurl':
			case 'shorturl':
			case 'shortlink': {
				if (!text || !isUrl(text)) return sycreply(`*< / >* Example: ${prefix + command} https://github.com/nazedev/hitori`)
				try {
					let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
					sycreply('Url : ' + anu.data)
				} catch (e) {
					sycreply('Gagal!')
				}
			}
			break
			case 'git':
			case 'gitclone': {
				if (!args[0]) return sycreply(`*< / >* Example: ${prefix + command} https://github.com/nazedev/hitori`)
				if (!isUrl(args[0]) && !args[0].includes('github.com')) return sycreply('Gunakan Url Github!')
				let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || []
				try {
					sych.sendMessage(m.chat, {
						document: {
							url: `https://api.github.com/repos/${user}/${repo}/zipball`
						},
						fileName: repo + '.zip',
						mimetype: 'application/zip'
					}, {
						quoted: m
					}).catch((e) => sycreply(mess.error))
				} catch (e) {
					sycreply('Gagal!')
				}
			}
			break
			// Ai Menu
			// Variabel global untuk menyimpan status auto AI
			// Case untuk mengatur autoai
			case 'autoai': {
				if (!isCreator) return sycreply(mess.owner); // Memeriksa apakah pengirim adalah pembuat bot
				if (!text) return sycreply(`Gunakan: ${prefix + command} on/off`); // Memastikan ada teks untuk mengaktifkan/mematikan
				if (text.toLowerCase() === 'on') {
					if (autoAi) {
						// Jika autoAi sudah aktif, beri tahu bahwa sudah aktif sebelumnya
						sycreply('Auto AI sudah aktif sebelumnya!');
					} else {
						// Mengaktifkan autoAi jika belum aktif
						autoAi = true;
						sycreply('Auto AI telah diaktifkan!');
					}
				} else if (text.toLowerCase() === 'off') {
					if (!autoAi) {
						// Jika autoAi sudah dimatikan, beri tahu bahwa sudah dimatikan sebelumnya
						sycreply('Auto AI sudah dimatikan sebelumnya!');
					} else {
						// Mematikan autoAi jika aktif
						autoAi = false;
						sycreply('Auto AI telah dimatikan!');
					}
				} else {
					sycreply('Gunakan: autoai on/off');
				}
				break;
			}
			// Case untuk AI utama
			case 'ai': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} query`);
				try {
					let prompt = `${userPrompt}: ${text}`;
					let hasil = await yanzGpt(prompt);
					m.reply(hasil.choices[0].message.content);
				} catch (e) {
					try {
						let prompt = `${userPrompt}: ${text}`;
						let hasil = await bk9Ai(prompt);
						m.reply(hasil.BK9);
					} catch (e) {
						m.reply(pickRandom(['Fitur Ai sedang bermasalah!', 'Tidak dapat terhubung ke ai!', 'Sistem Ai sedang sibuk sekarang!', 'Fitur sedang tidak dapat digunakan!']));
					}
				}
				break;
			}
			// Auto AI: memproses semua pesan secara otomatis jika autoAi aktif
			case 'simi': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} query`)
				try {
					const hasil = await simi(text)
					m.reply(hasil.success)
				} catch (e) {
					m.reply('Server simi sedang offline!')
				}
			}
			break
			case 'txt2img': {
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/ai/flux?prompt=' + (text || m.quoted.text)
						}
					}, {
						quoted: m
					})
				} catch (e) {
					sycreply('Server Sedang Offline!')
				}
			}
			break
			case 'aimg': {
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/ai/flux?prompt=' + (text || m.quoted.text)
						}
					}, {
						quoted: m
					})
				} catch (e) {
					sycreply('Server Sedang Offline!')
				}
			}
			break
			case 'dukun': {
    if (!text) return sycreply(`Kirim perintah *${prefix + command}* diikuti dengan nama yang ingin dicari artinya.`);
    const nama = text.trim();
    const loadingMessage = await sycreply('Sedang mencari arti nama... Mohon tunggu sebentar.');
    console.log(`Memulai proses pencarian arti nama untuk: ${nama}`);
    try {
        let response = await fetch(`https://api.siputzx.my.id/api/ai/dukun?content=${encodeURIComponent(nama)}`);
        console.log(`Mengirim permintaan ke API: https://api.siputzx.my.id/api/ai/dukun?content=${nama}`);
        let result = await response.json();
        console.log('Respon API diterima:', result);
        if (result.status) {
            await sych.sendMessage(m.chat, {
                text: result.data
            });
            console.log('Pesan arti nama berhasil dikirim ke pengguna.');
        } else {
            await sych.sendMessage(m.chat, {
                text: 'Maaf, tidak dapat menemukan arti nama. Silakan coba lagi nanti.'
            });
            console.log('API gagal memberikan hasil yang valid.');
        }
    } catch (e) {
        console.error('Terjadi kesalahan saat memproses permintaan:', e);
        await sych.sendMessage(m.chat, {
            text: 'Server sedang mengalami gangguan. Silakan coba lagi nanti.'
        });
    } finally {
        if (loadingMessage && loadingMessage.key) {
            await sych.deleteMessage(m.chat, loadingMessage.key);
            console.log('Pesan loading telah dihapus.');
        } else {
            console.log('Pesan loading tidak ditemukan atau tidak valid.');
        }
    }
}
break;
			// Search Menu
			case 'google': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} query`)
				try {
					let anu = await google.search(text);
					let msg = anu.knowledge_panel.metadata.map(({
						title,
						value
					}) => {
						return `*${title}*\n_${value}_`
					}).join('\n\n');
					if (!anu.knowledge_panel.description && !anu.knowledge_panel.url) return sycreply('Result tidak ditemukan!')
					sycreply(anu.knowledge_panel.description + '\n' + anu.knowledge_panel.url + '\n\n' + msg)
				} catch (e) {
					sycreply('Pencarian Tidak Ditemukan!')
				}
			}
			break
			case 'gimage': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} query`)
				gis(text, async (err, result) => {
					if (err) return sycreply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					if (result == undefined) {
						sycreply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					} else if (result.length > 1) {
						let anu = pickRandom(result)
						await sych.sendMessage(m.chat, {
							image: {
								url: anu.url
							},
							caption: 'Url : ' + anu.url
						}, {
							quoted: m
						})
					} else sycreply('Gagal Mencari Gambar!')
				});
			}
			break
			case 'play2': case 'ytplay2': case 'yts2': case 'ytsearch2': case 'youtubesearch2': {
    if (!text) return m.reply(`Example: ${prefix + command} dj komang`);
    m.reply(mess.wait);

    try {
        const res = await yts.search(text); // Pencarian berdasarkan kata kunci
        const hasil = res.all.slice(0, 15); // Ambil maksimal 15 hasil

        if (hasil.length === 0) return m.reply('Tidak ada hasil yang ditemukan!');

        let finalText = `*Search Results for:* _${text}_\n\n`;
        hasil.forEach((video, index) => {
            finalText += `${index + 1}. *${video.title || 'Tidak tersedia'}*\n`;
            finalText += `   🔗 *Link:* ${video.url || 'Tidak tersedia'}\n`;
            finalText += `   ⏳ *Durasi:* ${video.timestamp || 'Tidak tersedia'}\n\n`;
        });

        await sych.sendMessage(m.chat, { text: finalText }, { quoted: m }); // Kirim hasil pencarian
    } catch (e) {
        m.reply('Terjadi kesalahan saat mencari video!');
    }
}
break;
			case 'typodetect': {
    if (!isCreator) return sycreply("Fitur ini hanya bisa digunakan oleh owner.");
    if (!args[0]) return sycreply("Penggunaan: *typodetect on* atau *typodetect off*");

    if (args[0].toLowerCase() === 'on') {
        typoDetectionEnabled = true;
        return sycreply("Fitur deteksi typo telah diaktifkan.");
    } else if (args[0].toLowerCase() === 'off') {
        typoDetectionEnabled = false;
        return sycreply("Fitur deteksi typo telah dinonaktifkan.");
    } else {
        return sycreply("Penggunaan yang benar: *typodetect on* atau *typodetect off*");
    }
}
			case 'play': case 'ytplay': case 'yts': case 'ytsearch': case 'youtubesearch': {
    if (!text) return m.reply(`Example: ${prefix + command} dj komang`);
    m.reply(mess.wait);

    try {
        const res = await yts.search(text); // Pencarian berdasarkan kata kunci
        const hasil = res.all.slice(0, 15); // Ambil maksimal 15 hasil

        if (hasil.length === 0) return m.reply('Tidak ada hasil yang ditemukan!');

        let finalText = `*Search Results for:* _${text}_\n\n`;
        hasil.forEach((video, index) => {
            finalText += `${index + 1}. *${video.title || 'Tidak tersedia'}*\n`;
            finalText += `   🔗 *Link:* ${video.url || 'Tidak tersedia'}\n`;
            finalText += `   ⏳ *Durasi:* ${video.timestamp || 'Tidak tersedia'}\n\n`;
        });

        await sych.sendMessage(m.chat, { text: finalText }, { quoted: m }); // Kirim hasil pencarian
    } catch (e) {
        m.reply('Terjadi kesalahan saat mencari video!');
    }
}
break;
			case 'pinterest':
			case 'pint': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} hu tao`);
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					let anu = await pinterest(text); // Panggil API pencarian Pinterest
					if (anu.length < 1) return sycreply('Pencarian tidak ditemukan!');
					// Batasi hasil ke 5 item teratas dan siapkan carousel card
					const carouselCards = await Promise.all(anu.slice(0, 5).map(async (url, index) => ({
						header: {
							title: `Hasil ${index + 1}`,
							hasMediaAttachment: true,
							imageMessage: (await generateWAMessageContent({
								image: {
									url
								}
							}, {
								upload: sych.waUploadToServer
							})).imageMessage
						},
						body: {
							text: "Hasil pencarian Pinterest untuk: " + text
						},
						footer: {
							text: "Klik tombol di bawah untuk melihat sumber."
						},
						nativeFlowMessage: {
							buttons: [{
								"name": "cta_url",
								"buttonParamsJson": JSON.stringify({
									display_text: "Lihat di Pinterest",
									url
								})
							}]
						}
					})));
					// Buat pesan carousel
					const carouselMessage = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadata: {},
									deviceListMetadataVersion: 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.fromObject({
									body: {
										text: `Hasil pencarian untuk: ${text}`
									},
									footer: {
										text: "Pinterest Bot by Sych"
									},
									header: {
										hasMediaAttachment: false
									},
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
										cards: carouselCards
									})
								})
							}
						}
					}, {});
					// Kirim pesan carousel
					await sych.relayMessage(m.chat, carouselMessage.message, {
						messageId: carouselMessage.key.id
					});
				} catch (e) {
					console.error("Kesalahan saat mengirim carousel:", e);
					await sych.sendMessage(m.chat, {
						text: "Terjadi kesalahan saat memproses permintaan. Silakan coba lagi atau hubungi admin."
					}, {
						quoted: m
					});
				}
			}
			break;
			case 'wallpaper': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} hu tao`)
				try {
					let anu = await wallpaper(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						sycreply('Post not available!');
					} else {
						await sych.sendMessage(m.chat, {
							image: {
								url: result.image[0]
							},
							caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`
						}, {
							quoted: m
						})
					}
				} catch (e) {
					sycreply('Server wallpaper sedang offline!')
				}
			}
			break
			case 'checklocation': {
				if (!isCreator) return sycreply('Fitur ini hanya dapat digunakan oleh owner bot.');
				let ipUrl = 'https://ipinfo.io/json';
				try {
					const res = await axios.get(ipUrl);
					let locationInfo = res.data;
					let response = `📍 *Lokasi Bot:*\n\n`;
					response += `- Negara: ${locationInfo.country}\n`;
					response += `- Kota: ${locationInfo.city}\n`;
					response += `- ISP: ${locationInfo.org}\n`;
					response += `- Koordinat: ${locationInfo.loc}\n`;
					response += `- Zona Waktu: ${locationInfo.timezone}\n\n`;
					response += `_Lokasi ini berdasarkan data IP server bot._`;
					sycreply(response);
				} catch (error) {
					sycreply('Tidak dapat mendeteksi lokasi bot. Coba lagi nanti.');
				}
			}
			break;
			case 'cermin': {
				if (!text) return sycreply('Harap masukkan teks yang ingin dibalik!');
				const reversedText = text.split('').reverse().join('');
				sycreply(`Hasil:\n${reversedText}`);
			}
			break;
			case 'ringtone': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} black rover`)
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await sych.sendMessage(m.chat, {
					audio: {
						url: result.audio
					},
					fileName: result.title + '.mp3',
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
			}
			break
			case 'analyzechats': {
    if (!m.isGroup) return sycreply('Fitur ini hanya bisa digunakan di grup!');
    const chatData = store.messages[m.chat]?.array || [];
    const userActivity = {};
    chatData.forEach(msg => {
        const sender = msg.key?.participant || msg.key?.remoteJid;
        if (!userActivity[sender]) userActivity[sender] = 0;
        userActivity[sender]++;
    });
    const sortedActivity = Object.entries(userActivity)
        .sort((a, b) => b[1] - a[1])
        .map(([user, count]) => `@${user.split('@')[0]}: ${count} pesan`);
    sycreply(`📊 Analisis Aktivitas Grup:\n\n${sortedActivity.join('\n')}`, chatData.map(msg => msg.key?.participant));
}
break;
			case 'npm':
			case 'npmjs': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} axios`)
				let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
				let {
					objects
				} = await res.json()
				if (!objects.length) return sycreply('Pencarian Tidak di temukan')
				let txt = objects.map(({
					package: pkg
				}) => {
					return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
				}).join`\n\n`
				sycreply(txt)
			}
			break
			case 'style': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} sych`)
				let anu = await styletext(text)
				let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
				sycreply(txt)
			}
			break
			case 'spotify':
			case 'spotifysearch': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} alan walker alone`)
				const reactEmojis = ["🎵", "🎶", "🔍", "🎶", "🎵", "✅"];
        for (const emoji of reactEmojis) {
            await sych.sendMessage(m.chat, {
                react: {
                    text: emoji,
                    key: m.key
                }
            });
        }
        
				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					sycreply(txt)
					await sych.sendMessage(m.chat, {
						react: {
							text: '🔍', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Search Offline!')
				}
			}
			break
			// Downloader Menu
			case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
if (!isPremium) return m.reply(mess.prem);
    if (!text) return m.reply(`Example: ${prefix + command} url_youtube`);
    if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!');
    m.reply('Memproses permintaan Anda, harap tunggu...');

    try {
        console.log('Mengambil informasi video...');
        const info = await ytdl.getInfo(text);

        if (info.videoDetails.lengthSeconds > 300) {
            return m.reply('Video terlalu panjang. Silakan coba video dengan durasi lebih pendek.');
        }

        const title = info.videoDetails.title.replace(/[<>:"/\\|?*]/g, '');
        const outputPath = path.join('./downloads', `${title}.mp3`);
        const compressedPath = path.join('./downloads', `${title}_compressed.mp3`);

        if (!fs.existsSync('./downloads')) {
            fs.mkdirSync('./downloads', { recursive: true });
        }

        console.log('Memulai unduhan audio...');
        console.time('Unduhan Audio');
        const audioStream = ytdl(text, { filter: 'audioonly', quality: 'lowestaudio' });
        const tempFile = fs.createWriteStream(outputPath);

        audioStream.pipe(tempFile);

        tempFile.on('finish', () => {
            console.timeEnd('Unduhan Audio');
            console.log('Unduhan selesai, memulai kompresi...');
            console.time('Kompresi Audio');

            ffmpeg(outputPath)
                .audioBitrate(128)
                .outputOptions('-preset ultrafast') // Preset cepat
                .on('end', async () => {
                    console.timeEnd('Kompresi Audio');
                    console.log('Kompresi selesai, mengirim file...');
                    await sych.sendMessage(m.chat, {
                        audio: { url: compressedPath },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": title,
                "body": info.videoDetails.author.name,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": text
            }
        }
    }, {
        quoted: fkontak
    })

                    fs.unlinkSync(outputPath);
                    fs.unlinkSync(compressedPath);
                    console.log('Proses selesai, file dikirim!');
                })
                .on('error', (err) => {
                    console.error('Error saat mengompresi audio:', err);
                    m.reply('Terjadi kesalahan saat mengompresi audio.');
                })
                .save(compressedPath);
        });

        tempFile.on('error', (err) => {
            console.error('Error saat menulis file:', err);
            m.reply('Terjadi kesalahan saat menyimpan audio.');
        });

    } catch (e) {
        console.error('Error:', e);
        m.reply('Gagal memproses audio! Error: ' + e.message);
    }
}
break;
			case 'play3': {
    if (!text) return sycreply(`*< / >* Example: ${prefix + command} dj komang`);
    sycreply(mess.wait);

    const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
    for (const emoji of reactEmojis) {
        await sych.sendMessage(m.chat, {
            react: {
                text: emoji,
                key: m.key
            }
        });
    }

    try {
        const res = await yts.search(text);
        const hasil = res.all[0];
        if (!hasil || !hasil.url) return sycreply('Tidak ada hasil yang ditemukan!');

        const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}`;
        await sych.sendMessage(m.chat, {
            image: { url: hasil.thumbnail },
            caption: teksnya
        }, { quoted: m });

        const url = hasil.url;
        sycreply('Bentar mengunduh lagu..');

        // Cek durasi video
        const info = await ytdl.getInfo(url);
        if (info.videoDetails.lengthSeconds > 360) {
            return sycreply('Video terlalu panjang. Silakan coba video dengan durasi lebih pendek.');
        }

        const title = info.videoDetails.title.replace(/[<>:"/\\|?*]/g, '');
        const outputPath = path.join('./downloads', `${title}.mp3`);
        const compressedPath = path.join('./downloads', `${title}_compressed.mp3`);
        if (!fs.existsSync('./downloads')) {
            fs.mkdirSync('./downloads', { recursive: true });
        }

        console.log('Mulai mengunduh audio...');
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout: Proses unduhan terlalu lama!')), 60000)
        );

        await Promise.race([
            new Promise((resolve, reject) => {
                const audioStream = ytdl(url, { filter: 'audioonly', quality: 'lowestaudio' });
                const tempFile = fs.createWriteStream(outputPath);
                audioStream.pipe(tempFile);

                audioStream.on('progress', (chunkLength, downloaded, total) => {
                    console.log(`Mengunduh: ${((downloaded / total) * 100).toFixed(2)}%`);
                });

                audioStream.on('end', resolve);
                tempFile.on('finish', resolve);
                tempFile.on('error', (err) => reject(err));
            }),
            timeoutPromise
        ]);

        console.log('Mengunduh selesai, mulai mengompresi...');
        ffmpeg(outputPath)
            .audioBitrate(128)
            .outputOptions('-preset ultrafast')
            .on('end', async () => {
                await sych.sendMessage(m.chat, {
                    audio: { url: compressedPath },
                    mimetype: 'audio/mpeg',
                    contextInfo: {
                        externalAdReply: {
                            title: title,
                            body: 'Klik untuk melihat sumber',
                            thumbnailUrl: hasil.thumbnail,
                            sourceUrl: url
                        }
                    }
                }, { quoted: m });

                fs.unlinkSync(outputPath);
                fs.unlinkSync(compressedPath);
                console.log('Selesai mengirim audio.');
            })
            .on('error', (err) => {
                console.error('Error saat mengompresi audio:', err);
                sycreply('Terjadi kesalahan saat mengompresi audio.');
            })
            .save(compressedPath);

    } catch (e) {
        console.error('Error:', e);
        sycreply('Gagal memproses permintaan!');
    }
}
break;
case 'song': {
if (!text) return m.reply(`Example : ${prefix + command} anime whatsapp status`)
await m.reply(mess.wait);
let yts = require("youtube-yts")
        let look = await yts(text);
        let convert = look.videos[0];       
const pl = await youtube(convert.url)
await sych.sendMessage(m.chat,{
    audio: { url: pl.mp3  },
    fileName: convert.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:convert.title,
            body: botname,
            thumbnailUrl: convert.image,
            sourceUrl: pl.mp3,
            mediaType:1,
            mediaUrl:convert.url,
        }

    },
},{quoted:m})
m.reply('SORYY BRE KLO MB LAGUNYA GEDE SOALNYA BIAR JERNIH MUSIKNYA')
}
break
			case 'ig':
			case 'instagram':
			case 'instadl':
			case 'igdown':
			case 'igdl': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return sycreply('Url Tidak Mengandung Result Dari Instagram!')
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				try {
					const hasil = await multiDownload(text);
					if (hasil.length < 0) return sycreply('Postingan Tidak Tersedia atau Privat!')
					for (let i = 0; i < hasil.length; i++) {
						await sych.sendFileUrl(m.chat, hasil[i].path, 'Done', m)
					}
				} catch (e) {
					try {
						let hasil = await fetchJson(api('hitori', '/download/instagram', {
							url: text
						}, 'apikey'))
						if (hasil.result.length < 0) return sycreply('Postingan Tidak Tersedia atau Privat!')
						for (let i = 0; i < hasil.result.length; i++) {
							await sych.sendFileUrl(m.chat, hasil.result[i].imageUrl, 'Done', m)
						}
					} catch (e) {
						sycreply('Postingan Tidak Tersedia atau Privat!')
					}
				}
			}
			break
			case 'getq': {
    if (!m.quoted) return sycreply('Balas pesan yang ingin diambil datanya!');
    let quotedMessage = m.quoted;
    let messageContent = quotedMessage.msg || quotedMessage;
    let messageType = Object.keys(messageContent)[0];
    let messageData = {
        key: {
            remoteJid: quotedMessage.chat,
            participant: quotedMessage.sender,
            fromMe: quotedMessage.fromMe,
            id: quotedMessage.id,
        },
        message: messageContent,
    };
    sycreply(`Kode yang dihasilkan:\n\n` + monospace(JSON.stringify(messageData, null, 2)));
}
break;
			case 'igstory':
			case 'instagramstory':
			case 'instastory':
			case 'storyig': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					for (let i = 0; i < hasil.results.length; i++) {
						await sych.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					sycreply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok':
			case 'tiktokdown':
			case 'ttdown':
			case 'ttdl':
			case 'tt':
			case 'ttmp4':
			case 'ttvideo':
			case 'tiktokmp4':
			case 'tiktokvideo': {
				if (!text) {
					console.log('Teks URL TikTok tidak ditemukan.');
					return sycreply(`*< / >* Example: ${prefix + command} url_tiktok`);
				}
				if (!text.includes('tiktok.com')) {
					console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
					return sycreply('Url Tidak Mengandung Result Dari Tiktok!');
				}
				try {
					console.log('Memulai proses pengunduhan dari URL TikTok:', text);
					const hasil = await tiktokDl(text);
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					console.log('Proses pengunduhan berhasil.');
					if (hasil && hasil.size_nowm) {
						console.log('Video tanpa watermark ditemukan.');
						await sych.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m);
						await sych.sendMessage(m.chat, {
							react: {
								text: '🎵', // Emoji yang diinginkan
								key: m.key // Memberikan reaksi pada pesan perintah
							}
						});
					} else {
						console.log('Tidak ada video tanpa watermark, mengirimkan gambar...');
						for (let i = 0; i < hasil.data.length; i++) {
							console.log(`Mengirim gambar ke-${i + 1}.`);
							await sych.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i + 1}`, m);
						}
					}
				} catch (e) {
					console.error('Gagal mengunduh atau URL tidak valid:', e);
					sycreply('Gagal/Url tidak valid!');
				}
			}
			break;
			case 'ttmp3':
			case 'tiktokmp3':
			case 'ttaudio':
			case 'tiktokaudio': {
				if (!text) {
					console.log('Teks URL TikTok tidak ditemukan.');
					return sycreply(`*< / >* Example: ${prefix + command} url_tiktok`);
				}
				if (!text.includes('tiktok.com')) {
					console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
					return sycreply('Url Tidak Mengandung Result Dari Tiktok!');
				}
				try {
					console.log('Memulai proses pengunduhan audio dari URL TikTok:', text);
					const hasil = await tiktokDl(text);
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					console.log('Proses pengunduhan berhasil, audio ditemukan.');
					// Mengirimkan pesan audio
					await sych.sendMessage(m.chat, {
						audio: {
							url: hasil.music_info.url
						},
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🎶', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
					console.log('Audio berhasil dikirimkan dengan informasi terkait.');
				} catch (e) {
					console.error('Gagal mengunduh atau URL tidak valid:', e);
					sycreply('Gagal/Url tidak valid!');
				}
			}
			break;
			case 'fb':
			case 'fbdl':
			case 'fbdown':
			case 'facebook':
			case 'facebookdl':
			case 'facebookdown':
			case 'fbdownload':
			case 'fbmp4':
			case 'fbvideo': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return sycreply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						sycreply('Video Tidak ditemukan!')
					} else {
						sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						await sych.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
				} catch (e) {
					sycreply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'videymp4': {
				if (!isPremium) return sycreply(mess.prem);
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} url_videy`)
				if (!text.includes('videy.co')) return sycreply('Url Tidak Mengandung Hasil Dari Videy!')
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					await sych.sendMessage(m.chat, {
						react: {
							text: "✅",
							key: m.key
						}
					});
					const apiUrl = `https://api.agatz.xyz/api/videydl?url=${text}`;
					const response = await fetch(apiUrl);
					const hasil = await response.json();
					if (hasil.status !== 200 || !hasil.data) {
						sycreply('Video Tidak ditemukan!')
					} else {
						await sych.sendFileUrl(m.chat, hasil.data, `*🎐Video Link:* ${hasil.data}`, m);
					}
				} catch (e) {
					sycreply('Server downloader Videy sedang offline!');
				}
			}
			break;
			case 'mediafire': {
				if (!text) {
					console.log('URL tidak diberikan');
					return sycreply(`*< / >* Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`);
				}
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) {
					console.log('URL tidak valid: ' + args[0]);
					return sycreply('URL tidak valid!');
				}
				console.log('URL MediaFire yang valid diterima:', args[0]);
				try {
					console.log('Mencoba mengunduh dari MediaFire...');
					const anu = await mediafireDl(text);
					console.log('Unduhan berhasil:', anu.name, 'Ukuran:', anu.size);
					await sych.sendMedia(m.chat, anu.link, decodeURIComponent(anu.name), `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Nama* : ${decodeURIComponent(anu.name)}\n*${setv} Ukuran* : ${anu.size}`, m);
					console.log('File berhasil dikirim ke chat:', m.chat);
					await sych.sendMessage(m.chat, {
						react: {
							text: '📚', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					console.log('Terjadi kesalahan saat mengunduh:', e);
					sycreply('Server download sedang offline!');
				}
			}
			break
			case 'spotifydl': {
				console.log("Proses mulai untuk command: spotifydl");
				// Cek apakah ada URL yang diberikan
				if (!text) {
					console.log("URL tidak diberikan. Mengirimkan contoh penggunaan.");
					return sycreply(`*< / >* Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`);
				}
				const reactEmojis = ["🎵", "🎶", "🔍", "🎶", "🎵", "✅"];
        for (const emoji of reactEmojis) {
            await sych.sendMessage(m.chat, {
                react: {
                    text: emoji,
                    key: m.key
                }
            });
        }
        
				// Validasi format URL
				if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) {
					console.log("URL tidak valid: " + args[0]);
					return sycreply('Url Invalid!');
				}
				try {
					// Coba kirim media dengan URL untuk mendownload
					console.log("Mencoba mengirim media dengan URL: " + 'https://spotifyapi.caliphdev.com/api/download/track?url=' + text);
					await sych.sendMedia(m.chat, 'https://spotifyapi.caliphdev.com/api/download/track?url=' + text, '', '', m);
					console.log("Media berhasil dikirim.");
					await sych.sendMessage(m.chat, {
						react: {
							text: '🔊', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					// Jika terjadi error (misalnya server offline)
					console.error("Terjadi kesalahan saat mencoba mengunduh: " + e.message);
					sycreply('Server download sedang offline!');
				}
			}
			break;
			// Quotes Menu
			case 'motivasi': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/motivasi.json'));
				sycreply(hasil)
			}
			break
			case 'bijak': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bijak.json'));
				sycreply(hasil)
			}
			break
			case 'dare': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/dare.json'));
				sycreply(hasil)
			}
			break
			case 'quotes': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/quotes.json'));
				sycreply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`)
			}
			break
			case 'truth': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/truth.json'));
				sycreply(`_${hasil}_`)
			}
			break
			case 'renungan': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/renungan.json'));
				sycreply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: hasil,
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
						}
					}
				});
			}
			break
			case 'bucin': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bucin.json'));
				sycreply(hasil)
			}
			break
			// Random Menu
			case 'coffe':
			case 'kopi': {
				await sych.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m)
			}
			break
			// Anime Menu
			case 'waifu': {
				try {
					if (text == 'nsfw') {
						const res = await fetchJson('https://api.waifu.pics/nsfw/waifu')
						await sych.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/waifu')
						await sych.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					}
				} catch (e) {
					sycreply('Server sedang offline!')
				}
			}
			break
			case 'neko': {
				try {
					if (text == 'nsfw') {
						const res = await fetchJson('https://api.waifu.pics/nsfw/neko')
						await sych.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/neko')
						await sych.sendFileUrl(m.chat, res.url, 'Random Neko', m)
					}
				} catch (e) {
					sycreply('Server sedang offline!')
				}
			}
			break
			

			// Fun Menu
			case 'dadu': {
				let ddsa = [{
					url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png',
					no: 1
				}, {
					url: 'https://telegra.ph/file/797f86e444755282374ef.png',
					no: 2
				}, {
					url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png',
					no: 3
				}, {
					url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png',
					no: 4
				}, {
					url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png',
					no: 5
				}, {
					url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png',
					no: 6
				}];
				let media = pickRandom(ddsa);
				try {
					// Mengunduh gambar dari URL
					const response = await fetch(media.url);
					const buffer = await response.buffer();
					// Mengonversi gambar menjadi WebP menggunakan sharp
					const outputPath = './temp_sticker.webp';
					await sharp(buffer).webp().toFile(outputPath);
					// Mengirim gambar sebagai stiker
					await sych.sendAsSticker(m.chat, outputPath, m, {
						packname: packname,
						author: author,
						isAvatar: 1
					});
					// Menghapus file sementara setelah digunakan
					fs.unlinkSync(outputPath);
				} catch (err) {
					console.error('Terjadi kesalahan:', err);
					sycreply('Terjadi kesalahan saat mengirimkan stiker.');
				}
			}
			break;
			case 'halah':
			case 'hilih':
			case 'huluh':
			case 'heleh':
			case 'holoh': {
				if (!m.quoted && !text) return sycreply(`Kirim/reply text dengan caption ${prefix + command}`)
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				sycreply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
			break
			case 'bisakah': {
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} saya menang?`)
				let bisa = ['Bisa', 'Coba Saja', 'Pasti Bisa', 'Mungkin Saja', 'Tidak Bisa', 'Tidak Mungkin', 'Coba Ulangi', 'Ngimpi kah?', 'yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				sycreply(`*Bisakah ${text}*\nJawab : ${keh}`)
			}
			break
			case 'apakah': {
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} saya bisa menang?`)
				let apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi', 'Mungkin Saja', 'Mungkin Tidak', 'Mungkin Iya', 'Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				sycreply(`*${command} ${text}*\nJawab : ${kah}`)
			}
			break
			case 'kapan':
			case 'kapankah': {
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} saya menang?`)
				let kapan = ['Besok', 'Lusa', 'Nanti', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi', 'Bulan Depan', 'Ntahlah', 'Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				sycreply(`*${command} ${text}*\nJawab : ${koh}`)
			}
			break
			case 'tanyakerang':
			case 'kerangajaib':
			case 'kerang': {
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} boleh pinjam 100?`)
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				sycreply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`)
			}
			break
			case 'cekmati': {
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} nama lu`)
				let teksnya = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let {
					data
				} = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`);
				sycreply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
			}
			break
			case 'ceksifat': {
				let sifat_a = ['Bijak', 'Sabar', 'Kreatif', 'Humoris', 'Mudah bergaul', 'Mandiri', 'Setia', 'Jujur', 'Dermawan', 'Idealis', 'Adil', 'Sopan', 'Tekun', 'Rajin', 'Pemaaf', 'Murah hati', 'Ceria', 'Percaya diri', 'Penyayang', 'Disiplin', 'Optimis', 'Berani', 'Bersyukur', 'Bertanggung jawab', 'Bisa diandalkan', 'Tenang', 'Kalem', 'Logis']
				let sifat_b = ['Sombong', 'Minder', 'Pendendam', 'Sensitif', 'Perfeksionis', 'Caper', 'Pelit', 'Egois', 'Pesimis', 'Penyendiri', 'Manipulatif', 'Labil', 'Penakut', 'Vulgar', 'Tidak setia', 'Pemalas', 'Kasar', 'Rumit', 'Boros', 'Keras kepala', 'Tidak bijak', 'Pembelot', 'Serakah', 'Tamak', 'Penggosip', 'Rasis', 'Ceroboh', 'Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				sycreply(teks)
			}
			break
			case 'cekkhodam': {
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} nama lu`);
				try {
					const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/cekkhodam.json'));
					// Validasi apakah hasil memiliki properti yang dibutuhkan
					if (hasil && hasil.nama && hasil.deskripsi) {
						sycreply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`);
					} else {
						sycreply('Maaf, data khodam tidak ditemukan atau sedang bermasalah.');
					}
				} catch (error) {
					console.error(error);
					sycreply('Terjadi kesalahan saat mengambil data khodam.');
				}
			}
			break;
			case 'jodohku': {
				if (!m.isGroup) return sycreply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jodoh = pickRandom(member)
				sycreply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`);
			}
			break
			case 'jadian': {
				if (!m.isGroup) return sycreply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				sycreply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`);
			}
			break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return sycreply(`*< / >* Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = {
					key: {
						fromMe: false,
						participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net',
						...(m.isGroup ? {
							remoteJid: m.chat
						} : {
							remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
						})
					},
					message: {
						conversation: teks1
					}
				}
				sych.sendMessage(m.chat, {
					text: teks2
				}, {
					quoted: ftelo
				});
			}
			break
			// Game Menu
			case 'slot': {
				await gameSlot(sych, m, db)
			}
			break
			case 'casino': {
				await gameCasinoSolo(sych, m, prefix, db)
			}
			break
			case 'rampok':
			case 'merampok': {
				await gameMerampok(m, db)
			}
			break
			case 'begal': {
				await gameBegal(sych, m, db)
			}
			break
			case 'suitpvp':
			case 'suit': {
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) sycreply(`Selesaikan suit mu yang sebelumnya`)
				if (m.mentionedJid[0] === m.sender) return sycreply(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return sycreply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`, m.chat, {
					mentions: [owner[1] + '@s.whatsapp.net']
				})
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return sycreply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				suit[id] = {
					chat: sycreply(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (suit[id]) sycreply(`_Waktu suit habis_`)
						delete suit[id]
					}, 60000),
					poin,
					poin_lose,
					timeout
				}
			}
			break
			//[ *CASE AI JOKO SIJAWA* ]
			case "joko": {
				if (!text) return sycreply("mau nanya apa sama joko\nExampel: .joko nama kamu siapa?")
				await sych.sendMessage(m.chat, {
					mimetype: 'audio/mp4',
					audio: {
						url: "https://api.siputzx.my.id/api/tools/tts?voice=jv-ID-DimasNeural&rate=0&pitch=0&volume=0&text=" + (await axios.get("https://api.siputzx.my.id/api/ai/joko?content=" + text)).data.data
					}
				}, {
					quoted: m
				});
			}
			break
			case 'ttc':
			case 'ttt':
			case 'tictactoe': {
				let TicTacToe = require('./lib/tictactoe');
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return sycreply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					sycreply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {
							X: '❌',
							O: '⭕',
							1: '1️⃣',
							2: '2️⃣',
							3: '3️⃣',
							4: '4️⃣',
							5: '5️⃣',
							6: '6️⃣',
							7: '7️⃣',
							8: '8️⃣',
							9: '9️⃣'
						} [v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await sych.sendMessage(room.x, {
						texr: str,
						mentions: parseMention(str)
					}, {
						quoted: m
					})
					await sych.sendMessage(room.o, {
						text: str,
						mentions: parseMention(str)
					}, {
						quoted: m
					})
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (tictactoe[roomnya.id]) sycreply(`_Waktu ${command} habis_`)
							delete tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					sych.sendMessage(m.chat, {
						text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''),
						mentions: m.mentionedJid
					}, {
						quoted: m
					})
					tictactoe[room.id] = room
				}
			}
			break
			case 'akinator': {
				if (text == 'start') {
					if (akinator[m.sender]) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
					akinator[m.sender] = new Akinator({
						region: 'id',
						childMode: false
					});
					await akinator[m.sender].start()
					let {
						key
					} = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`)
					sych.sendMessage(m.chat, {
						react: {
							text: '🛜', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
					akinator[m.sender].key = key.id
					akinator[m.sender].waktu = setTimeout(() => {
						if (akinator[m.sender]) sycreply(`_Waktu ${command} habis_`)
						delete akinator[m.sender];
					}, 3600000)
				} else if (text == 'end') {
					if (!akinator[m.sender]) return sycreply('Kamu tidak Sedang bermain Akinator!')
					delete akinator[m.sender];
					sycreply('Sukses Mengakhiri sessi Akinator')
				} else sycreply(`*< / >* Example : ${prefix + command} start/end`)
			}
			break
			case 'tebakbom': {
				if (tebakbom[m.sender]) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				tebakbom[m.sender] = {
					petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (tebakbom[m.sender]) sycreply(`_Waktu ${command} habis_`)
						delete tebakbom[m.sender];
					}, 120000)
				}
				sycreply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
				sych.sendMessage(m.chat, {
					react: {
						text: '💣', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
			}
			break
			case 'tekateki': {
				if (iGame(tekateki, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tekateki.json'));
				let {
					key
				} = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🔑', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
			break
			case 'tebaklirik': {
				if (iGame(tebaklirik, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaklirik.json'));
				let {
					key
				} = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🎼', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
			break
			case 'listsurah': {
				try {
					const surahList = ["1. Al-Fatihah", "2. Al-Baqarah", "3. Ali Imran", "4. An-Nisa", "5. Al-Ma'idah", "6. Al-An'am", "7. Al-A'raf", "8. Al-Anfal", "9. At-Tawbah", "10. Yunus", "11. Hud", "12. Yusuf", "13. Ar-Ra'd", "14. Ibrahim", "15. Al-Hijr", "16. An-Nahl", "17. Al-Isra", "18. Al-Kahf", "19. Maryam", "20. Ta-Ha", "21. Al-Anbiya", "22. Al-Hajj", "23. Al-Mu'minun", "24. An-Nur", "25. Al-Furqan", "26. Ash-Shu'ara", "27. An-Naml", "28. Al-Qasas", "29. Al-Ankabut", "30. Ar-Rum", "31. Luqman", "32. As-Sajdah", "33. Al-Ahzab", "34. Saba'", "35. Fatir", "36. Ya-Sin", "37. As-Saffat", "38. Sad", "39. Az-Zumar", "40. Ghafir", "41. Fussilat", "42. Ash-Shura", "43. Az-Zukhruf", "44. Ad-Dukhan", "45. Al-Jathiyah", "46. Al-Ahqaf", "47. Muhammad", "48. Al-Fath", "49. Al-Hujurat", "50. Qaf", "51. Az-Zariyat", "52. At-Tur", "53. An-Najm", "54. Al-Qamar", "55. Ar-Rahman", "56. Al-Waqi'ah", "57. Al-Hadid", "58. Al-Mujadilah", "59. Al-Hashr", "60. Al-Mumtahanah", "61. As-Saff", "62. Al-Jumu'ah", "63. Al-Munafiqun", "64. At-Taghabun", "65. At-Talaq", "66. At-Tahrim", "67. Al-Mulk", "68. Al-Qalam", "69. Al-Haqqah", "70. Al-Ma'arij", "71. Nuh", "72. Al-Jinn", "73. Al-Muzzammil", "74. Al-Muddathir", "75. Al-Qiyamah", "76. Al-Insan", "77. Al-Mursalat", "78. An-Naba'", "79. An-Nazi'at", "80. Abasa", "81. At-Takwir", "82. Al-Infitar", "83. Al-Mutaffifin", "84. Al-Inshiqaq", "85. Al-Buruj", "86. At-Tariq", "87. Al-A'la", "88. Al-Ghashiyah", "89. Al-Fajr", "90. Al-Balad", "91. Ash-Shams", "92. Al-Lail", "93. Ad-Duhaa", "94. Al-Inshirah", "95. At-Tin", "96. Al-'Alaq", "97. Al-Qadr", "98. Al-Bayyinah", "99. Az-Zalzalah", "100. Al-Adiyat", "101. Al-Qari'ah", "102. At-Takathur", "103. Al-Asr", "104. Al-Humazah", "105. Al-Fil", "106. Quraysh", "107. Al-Ma'un", "108. Al-Kawthar", "109. Al-Kafirun", "110. An-Nasr", "111. Al-Masad", "112. Al-Ikhlas", "113. Al-Falaq", "114. An-Nas"];
					const surahMessage = `*Daftar Surah Al-Qur'an:*\n\n${surahList.join('\n')}`;
					sycreply(surahMessage);
					sych.sendMessage(m.chat, {
						react: {
							text: '🕋', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
				} catch (error) {
					console.error('Error:', error.message);
					sycreply('Terjadi kesalahan saat menampilkan daftar surah.');
				}
			}
			break;
			case 'bacaansholat': {
				const bacaanshalat = {
					"result": [{
						"id": 1,
						"name": "Bacaan Iftitah",
						"arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
						"latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
						"terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
					}, {
						"id": 2,
						"name": "Al Fatihah",
						"arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
						"latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
						"terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
					}, {
						"id": 3,
						"name": "Bacaan Ruku",
						"arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
						"latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
						"terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
					}, {
						"id": 4,
						"name": "Bacaan Sujud",
						"arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
						"latin": "Subhaana robbiyal a'la wabihamdih (3x)",
						"terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
					}, {
						"id": 5,
						"name": "Bacaan Duduk Diantara Dua Sujud",
						"arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
						"latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
						"terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
					}, {
						"id": 6,
						"name": "Duduk Tasyahud Awal",
						"arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
						"latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
						"terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
					}, {
						"id": 7,
						"name": "Duduk Tasyahud Akhir",
						"arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
						"latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
						"terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
					}, {
						"id": 8,
						"name": "Salam",
						"arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
						"latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
						"terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
					}]
				}
				let bacaan = JSON.stringify(bacaanshalat)
				let json = JSON.parse(bacaan)
				let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
				let contoh = `*「 Bacaan Shalat 」*\n\n`
				sycreply(`${contoh} + ${data}`)
			}
			break
			case 'listdoa': {
				try {
					// Ambil data dari API
					const response = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api');
					const doaList = await response.json();
					// Format pesan
					const doaMessage = `*Daftar Doa Harian:*\n\n${doaList.map(doa => `${doa.id}. ${doa.doa}`).join('\n')}`;
					// Kirim pesan
					sycreply(doaMessage);
					// Kirim reaksi (opsional)
					sych.sendMessage(m.chat, {
						react: {
							text: '🙏', // Emoji reaksi
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
				} catch (error) {
					console.error('Error fetching doa list:', error.message);
					sycreply('Terjadi kesalahan saat menampilkan daftar doa.');
				}
				break;
			}
			case 'doa': {
				try {
					// Ambil ID doa dari argumen
					const id = args[0];
					if (!id) {
						return sycreply('Mohon masukkan ID doa. Contoh: *doa 1*');
					}
					// Menambahkan pesan loading dan menyimpan key untuk edit nanti
					let {
						key
					} = await m.reply('Mencari doa, mohon tunggu...');

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Ambil data dari API berdasarkan ID
					const response = await fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/${id}`);
					const doaData = await response.json();
					if (doaData.length === 0) {
						return m.reply('Doa dengan ID tersebut tidak ditemukan.', {
							edit: key
						});
					}
					const doa = doaData[0]; // Ambil data pertama (berdasarkan struktur API)
					// Format pesan
					const doaMessage = `*Doa: ${doa.doa}*\n\n` + `*Ayat:*\n${doa.ayat}\n\n` + `*Latin:*\n${doa.latin}\n\n` + `*Artinya:*\n${doa.artinya}`;
					// Kirim pesan setelah mengambil data
					m.reply(doaMessage, {
						edit: key
					});
					// Kirim reaksi (opsional)
					sych.sendMessage(m.chat, {
						react: {
							text: '🙏', // Emoji reaksi
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
				} catch (error) {
					console.error('Error fetching doa:', error.message);
					m.reply('Terjadi kesalahan saat menampilkan doa.', {
						edit: key
					});
				}
				break;
			}
			case 'quran': {
				if (!text) return sycreply(`*${prefix + command}* Masukkan nomor surah!`);
				const surahNumber = parseInt(text);
				if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
					return sycreply('Nomor surah tidak valid! Masukkan angka antara 1 hingga 114.');
				}
				// Array of surah names
				const surahNames = ["Al-Fatihah", "Al-Baqarah", "Ali Imran", "An-Nisa", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Ta-Ha", "Al-Anbiya", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan", "Ash-Shu'ara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajdah", "Al-Ahzab", "Saba'", "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf", "Az-Zariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqi'ah", "Al-Hadid", "Al-Mujadilah", "Al-Hashr", "Al-Mumtahanah", "As-Saff", "Al-Jumu'ah", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij", "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddathir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba'", "An-Nazi'at", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq", "Al-A'la", "Al-Ghashiyah", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Duhaa", "Al-Inshirah", "At-Tin", "Al-'Alaq", "Al-Qadr", "Al-Bayyinah", "Az-Zalzalah", "Al-Adiyat", "Al-Qari'ah", "At-Takathur", "Al-Asr", "Al-Humazah", "Al-Fil", "Quraysh", "Al-Ma'un", "Al-Kawthar", "Al-Kafirun", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"];
				// Menambahkan pesan loading dan menyimpan key untuk edit nanti
				let {
					key
				} = await m.reply('Mencari surah, mohon tunggu...');

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				try {
					console.log(`Mengambil data surah nomor ${surahNumber}...`);
					const response = await fetch(`https://api.siputzx.my.id/api/s/surah?no=${surahNumber}`);
					if (!response.ok) throw new Error('Gagal mengambil data dari API');
					const data = await response.json();
					if (!data.status || !data.data || data.data.length === 0) {
						return m.reply('Surah tidak ditemukan atau data tidak tersedia.', {
							edit: key
						});
					}
					// Get surah name from the array
					const surahName = surahNames[surahNumber - 1];
					let quranMessage = `*Surah Nomor ${surahNumber}: ${surahName}*\n\n`;
					for (const ayat of data.data) {
						quranMessage += `*Arab*: ${ayat.arab}\n`;
						quranMessage += `*Latin*: ${ayat.latin}\n`;
						quranMessage += `*Indo*: ${ayat.indo}\n\n`;
					}
					console.log('Data berhasil diambil, mengirim pesan...');
					m.reply(quranMessage.trim(), {
						edit: key
					});
					sych.sendMessage(m.chat, {
						react: {
							text: '🕌', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
				} catch (error) {
					console.error('Error saat mengambil data:', error.message);
					m.reply('Terjadi kesalahan saat mengambil data surah. Coba lagi nanti.', {
						edit: key
					});
				}
			}
			break;
			case 'tebakkata': {
				if (iGame(tebakkata, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkata.json'));
				let {
					key
				} = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
			break
			case 'family100': {
				if (family100.hasOwnProperty(m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/family100.json'));
				let {
					key
				} = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '💯', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					sycreply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
			break
			case 'susunkata': {
				if (iGame(susunkata, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/susunkata.json'));
				let {
					key
				} = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '📝', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
			break
			case 'tebakkimia': {
				if (iGame(tebakkimia, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkimia.json'));
				let {
					key
				} = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
			break
			case 'caklontong': {
				if (iGame(caklontong, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/caklontong.json'));
				let {
					key
				} = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '⁉️', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					sycreply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`)
					delete caklontong[m.chat + key.id]
				}
			}
			break
			case 'aitukam': {
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
				try {
					// Mengambil teks dari pesan atau pesan yang diteruskan
					const query = text || m.quoted.text;
					// Mengambil respons dari API
					const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/latukam?content=${encodeURIComponent(query)}`);
					// Mengecek apakah API memberikan respons yang benar
					if (hasil.status === true && hasil.data) {
						m.reply(hasil.data); // Mengirim balasan sesuai respons dari API
					} else {
						m.reply('Terjadi kesalahan saat mengambil data dari API!');
					}
				} catch (error) {
					m.reply('Terjadi kesalahan saat mengambil data dari API!');
					console.error('Error saat mengambil data dari API:', error);
				}
			}
			break;
			case 'meta': {
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
				try {
					// Mengambil teks dari pesan atau pesan yang diteruskan
					const query = text || m.quoted.text;
					// Mengambil respons dari API
					const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(query)}`);
					// Mengecek apakah API memberikan respons yang benar
					if (hasil.status === true && hasil.data) {
						m.reply(hasil.data); // Mengirim balasan sesuai respons dari API
					} else {
						m.reply('Terjadi kesalahan saat mengambil data dari API!');
					}
				} catch (error) {
					m.reply('Terjadi kesalahan saat mengambil data dari API!');
					console.error('Error saat mengambil data dari API:', error);
				}
			}
			break;
			case 'luminai': {
    // Cek apakah ada teks yang dikirim atau teks dari pesan yang dikutip
    if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        // Mengambil teks dari pesan atau pesan yang dikutip
        const query = text || m.quoted.text;

        // Mengambil respons dari API
        const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/luminai?content=${encodeURIComponent(query)}`);

        // Mengecek apakah API memberikan respons yang benar
        if (hasil.status === true && hasil.data) {
            m.reply(hasil.data); // Mengirim balasan sesuai respons dari API
        } else {
            m.reply('Terjadi kesalahan saat mengambil data dari API!');
        }
    } catch (error) {
        m.reply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;
case 'esia': {
    // Cek apakah ada teks yang dikirim atau teks dari pesan yang dikutip
    if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        // Mengambil teks dari pesan atau pesan yang dikutip
        const query = text || m.quoted.text;

        // Mengambil respons dari API
        const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/esia?content=${encodeURIComponent(query)}`);

        // Mengecek apakah API memberikan respons yang benar
        if (hasil.status === true && hasil.data) {
            m.reply(hasil.data); // Mengirim balasan sesuai respons dari API
        } else {
            m.reply('Terjadi kesalahan saat mengambil data dari API!');
        }
    } catch (error) {
        m.reply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;
case 'gemini': {
    // Cek apakah ada teks yang dikirim atau teks dari pesan yang dikutip
    if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        // Mengambil teks dari pesan atau pesan yang dikutip
        const query = text || m.quoted.text;

        // Mengambil respons dari API
        const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/bard?query=${encodeURIComponent(query)}`);

        // Mengecek apakah API memberikan respons yang benar
        if (hasil.status === true && hasil.data) {
            m.reply(hasil.data); // Mengirim balasan sesuai respons dari API
        } else {
            m.reply('Terjadi kesalahan saat mengambil data dari API!');
        }
    } catch (error) {
        m.reply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;
case 'llama': {
    // Cek apakah ada teks yang dikirim atau teks dari pesan yang dikutip
    if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        // Mengambil teks dari pesan atau pesan yang dikutip
        const query = text || m.quoted.text;

        // Mengambil respons dari API dengan prompt yang tersimpan
        const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/llama?prompt=${encodeURIComponent(llamaPrompt)}&message=${encodeURIComponent(query)}`);

        // Mengecek apakah API memberikan respons yang benar
        if (hasil.status === true && hasil.data) {
            m.reply(hasil.data); // Mengirim balasan sesuai respons dari API
        } else {
            m.reply('Terjadi kesalahan saat mengambil data dari API!');
        }
    } catch (error) {
        m.reply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;

// Fungsi untuk mengatur autoai2
case 'autoai2': {
    // Mengecek apakah ada parameter on/off
    if (!isCreator) return sycreply(mess.owner); // Memeriksa apakah pengirim adalah pembuat bot
    if (!text) return sycreply(`Gunakan perintah *${prefix + command}* on/off`);

    // Mengubah status berdasarkan input
    if (text.toLowerCase() === 'on') {
        if (autoAIStatus) {
            return sycreply('Auto AI sudah aktif sebelumnya!');
        }
        autoAIStatus = true;
        sycreply('Auto AI berhasil diaktifkan!');
    } else if (text.toLowerCase() === 'off') {
        if (!autoAIStatus) {
            return sycreply('Auto AI sudah nonaktif sebelumnya!');
        }
        autoAIStatus = false;
        sycreply('Auto AI berhasil dinonaktifkan!');
    } else {
        sycreply(`Gunakan perintah *${prefix + command}* on/off`);
    }
}
break;
case 'setpromt': {
        if (!text) return m.reply("Harap masukkan prompt baru!");
        userPrompt = text; // Simpan prompt baru dari input pengguna
        m.reply(`Prompt berhasil diatur menjadi: "${userPrompt}"`);
        break;
    }
    
case 'setpromt2': {
    // Cek apakah pengguna mengirim prompt baru
    if (!text) return sycreply(`Kirim perintah *${prefix + command}* <prompt baru>`);

    // Menyimpan prompt baru
    llamaPrompt = text;
    sycreply(`Prompt berhasil diperbarui!\nPrompt baru: ${llamaPrompt}`);
}
break;
			case 'tebaknegara': {
				if (iGame(tebaknegara, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaknegara.json'));
				let {
					key
				} = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🌍', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
			break
			case 'link2img': {
    if (!text) return sycreply('Masukkan link gambar yang valid!');
    if (!/^https?:\/\//.test(text)) return sycreply('Masukkan link gambar yang valid!');
    
    try {
        const filename = 'image-result.jpg';
        const { data } = await axios({
            url: text,
            method: 'GET',
            responseType: 'arraybuffer'
        });
        
        fs.writeFileSync(filename, data); // Simpan gambar
        await sych.sendMessage(m.chat, {
            image: fs.readFileSync(filename),
            caption: 'Berikut adalah gambar dari link yang Anda berikan.'
        }, { quoted: m });
        fs.unlinkSync(filename); // Hapus file setelah pengiriman
    } catch (err) {
        sycreply('Gagal mengunduh gambar. Pastikan link valid.');
        console.error(err);
    }
}
break;
			case 'tebakepep': {
				if (iGame(tebakepep, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!');
				try {
					// Mengambil data dari API
					const hasil = await fetchJson('https://api.siputzx.my.id/api/games/karakter-freefire');
					// Log untuk memeriksa response dari API
					console.log('Response dari API:', hasil);
					// Mengecek apakah statusnya true dan data lengkap
					if (!hasil || hasil.status !== true || !hasil.data || !hasil.data.gambar || !hasil.data.name) {
						return sycreply('Terjadi kesalahan saat mengambil data dari API! Response tidak valid atau tidak lengkap.');
					}
					// Menyusun deskripsi permainan
					const deskripsi = `🎮 Tebak Karakter Berikut :\n\nNama Karakter: AYO TEBAK📍\n\nWaktu: 60s\nHadiah *+3499*`;
					// Mengirim gambar dan deskripsi permainan
					let {
						key
					} = await sych.sendFileUrl(m.chat, hasil.data.gambar, deskripsi, m);
					sych.sendMessage(m.chat, {
						react: {
							text: '📛', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
					// Menyimpan jawaban dan ID sesi
					tebakepep[m.chat + key.id] = {
						jawaban: hasil.data.name.toLowerCase(),
						id: key.id
					};
					// Menunggu selama 60 detik
					await sleep(60000);
					// Mengecek apakah game sudah selesai
					if (rdGame(tebakepep, m.chat, key.id)) {
						sycreply('Waktu Habis\nJawaban: ' + tebakepep[m.chat + key.id].jawaban);
						delete tebakepep[m.chat + key.id];
					}
				} catch (error) {
					sycreply('Terjadi kesalahan saat mengambil data dari API!');
					console.error('Error saat mengambil data dari API:', error);
				}
			}
			break;
			case 'tebakgambar': {
				if (iGame(tebakgambar, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakgambar.json'));
				let {
					key
				} = await sych.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				sych.sendMessage(m.chat, {
					react: {
						text: '🖼️', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
			break
			case 'tebakbendera': {
				if (iGame(tebakbendera, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakbendera.json'));
				let {
					key
				} = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🌎', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
			break
			case 'kuismath':
			case 'math': {
				const {
					genMath,
					modes
				} = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard', 'extreme', 'impossible', 'impossible2'];
				if (iGame(kuismath, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return sycreply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return sycreply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let {
					key
				} = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🔢', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				kuismath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(kuismath, result.waktu)
				if (rdGame(m.chat + key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
					delete kuismath[m.chat + key.id]
				}
			}
			break
			case 'menu': {
    // Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
let profile;
				try {
					profile = await sych.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim;
				}
    const inimenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}
    
${f}*Name* : ${m.pushName ? m.pushName : 'Lu Siapa?'}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB

${f}╭━━━┳╮╱╱╭┳━━━┳╮╱╭┳╮╱╱╭╮
${f}┃╭━╮┃╰╮╭╯┃╭━╮┃┃╱┃┃╰╮╭╯┃
${f}┃╰━━╋╮╰╯╭┫┃╱╰┫╰━╯┣╮╰╯╭╯
${f}╰━━╮┃╰╮╭╯┃┃╱╭┫╭━╮┃╰╮╭╯
${f}┃╰━╯┃╱┃┃╱┃╰━╯┃┃╱┃┃╱┃┃
${f}╰━━━╯╱╰╯╱╰━━━┻╯╱╰╯╱╰╯

${n}ᯓ★ SIMPEL MENU ${botname} ★ᯓ${n}

${setv} ${prefix}ALLMENU
${setv} ${prefix}DOWNLOADMENU
${setv} ${prefix}OWNERMENU
${setv} ${prefix}GROUPMENU
${setv} ${prefix}FUNMENU
${setv} ${prefix}GAMEMENU
${setv} ${prefix}AIMENU
${setv} ${prefix}TOOLSMENU
`
if (typemenu === 's1') {
                    sych.sendMessage(m.chat, {
    image: fs.readFileSync('./sychMedia/menu/sychy.jpg'),
    caption: inimenu,
    contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net']
    }
}, {
    quoted: m
});
                } else if (typemenu === 's2') {
                    sych.sendMessage(m.chat, {
                        text: inimenu,
                        contextInfo: {
                        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: owname,
                                thumbnail: fs.readFileSync('./sychMedia/menu/sychy.jpg'),
                                sourceUrl: my.gc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') { //SARAN: JANGAN DIGUNAIN SOALNYA DELAY BANGET
                    sych.sendMessage(m.chat, {
    video: fs.readFileSync('./sychMedia/menu/sych.mp4'),
    caption: inimenu,
    contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net']
    }
}, {
    quoted: qchanel
});
                } else if (typemenu === 's4') {
    await sych.sendMessage(m.chat, {
        video: fs.readFileSync('sychMedia/menu/gif.mp4'),
        caption: inimenu,
        gifPlayback: true,
        contextInfo: {
            mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: `${global.botname}`,
                body: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
                previewType: "VIDEO",
                thumbnailUrl: getRandomThumb(),
                sourceUrl: my.gh
            }
        }
    }, { quoted: m });

    await sych.sendMessage(m.chat, {
        audio: fs.readFileSync('sychMedia/menu/audio.mp3'),
        mimetype: 'audio/mp4',
        ptt: false
    }, { quoted: qchanel });
                } else if (typemenu === 's5') {
                    await sych.sendMessage(m.chat, {
					document: fake.docs,
					fileName: ucapanWaktu,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: inimenu,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: `${botname}${randomEmoji}`
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,
						}
					}
				}, {
					quoted: m
				});
                } else if (typemenu === 's6') {
                    sych.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: inimenu,
                                contextInfo: {
                                mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {quoted: fkontak})
                } else if (typemenu === 's7') {
                    sych.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: inimenu,
                        mimetype: 'application/zip',
                        fileName: owname,
                        fileLength: "99999999999",
                        contextInfo: {
                        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: owname,
                                thumbnail: fs.readFileSync('./sychMedia/menu/sychy.jpg'),
                                sourceUrl: my.gc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m 
                    })
                } else if (typemenu === 's8') {
                	sych.sendMessage(m.chat, {
      video: fs.readFileSync('./sychMedia/menu/sych.mp4'),
      gifPlayback: true,
      caption: inimenu,
      contextInfo: {
      mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
      externalAdReply: {
      title: botname,
      body: owname,
      thumbnailUrl: "https://i.ibb.co.com/zRtB6RG/37e35bef9ed65ac1b6bfee6dd26c880b.jpg",
      sourceUrl: my.gh,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
      } else if (typemenu === 's9') {
                	sych.sendMessage(m.chat, {
video: fs.readFileSync('./sychMedia/menu/sych.mp4'),
caption: inimenu,
gifPlayback: true,
contextInfo: {
mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: owname,
newsletterJid: "120363383347233294@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: owname,
body: botname,
thumbnailUrl: "https://i.ibb.co.com/zRtB6RG/37e35bef9ed65ac1b6bfee6dd26c880b.jpg",
sourceUrl: my.gh,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
}
break
    case 'gamemenu':
    case 'gemmenu': {
    const gmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}GAME MENU ᯤ${n}

${setv} ${prefix}tictactoe
${setv} ${prefix}akinator
${setv} ${prefix}suit
${setv} ${prefix}slot
${setv} ${prefix}math (level)
${setv} ${prefix}begal
${setv} ${prefix}casino (nominal)
${setv} ${prefix}rampok (@tag)
${setv} ${prefix}tekateki
${setv} ${prefix}tebaklirik
${setv} ${prefix}tebakkata
${setv} ${prefix}tebakbom
${setv} ${prefix}susunkata
${setv} ${prefix}tebakkimia
${setv} ${prefix}caklontong
${setv} ${prefix}tebaknegara
${setv} ${prefix}tebakgambar
${setv} ${prefix}tebakepep
${setv} ${prefix}tebakbendera
`    
await sych.sendMessage(m.chat, {
        text: gmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Game Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
break
case 'funmenu': 
case 'fmenu': {
const fmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}FUN MENU ᯤ${n}

${setv} ${prefix}dadu
${setv} ${prefix}reminder
${setv} ${prefix}cermin (q)
${setv} ${prefix}bisakah (text)
${setv} ${prefix}apakah (text)
${setv} ${prefix}kapan (text)
${setv} ${prefix}kerangajaib (text)
${setv} ${prefix}cekmati (nama lu)
${setv} ${prefix}ceksifat
${setv} ${prefix}cekkhodam (nama lu)
${setv} ${prefix}rate (reply pesan)
${setv} ${prefix}jodohku
${setv} ${prefix}jadian
${setv} ${prefix}fitnah
${setv} ${prefix}halah (text)
${setv} ${prefix}hilih (text)
${setv} ${prefix}huluh (text)
${setv} ${prefix}heleh (text)
${setv} ${prefix}holoh (text)
`
await sych.sendMessage(m.chat, {
        text: fmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Fun Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
break
    case 'toolsmenu':
    case 'toolmenu': {
    const tlmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}TOOLS MENU ᯤ${n}

${setv} ${prefix}get (url)
${setv} ${prefix}link2img (url)
${setv} ${prefix}encode (q)
${setv} ${prefix}setcmd (reply stc)
${setv} ${prefix}listcmd
${setv} ${prefix}delcmd (reply stc)
${setv} ${prefix}cekcuaca (kota)
${setv} ${prefix}decode (q encode)
${setv} ${prefix}hd (reply pesan)
${setv} ${prefix}brat (txt)
${setv} ${prefix}toaudio (reply pesan)
${setv} ${prefix}tomp3 (reply pesan)
${setv} ${prefix}tovn (reply pesan)
${setv} ${prefix}toimage (reply pesan)
${setv} ${prefix}toptv (reply pesan)
${setv} ${prefix}tourl (reply pesan)
${setv} ${prefix}getq (reply pesan)
${setv} ${prefix}tts (textnya)
${setv} ${prefix}toqr (textnya)
${setv} ${prefix}ssweb (url)
${setv} ${prefix}sticker (send/reply img)
${setv} ${prefix}colong (reply stiker)
${setv} ${prefix}smeme (send/reply img)
${setv} ${prefix}emojimix 🙃+💀
${setv} ${prefix}nulis
${setv} ${prefix}joko (teksnya)
${setv} ${prefix}readmore text1|text2
${setv} ${prefix}qc (pesannya)
${setv} ${prefix}translate
${setv} ${prefix}wasted (send/reply img)
${setv} ${prefix}triggered (send/reply img)
${setv} ${prefix}shorturl (urlnya)
${setv} ${prefix}gitclone (urlnya)
${setv} ${prefix}fat (reply audio)
${setv} ${prefix}fast (reply audio)
${setv} ${prefix}bass (reply audio)
${setv} ${prefix}slow (reply audio)
${setv} ${prefix}tupai (reply audio)
${setv} ${prefix}deep (reply audio)
${setv} ${prefix}robot (reply audio)
${setv} ${prefix}blown (reply audio)
${setv} ${prefix}reverse (reply audio)
${setv} ${prefix}smooth (reply audio)
${setv} ${prefix}earrape (reply audio)
${setv} ${prefix}nightcore (reply audio)
${setv} ${prefix}getexif (reply sticker)
${setv} ${prefix}sticktele

${f}©${botname}
`    
await sych.sendMessage(m.chat, {
        text: tlmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Tools Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
break
case 'downloadmenu':
case 'downmenu': {
const downmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}DOWNLOAD MENU ᯤ${n}

${setv} ${prefix}spotifydl (url)
${setv} ${prefix}ytmp3 (url)
${setv} ${prefix}ttslide (url)
${setv} ${prefix}play3 (query)
${setv} ${prefix}song (query)
${setv} ${prefix}instagram (url)
${setv} ${prefix}tiktok (url)
${setv} ${prefix}facebook (url)
${setv} ${prefix}mediafire (url)
${setv} ${prefix}videymp4 (url)

${f}©${botname}
`
await sych.sendMessage(m.chat, {
        text: downmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Download Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}    
    break
    case 'aimenu': {
    const aimenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}AI MENU ᯤ${n}
    
${setv} ${prefix}ai (query)
${setv} ${prefix}gemini (query)
${setv} ${prefix}luminai (query)
${setv} ${prefix}meta (query)
${setv} ${prefix}llama (query)
${setv} ${prefix}setpromt2 (query)
${setv} ${prefix}setpromt (query)
${setv} ${prefix}simi (query)
${setv} ${prefix}aitukam
${setv} ${prefix}esia
${setv} ${prefix}autoai2 (own)
${setv} ${prefix}autoai (own)
${setv} ${prefix}txt2img (query)
${setv} ${prefix}img2text (reply img/stc)
${setv} ${prefix}aimg (query)
`
await sych.sendMessage(m.chat, {
        text: aimenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > AI Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
    break    
    case 'ownermenu':
    case 'ownmenu': {
    const ownmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}OWNER MENU ᯤ${n}

${setv} ${prefix}bot [set]
${setv} ${prefix}addthumb <nme|lnk>
${setv} ${prefix}delthumb <nme>
${setv} ${prefix}listthumb
${setv} ${prefix}setexif
${setv} ${prefix}setbio
${setv} ${prefix}setppbot
${setv} ${prefix}setmenu s<1-9>
${setv} ${prefix}join
${setv} ${prefix}typodetect on/off
${setv} ${prefix}leave
${setv} ${prefix}block
${setv} ${prefix}listblock
${setv} ${prefix}openblock
${setv} ${prefix}listpc
${setv} ${prefix}addcase
${setv} ${prefix}getcase
${setv} ${prefix}delcase
${setv} ${prefix}listgc
${setv} ${prefix}liatowner
${setv} ${prefix}addowner
${setv} ${prefix}delowner
${setv} ${prefix}checklocation
${setv} ${prefix}creategc
${setv} ${prefix}addprem
${setv} ${prefix}delprem
${setv} ${prefix}listprem
${setv} ${prefix}addlimit
${setv} ${prefix}adduang
${setv} ${prefix}bot --settings
${setv} ${prefix}bot settings
${setv} ${prefix}getsession
${setv} ${prefix}delsession
${setv} ${prefix}delsampah
${setv} ${prefix}upsw
${setv} ${prefix}shutdown
${setv} ${prefix}restart
${setv} $
${setv} >
${setv} <

${f}©${botname}
`
await sych.sendMessage(m.chat, {
        text: ownmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Owner Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
    break    
    case 'groupmenu': 
    case 'grupmenu': {
    const gcmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}GROUP MENU ᯤ${n}

${setv} ${prefix}add (62xxx)
${setv} ${prefix}kick (@tag/62xxx)
${setv} ${prefix}promote (@tag/62xxx)
${setv} ${prefix}demote (@tag/62xxx)
${setv} ${prefix}setname (nama baru gc)
${setv} ${prefix}setdesc (desk)
${setv} ${prefix}setppgc (reply imgnya)
${setv} ${prefix}delete (reply pesan)
${setv} ${prefix}linkgrup
${setv} ${prefix}analyzechats
${setv} ${prefix}revoke
${setv} ${prefix}startsecret (@tag)
${setv} ${prefix}secretmsg (q)
${setv} ${prefix}endsecret
${setv} ${prefix}tagall
${setv} ${prefix}hidetag
${setv} ${prefix}totag (reply pesan)
${setv} ${prefix}listonline
${setv} ${prefix}grup set

${f}©${botname}
`
await sych.sendMessage(m.chat, {
        text: gcmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Group Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
    break
    
    
			// Menu
			case 'allmenu': {

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				sycreply('Menampilkan All Menu...')
				let profile;
				try {
					profile = await sych.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim;
				}
				const menunya = `
■ 「 *${n}USER INFO${n}* 」
${f}*Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
${f}*Id* : @${m.sender.split('@')[0]}
${f}*User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
${f}*Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
${f}*Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}

■ 「 *${n}BOT INFO${n}* 」
${f}*Nama Bot* : ${botname}
${f}*Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}

■ 「 *${n}ABOUT${n}* 」
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭──❍「 *${n}BOT${n}* 」❍
│${setv} ${prefix}profile
│${setv} ${prefix}claim
│${setv} ${prefix}buy [item] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}leaderboard
│${setv} ${prefix}request (text)
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}ping
│${setv} ${prefix}afk
│${setv} ${prefix}rvo (reply pesan viewone)
│${setv} ${prefix}inspect (url gc)
│${setv} ${prefix}addmsg
│${setv} ${prefix}delmsg
│${setv} ${prefix}getmsg
│${setv} ${prefix}listmsg
│${setv} ${prefix}q (reply pesan)
│${setv} ${prefix}menfes (62xxx|fake name)
│${setv} ${prefix}donasi
╰─┬────❍
╭─┴❍「 *${n}GROUP${n}* 」❍
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}analyzechats
│${setv} ${prefix}revoke
│${setv} ${prefix}startsecret (@tag)
│${setv} ${prefix}secretmsg (q)
│${setv} ${prefix}endsecret
│${setv} ${prefix}tagall
│${setv} ${prefix}hidetag
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}grup set
╰─┬────❍
╭─┴❍「 *${n}SEARCH${n}* 」❍
│${setv} ${prefix}spotify (query)
│${setv} ${prefix}ttstalk (query)
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}ytsearch2 (q) | (q)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}liriks (lirik/judul)
│${setv} ${prefix}google (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}play3 (query)
│${setv} ${prefix}song (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}cuaca (kota)
│${setv} ${prefix}dukun (nama)
╰─┬────❍
╭─┴❍「 *${n}DOWNLOAD${n}* 」❍
│${setv} ${prefix}spotifydl (url)
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ttslide (url)
│${setv} ${prefix}play3 (q)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}mediafire (url)
│${setv} ${prefix}videymp4 (url)
╰─┬────❍
╭─┴❍「 *${n}QUOTES${n}* 」❍
│${setv} ${prefix}motivasi
│${setv} ${prefix}quotes
│${setv} ${prefix}dare
│${setv} ${prefix}truth
│${setv} ${prefix}renungan
╰─┬────❍
╭─┴❍「 *${n}ISLAMMIC${n}* 」❍
│${setv} ${prefix}quran <1-144>
│${setv} ${prefix}listsurah
│${setv} ${prefix}listdoa
│${setv} ${prefix}doa <1-37>
│${setv} ${prefix}bacaansholat
╰─┬────❍
╭─┴❍「 *${n}TOOLS${n}* 」❍
│${setv} ${prefix}get (url)
│${setv} ${prefix}link2img (url)
│${setv} ${prefix}encode (q)
│${setv} ${prefix}setcmd (reply stc)
│${setv} ${prefix}listcmd
│${setv} ${prefix}delcmd (reply stc)
│${setv} ${prefix}cekcuaca (kota)
│${setv} ${prefix}decode (q encode)
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}brat (txt)
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}toimage (reply pesan)
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}getq (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya)
│${setv} ${prefix}ssweb (url)
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img)
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}nulis
│${setv} ${prefix}joko (teksnya)
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}translate
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}gitclone (urlnya)
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
│${setv} ${prefix}getexif (reply sticker)
│${setv} ${prefix}sticktele
╰─┬────❍
╭─┴❍「 *${n}AI${n}* 」❍
│${setv} ${prefix}ai (query)
│${setv} ${prefix}gemini (query)
│${setv} ${prefix}luminai (query)
│${setv} ${prefix}meta (query)
│${setv} ${prefix}llama (query)
│${setv} ${prefix}setpromt2 (query)
│${setv} ${prefix}setpromt (query)
│${setv} ${prefix}simi (query)
│${setv} ${prefix}aitukam
│${setv} ${prefix}esia
│${setv} ${prefix}autoai2 (own)
│${setv} ${prefix}autoai (own)
│${setv} ${prefix}txt2img (query)
│${setv} ${prefix}img2text (reply img/stc)
│${setv} ${prefix}aimg (query)
╰─┬────❍
╭─┴❍「 *${n}CEWE${n}* 」❍
│${setv} ${prefix}cjpn 
│${setv} ${prefix}ckorea
│${setv} ${prefix}cthai
│${setv} ${prefix}cindo
│${setv} ${prefix}cviet
│${setv} ${prefix}cchina
╰─┬────❍
╭─┴❍「 *${n}ANIME${n}* 」❍
│${setv} ${prefix}waifu
│${setv} ${prefix}neko
│${setv} ${prefix}bluearchive
╰─┬────❍
╭─┴❍「 *${n}GAME${n}* 」❍
│${setv} ${prefix}tictactoe
│${setv} ${prefix}akinator
│${setv} ${prefix}suit
│${setv} ${prefix}slot
│${setv} ${prefix}math (level)
│${setv} ${prefix}begal
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}susunkata
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakepep
│${setv} ${prefix}tebakbendera
╰─┬────❍
╭─┴❍「 *${n}FUN${n}* 」❍
│${setv} ${prefix}dadu
│${setv} ${prefix}reminder
│${setv} ${prefix}cermin (q)
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama lu)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}cekkhodam (nama lu)
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
╰─┬────❍
╭─┴❍「 *${n}RANDOM${n}* 」❍
│${setv} ${prefix}coffe
│${setv} ${prefix}kucing
╰─┬────❍
╭─┴❍「 *${n}OWNER${n}* 」❍
│${setv} ${prefix}bot [set]
│${setv} ${prefix}addthumb <nme|lnk>
│${setv} ${prefix}delthumb <nme>
│${setv} ${prefix}listthumb
│${setv} ${prefix}setexif
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}typodetect on/off
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}setmenu s<1-9>
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}addcase
│${setv} ${prefix}getcase
│${setv} ${prefix}delcase
│${setv} ${prefix}listgc
│${setv} ${prefix}checklocation
│${setv} ${prefix}creategc
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}adduang
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} ${prefix}upsw
│${setv} ${prefix}shutdown
│${setv} ${prefix}restart
│${setv} $
│${setv} >
│${setv} <
╰──────❍`;
				await sych.sendMessage(m.chat, {
					document: fake.docs,
					fileName: ucapanWaktu,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: menunya,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: `${botname}${randomEmoji}`
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,
						}
					}
				}, {
					quoted: m
				});
				// Mengirim stiker
				await sych.sendMessage(m.chat, {
					sticker: {
						url: 'src/media/stc.webp'
					}, // Path file stiker
					mimetype: 'image/webp',
				}, {
					quoted: floc
				});
				sych.sendMessage(m.chat, {
					react: {
						text: randomEmoji, // Emoji acak
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
			}
			break;
			default: {
    if (autoAIStatus) {
        try {
            const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/llama?prompt=${encodeURIComponent(llamaPrompt)}&message=${encodeURIComponent(text)}`);
            if (hasil.status === true && hasil.data) {
                m.reply(hasil.data);
            } else {
                m.reply('Terjadi kesalahan saat mengambil data dari API!');
            }
        } catch (error) {
            m.reply('Terjadi kesalahan saat mengambil data dari API!');
            console.error('Error saat mengambil data dari API:', error);
        }
    }
				if (budy.startsWith('>')) {
					if (!isCreator) return
					try {
						let evaled = await eval(budy.slice(2))
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						await sycreply(evaled)
					} catch (err) {
						await sycreply(String(err))
					}
				}
				if (budy.startsWith('<')) {
					if (!isCreator) return
					try {
						let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						await sycreply(evaled)
					} catch (err) {
						await sycreply(String(err))
					}
				}
				if (budy.startsWith('$')) {
					if (!isCreator) return
					if (!text) return
					exec(budy.slice(2), (err, stdout) => {
						if (err) return sycreply(`${err}`)
						if (stdout) return sycreply(stdout)
					})
				}
			}
			if (autoAi && text) { // Cek apakah autoAi aktif dan ada input teks
            try {
                let prompt = `${userPrompt}: ${text}`; // Gunakan prompt yang sudah disetel
                let hasil = await yanzGpt(prompt);
                m.reply(hasil.choices[0].message.content);
            } catch (e) {
                try {
                    let prompt = `${userPrompt}: ${text}`;
                    let hasil = await bk9Ai(prompt);
                    m.reply(hasil.BK9);
                } catch (e) {
                    m.reply(pickRandom([
                        'Fitur Ai sedang bermasalah!',
                        'Tidak dapat terhubung ke ai!',
                        'Sistem Ai sedang sibuk sekarang!',
                        'Fitur sedang tidak dapat digunakan!'
                    ]));
                }
            }
        }
        break;
    }
	} catch (err) {
		console.log(util.format(err));
		//sycreply('*❗ Internal server error️*');
		sych.sendFromOwner(owner, 'Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\n*Log error:*\n\n' + util.format(err), m, {
			contextInfo: {
				isForwarded: true
			}
		})
	}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})