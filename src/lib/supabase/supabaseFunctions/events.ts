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
	serverName: string;
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
		serverName,
	} = props;

	const isServerExist: boolean = await checkServerExists({
		discordServerId: discordServerId,
	});

	let dbServerId: number;

	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	dbServerId = getServerIdData![0]['id'];

	const { data, error } = await supabase
		.from('Events')
		.insert([
			{
				eventName: eventName,
				eventHost: eventHost,
				gameName: gameName,
				description: description,
				dateTime: dateTime,
				isTeamEvent: isTeamEvent,
				serverId: dbServerId,
				timezone: timezone,
			},
		])
		.select();

	if (error) throw error;

	return data[0]['id'];
};
