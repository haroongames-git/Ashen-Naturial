const Discord = require('discord.js')



module.exports = {
	name: 'help',
  aliases: ["commands", "cmds"],
	description: 'Show a list of commands!',
	execute(message, args, prefix) {
		if (args.length) {
      var category = args[0].toLowerCase()

      if (["info", "fun", "mod", "admin", "botstaff"].includes(category)) {
        if (category == "info") {
          message.channel.send(new Discord.MessageEmbed(message.client.Embeds.HelpEmbed).setTitle("📰 Info Commands").setDescription(`
          **${prefix}help [category]** - This help page!
          **${prefix}ping** - Pong! See the latency!
          **${prefix}invite** - See an invite to invite the bot and to the support server!
          `))

        } else if (category == "fun") {
          message.channel.send(new Discord.MessageEmbed(message.client.Embeds.HelpEmbed).setTitle("📰 Fun Commands").setDescription(`
          **${prefix}base64 <encode or decode> <data>** - Encode or decode Base64.
          **${prefix}snipe** - See the last deleted message in the server!
          `))
        } else if (category == "mod") {
          message.channel.send(new Discord.MessageEmbed(message.client.Embeds.HelpEmbed).setTitle("🚔 Moderator Commands").setDescription(`
          **${prefix}ban <mention or id> [reason]** - Ban a user from the server.
          **${prefix}kick <mention or id> [reason]** - Kick a user from the server.
          **${prefix}mute <mention or id> [time in seconds, I'm sorry] [reason]** - Mute a user. If you want to do a perm mute with just a reason, set the timer as 0.
          **${prefix}unban <id>** - Unban a user.
          **${prefix}unmute <mention or id>** - Unmute a user.
          **${prefix}modlogs [mention or id; default is you] [kick, warn or ban; default is all]** - View your or someone else's modlogs.
          `))
        } else if (category == "admin") {
          message.channel.send(new Discord.MessageEmbed(message.client.Embeds.HelpEmbed).setTitle("🛠️ Admin Commands").setDescription(`
          **All commands here require the __ADMINISTRATOR__ permission.**

          **${prefix}setprefix <prefix>** - Set the bot's prefix.
          **an!resetprefix** - Reset the bot's prefix. No matter what you set the prefix to, this command will start with \`an!\`.
          `))
        } else if (category == "botstaff") {
          if (!message.client.isMod(message.author.id)) {
            return message.channel.send(new Discord.MessageEmbed(message.client.Embeds.ErrorEmbed).setDescription("Oops! You aren't an Ashen Natural staff member!"))
          }
          message.channel.send(new Discord.MessageEmbed(message.client.Embeds.HelpEmbed).setTitle("👮‍ Bot Staff Commands").setDescription(`
          **More Coming Out Soon Since HaroonGames Can't Make A Blacklist System**

          **${prefix}reload <command name>** - Reloads a command. Only Holly and HaroonGames can use this.
          **${prefix}moderator <add or remove> <id>** - Add or remove a moderator. Again, only HaroonGames or Holly can use this command.
          `))
        }
      }
    } else {
      var reply = `
      📰 **Information Commands**: \`${prefix}help info\`

      🎉 **Fun Commands**: \`${prefix}help fun\`

      🚔 **Moderation Commands**: \`${prefix}help mod\`

      🛠️ **Admin Commands**: \`${prefix}help admin\`
      `

      if (message.client.isMod(message.author.id)) {
        reply += `
        👮 **Bot Staff Commands**: \`${prefix}help botstaff\`
        `
      }
      message.channel.send(new Discord.MessageEmbed(message.client.Embeds.TemplateEmbed).setTitle("Help for Ashen Naturial").setDescription(reply))
    }
	},
};