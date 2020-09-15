const Discord = require('discord.js')

module.exports = {
	name: 'invite',
  aliases: ['support', 'server'],
	description: "See the bot's invite and support server.",
	args: false,
  moderatoronly: false,
  guildonly: false,
  dmonly: false,
  owneronly: false,
	execute(message, args, prefix) {
		message.channel.send(new Discord.MessageEmbed(message.client.Embeds.TemplateEmbed).setTitle("Invite").setDescription(`
    Here is my invite link: [Click here!](https://discord.com/api/oauth2/authorize?client_id=750769270362996909&permissions=8&scope=bot)
    Here is the server's link: [Click here!](https://discord.gg/8tYWfZH)
    `))
	},
};