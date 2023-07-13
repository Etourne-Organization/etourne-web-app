/*
 * This file contains all the 'singlePlayers' table related functions
 */

import { supabase } from '../supabaseClient';
import { checkServerExists, getServerId } from './servers';
import { getAllEvents } from './events';

interface getNumRegisterPlayersInServer {
	discordServerId: string;
}

export const getNumRegisterPlayersInServer = async (
	props: getNumRegisterPlayersInServer,
) => {
	const { discordServerId } = props;

	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	if (getServerIdError) throw getServerIdError;

	const { data: eventsData, error: eventsError } = await supabase
		.from('Events')
		.select('id')
		.eq('serverId', getServerIdData![0]['id']);

	if (eventsError) throw eventsError;

	if (eventsData.length > 0) {
		const eventIds: [number?] = [];

		eventsData.forEach((e) => eventIds.push(e.id));

		const { data, error } = await supabase
			.from('SinglePlayers')
			.select()
			.in('eventId', eventIds);

		if (error) throw error;

		return data.length;
	} else {
		return 0;
	}

	return 1;
};
