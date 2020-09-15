// Date.now() - message.createdTimestamp + " ms"
module.exports = {
	name: 'ping',
  aliases: ['latency'],
	description: "Pong! Show the bot's latency.",
	execute(message, args, prefix) {
		message.channel.send("Ping?")
      .then(msg => {
        let ping = Date.now() - message.createdTimestamp + " ms"

        if (args[0] == "fake") ping = `${msg.client.ws.ping} ms`
        msg.edit(`Pong! Latency is \`${ping}\`.`)
      })
	},
};