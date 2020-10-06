function SendToDiscord(ev, player, channel, dcid, isd)
	PerformHttpRequest(Config.webhookRadio, function(Error, Content, Head) end, 'POST', json.encode({username = SystemName, content = 'Radio '..channel..' player '.. player .. ' dc: '..dcid}), { ['Content-Type'] = 'application/json' })
end

function GetDc(source)
	discord = false
	for k,v in pairs(GetPlayerIdentifiers(source))do
		if string.sub(v, 1, string.len("discord:")) == "discord:" then
			discord = v
			break
		end
	end
	return discord
end

RegisterCommand("radio", function(source, args, rawCommand)
	if args[1] ~= nil and tonumber(args[1]) then
		local pname = GetPlayerName(source)
		local discord = GetDc(source)
		local identifier = GetPlayerIdentifier(source, 0)
		if discord == nil or discord == false then
			TriggerClientEvent('chat:addMessage', source, {
				args = {"^1 donwiktorb_radio ", Config.DCERRORMSG}
			})
		else
			if tonumber(args[1]) <= Config.maxChannels  then
				SendToDiscord(false, pname, args[1], discord, false)
				TriggerClientEvent("dwb_radio:SetClientChannel", source, tonumber(args[1]))
			else
				TriggerClientEvent('chat:addMessage', source, {
					args = {"^1 donwiktorb_radio ", Config.maxChannelsMSG}
				})
			end
		end
	else
		TriggerClientEvent('chat:addMessage', source, {
			args = {"^1 donwiktorb_radio ", Config.noChannelGiven}
		})
	end
end, false)