const Discord = require('discord.js')
const fs = require('fs')
const fetch = require('node-fetch')
const default_prefix = "an!"

const TemplateEmbed = new Discord.MessageEmbed().setColor("RANDOM")
const ErrorEmbed = new Discord.MessageEmbed().setColor("RED").setTitle("❌ Oops!")
const HelpEmbed = new Discord.MessageEmbed().setFooter("<> means required, [] means optional.").setColor("RANDOM")

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.db = require('quick.db')
client.isMod = (id) => client.db.get('moderators').includes(id) || client.db.get('owners').includes(id)
client.Embeds = {
  ErrorEmbed: ErrorEmbed,
  TemplateEmbed: TemplateEmbed,
  HelpEmbed: HelpEmbed
}

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

var load = async () => await console.log(`Loading ${commandFiles.length} commands!`)

load()

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ModMail DM Sent', async message => {
  
})

client.on('ModMail Channel Recieve', message => {

})

client.on('ModMail DM Recieve', message => {

})

client.on('ModMail Channel Sent', message => {

})

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`)
  require('./website.js')(client)
  client.user.setActivity(`with ${client.guilds.cache.map(x => x).length} servers | BETA Version`, {type: 'PLAYING'})
  client.user.setUsername("Ashen Naturial")
})

client.on('guildCreate', async (guild) => {
  const channel = await client.channels.fetch('751480032978927627')

  const embed = new Discord.MessageEmbed(client.Embeds.TemplateEmbed)
    .setTitle("New Server")
    .setDescription(`I just joined a new server: **${guild.name}**! It has **${guild.memberCount}** members (including bots), and is owned by: **${guild.owner.user.tag}**.`)
    .setFooter(`Joined at ${new Date().toGMTString()}.`)

  channel.send(embed)
})

client.db.set(`blacklist`, {})

client.on('message', async message => {
  var prefix;
  
  if (message.guild) prefix = client.db.get(`prefixes.${message.guild.id}`) || default_prefix
  else prefix = default_prefix

  if (message.content.startsWith("an!resetprefix")) return client.commands.get('resetprefix').execute(message, args, prefix)

	if (message.author.bot || !message.content.startsWith(prefix)) return

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.channel.send(new Discord.MessageEmbed(ErrorEmbed).setDescription(`That command can't be executed within DMs ${message.author}!`))
	}
  if (command.dmOnly && !message.channel.type === 'dm') {
		return message.channel.send(new Discord.MessageEmbed(ErrorEmbed).setDescription(`That command can't be executed in a server ${message.author}!`))
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(new Discord.MessageEmbed(ErrorEmbed).setDescription(reply));
	}

  if (command.moderatoronly && !client.isMod(message.author.id)) {
    return message.channel.send(new Discord.MessageEmbed(ErrorEmbed).setDescription("Only bot moderators can use this command!"))
  }

  if (command.owneronly && !client.db.get('owners').includes(message.author.id)) {
    return message.channel.send(new Discord.MessageEmbed(ErrorEmbed).setDescription("Only bot owners can use this command!"))
  }

	try {
    command.execute(message, args, prefix)

	} catch (error) {
		console.error(error);
		message.reply('could not execute that command: ' + error.message);
	}
});

client.login(process.env.TOKEN)

client.db.set(`owners`, [
  "349936436373618689",
  "325663449680052227"
])