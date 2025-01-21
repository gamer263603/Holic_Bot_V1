const fs = require('fs');
const chalk = require('chalk');
/*
 * Create By Sych
 * Follow https://github.com/sychdev
 * Whatsapp : https://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e
 */
//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\
//settings owner di ./setown.js
global.packname = 'HolicBot'
global.owner = ["918968130865"]
global.botnum = ["918968130865"]
global.author = 'GAMER ICE KING'
global.owname = 'GAMER ICE KING'
global.botname = 'Holic Bot'
global.themeemoji = '❄️'
global.f = '> '
global.n = '`'
global.videoMenu = fs.readFileSync('./sychMedia/menu/sych.mp4');
global.listv = ['❄️', '❄️', '☃️', '❄️', '🧊', '🥶', '🧊', '🧊', '🥶', '🥶', '🥶', '🥶', '🥶', '🧊', '🧊', '🥶', '❄️', '❄️', '❄️', '❄️', '☃️', '☃️', '☃️', '☃️']
global.emot = ['🌱', '🌻', '🌞', '❄️', '🌿', '💫', '⭐', '🍃', '🔥', '⚡', '🫧', '🌵', '🪺', '🪨', '🪵', '🌪️', '🍄']
global.tempatDB = 'database.json'
global.pairing_code = true
global.fake = {
    tmenu: 'https://i.ibb.co.com/7bVhfhb/3ed349054e5c77cfbebf58293d1e0df0.jpg',
	texz: `${botname}`,
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://i.ibb.co.com/3rqCPX6/fk.jpg',
	thumbnail: fs.readFileSync('./src/media/sych.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'],
}
global.my = {
	yt: 'https://www.youtube.com/@GAMERICEKING',
	gh: 'https://github.com/gamer263603',
	gc: 'https://chat.whatsapp.com/E03XEqdTYFzFXBaQCa1tBK',
	ch: '120363383347233294@newsletter',
}
global.limit = {
	free: 999,
	premium: 999,
	vip: 'VIP'
}
global.uang = {
	free: 100000,
	premium: 1000000,
	vip: 10000000
}
global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'lu bkn owner',
	admin: 'lu bkn atmin',
	botAdmin: 'gw bkn atmin bro',
	group: 'cma buat grup aj',
	private: 'cm di prvt cht',
	prem: 'lu bkn user premium',
	wait: 'bentar duluu',
	error: 'eror bro!',
	done: 'udh lunas yh'
}
global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
