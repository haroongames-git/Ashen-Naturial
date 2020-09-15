const Discord = require('discord.js')

module.exports = {
	name: 'base64',
	description: "Encode or decode Base64.",
	args: true,
  moderatoronly: false,
  guildonly: false,
  dmonly: false,
  usage: "<encode or decode> <data>",
  owneronly: false,
	execute(message, args, prefix) {
		var encodeordecode = args.shift().toLowerCase()
    if (!args.length) return message.channel.send("Give data to encode or decode.")
    if (["encode", "decode"].includes(encodeordecode)) {
      if (encodeordecode == "encode") {
        message.channel.send(`Encoding ${args.join(' ')}...`)
          .then(msg => {
            setTimeout(() => msg.edit(`Encoded \`${args.join(' ')}\`. The result is: **${new Buffer(args.join(' ')).toString('base64')}**`), 500)
          })
      } else {
        message.channel.send(`Decoding ${args.join(' ')}...`)
          .then(msg => {
            setTimeout(() => msg.edit(`Encoded \`${args.join(' ')}\`. The result is: **${new Buffer(args.join(' '), 'base64').toString('ascii')}**`), 500)
          })
      }
    }
	},
};