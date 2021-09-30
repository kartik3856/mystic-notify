fx_version 'cerulean'
game 'gta5'

author 'Mystic'
description 'mystic-notify'

ui_page 'html/index.html'

files {
	'html/index.html',
	'html/style.css',
	'html/app.js'
}

client_script 'client/main.lua'

exports {
	'SendAlert'
}