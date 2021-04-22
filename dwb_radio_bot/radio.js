//requirements
const Discord = require('discord.js');
const config = require('./config.json');

//from requirements
const client = new Discord.Client();

client.on('ready', () => {
	console.log('ready');
});

client.on('message', async message => {	
	if (message.channel.id == config.channel)
	{
		let args = message.content.split(/ +/g);
		let radio = args[1].toString();
		let id = args[args.length-1].split(':')[1];
		if (id == undefined) return;
		for (let [key, value] of message.guild.channels.cache)
		{
			if (value.type == 'voice')
			{
				let member = value.members.get(id)
				if (member)
				{
					let ch = client.channels.cache.find(r => r.name === radio);
					await member.voice.setChannel(ch)
				}
			}
		}
	}
});

client.login('CHANGE TOKEN HERE');
