const Discord = require('discord.js')

module.exports = {
	name: 'snipe',
  aliases: ['deleted', 'deletelogs'],
	description: "See the last deleted message.",
	args: false,
  moderatoronly: false,
  guildonly: true,
  dmonly: false,
  owneronly: false,
	execute(message, args, prefix) {
		var snipe = message.client.db.get(`snipes.${message.guild.id}`)

    if (!snipe) return message.channel.send("Oops! There's nothing to snipe here!")
    else {
      const embed = new Discord.MessageEmbed(message.client.Embeds.TemplateEmbed)
        .setTitle("Snipe")
        .setDescription(`
        ${snipe.message.content} 
        `)
    }
	},
};