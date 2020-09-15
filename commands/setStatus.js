const Discord = require('discord.js')

module.exports = {
	name: 'editstatus',
  aliases: ['status', 'presence'],
	description: "Command Description",
	args: true,
  moderatoronly: false,
  guildonly: false,
  dmonly: false,
  usage: "<PLAYING, WATCHING, LISTENING, STREAMING or RESET> <presence>",
  owneronly: true,
	execute(message, args, prefix) {
		const client = message.client;
    var typeofpresence = args.shift().toUpperCase()

    if (!["PLAYING", "WATCHING", "STREAMING", "LISTENING", "RESET"].includes(typeofpresence)) return message.channel.send(`That isn't a valid presence. Do ${prefix}setStatus (without any arguments to see what you need to send as arguments.)`)


    if (!args[0] && !typeofpresence == "RESET") return message.channel.send(`Please give a valid status.`)

    if (typeofpresence == "RESET") {
      args = ['with', `${client.guilds.cache.map(x => x).length}`, 'servers']
      typeofpresence = "PLAYING"
    }

    client.user.setActivity(args.join(' '), {
      type: typeofpresence
    })
	},
};