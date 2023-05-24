/* 

* This file contains all the 'events' table related functions

*/

import { supabase } from '../supabaseClient';
import { checkServerExists, getServerId } from './servers';

interface getEvents {
	discordServerId: string;
}

interface addEvent {
	eventId?: number;
	eventName: string;
	gameName: string;
	eventHost: string;
	description: string;
	dateTime: string;
	isTeamEvent: boolean;
	discordServerId: string;
	timezone: string;
	serverName?: string;
	maxNumTeams?: number;
	maxNumTeamPlayers?: number;
	maxNumPlayers?: number;
}

export const getEvents = (props: getEvents) => {};

export const addEvent = async (props: addEvent) => {
	const {
		eventName,
		gameName,
		eventHost,
		description,
		dateTime,
		isTeamEvent,
		discordServerId,
		timezone,
		maxNumTeams,
		maxNumTeamPlayers,
		maxNumPlayers,
	} = props;

	console.log(props);

	const { data, error } = await supabase
		.from('DiscordServers')
		// .insert([{ serverId: discordServerId, name: name }])
		.select();

	console.log({ data, error });

	return { data, error };

	// const isServerExist: boolean = await checkServerExists({
	// 	discordServerId: discordServerId,
	// });

	// let dbServerId: number;

	// const { data: getServerIdData, error: getServerIdError } = await getServerId(
	// 	{
	// 		discordServerId: discordServerId,
	// 	},
	// );

	// console.log(getServerIdError);
	// console.log(getServerIdData);

	// dbServerId = getServerIdData![0]['id'];

	// const { data, error } = await supabase
	// 	.from('Events')
	// 	.insert([
	// 		{
	// 			eventName: eventName,
	// 			eventHost: eventHost,
	// 			gameName: gameName,
	// 			description: description,
	// 			dateTime: dateTime,
	// 			isTeamEvent: isTeamEvent,
	// 			serverId: dbServerId,
	// 			timezone: timezone,
	// 			maxNumTeams: maxNumTeams,
	// 			maxNumTeamPlayers: maxNumTeamPlayers,
	// 			maxNumPlayers: maxNumPlayers,
	// 		},
	// 	])
	// 	.select();

	// if (error) throw error;

	// return data[0]['id'];
};
