//requirements
const Discord = require('discord.js');

  
//from requirements
const client = new Discord.Client();



client.on('ready', () => {
	console.log('ready');
});

client.on('message', async message => {	
	if (message.channel.id == 'CHANGE ME ALSO')
	{
	  var radio3 = message.content.slice(6,7);
	  var radio2 = message.content.slice(7,8);
	  if (radio2.trim())
			radio = message.content.slice(6,8)
	  else
			radio = radio3

		var id = message.content.slice(-18);
		
		
	  for (let [key, value] of message.guild.channels.cache)
	  {
		if (value.type == 'voice')
		{
			member = value.members.get(id)

			if (member)
			{
				var ch = client.channels.cache.find(r => r.name === radio);
				await member.voice.setChannel(ch)
			}
		}
	  }
	}
});

client.login('CHANGE TOKEN HERE');
