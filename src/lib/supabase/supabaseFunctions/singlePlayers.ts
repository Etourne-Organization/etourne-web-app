/*
 * This file contains all the 'singlePlayers' table related functions
 */

import { supabase } from '../supabaseClient';
import { getAllEventsByServerId } from './events';

interface getNumRegisteredSinglePlayersInServer {
	discordServerId: string;
}

export const getNumRegisteredSinglePlayersInServer = async (
	props: getNumRegisteredSinglePlayersInServer,
) => {
	const { discordServerId } = props;

	const allEvents = await getAllEventsByServerId({
		discordServerId: discordServerId,
	});

	if (allEvents.length > 0) {
		const eventIds: [number?] = [];

		allEvents.forEach((e) => eventIds.push(e.id));

		const { data, error } = await supabase
			.from('SinglePlayers')
			.select()
			.in('eventId', eventIds);

		if (error) throw error;

		return data.length;
	} else {
		return 0;
	}
};
