/*
 * This file contains all the 'team players' table related functions
 */

import { supabase } from '../supabaseClient';
import { getAllTeamEventsByServerId } from './events';
import { getAllTeamsByEventIds } from './teams';

interface getNumRegisteredTeamPlayersInServer {
	discordServerId: string;
}

export const getNumRegisteredTeamPlayersInServer = async (
	props: getNumRegisteredTeamPlayersInServer,
) => {
	const { discordServerId } = props;

	const allEvents = await getAllTeamEventsByServerId({
		discordServerId: discordServerId,
	});

	if (allEvents.length > 0) {
		const eventIds: [number] = [0];
		eventIds.pop(); // hacky way to trick that the list is not empty

		allEvents.forEach((e) => eventIds.push(e.id));

		const allTeams = await getAllTeamsByEventIds({ eventIds: eventIds });

		if (allTeams.length > 0) {
			const teamIds: [number] = [0];
			teamIds.pop();

			allTeams.forEach((t) => teamIds.push(t.id));

			const { data, error } = await supabase
				.from('TeamPlayers')
				.select()
				.in('teamId', teamIds);

			if (error) throw error;

			return data.length;
		} else {
			return 0;
		}
	} else {
		return 0;
	}
};
