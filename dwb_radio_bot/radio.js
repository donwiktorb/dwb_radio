//requirements
const Discord = require('discord.js');

  
//from requirements
const client = new Discord.Client();



client.on('ready', () => {
	console.log('ready');
});

client.on('message', async message => {	
	if (message.channel.id == '707320148994031654')
	{
	  var radio3 = message.content.slice(6,7);
	  var radio2 = message.content.slice(7,8);
	  if (radio2.trim())
			radio = message.content.slice(6,8)
	  else
			radio = radio3

		var id = message.content.slice(-18);
		var ch = client.channels.cache.find(r => r.name === radio);
		
		
	  for (let [key, value] of message.guild.channels.cache)
	  {
		if (value.type == 'voice')
		{
			var member = value.members.get(id)

			if (member)
			{
				await member.voice.setChannel(ch)
			}
		}
	  }
	}
});

client.login('Njg5NTEyOTE3NTE4OTA5NDUy.XnD89g.XxIRTra_cL7_vKxEFg1-6I0KUWU');
