import { error } from '@sveltejs/kit';

import { getNumEventsCreateInServer } from '$lib/supabase/supabaseFunctions/events';
import { getNumRegisteredSinglePlayersInServer } from '$lib/supabase/supabaseFunctions/singlePlayers';
import { getNumRegisteredTeamPlayersInServer } from '$lib/supabase/supabaseFunctions/teamPlayer.js';

export const load = async ({ params, url }) => {
	try {
		const guildId: string = url.pathname.split('/')[2];

		const numEventsCreated = await getNumEventsCreateInServer({
			discordServerId: guildId,
		});
		const numRegisteredSinglePlayers =
			await getNumRegisteredSinglePlayersInServer({
				discordServerId: guildId,
			});
		const numRegisteredTeamPlayers =
			await getNumRegisteredTeamPlayersInServer({
				discordServerId: guildId,
			});

		return {
			numEventsCreated,
			numRegisteredSinglePlayers,
			numRegisteredTeamPlayers,
		};
	} catch (err) {
		throw error(500, {
			message: 'something went wrong',
		});
	}
};
