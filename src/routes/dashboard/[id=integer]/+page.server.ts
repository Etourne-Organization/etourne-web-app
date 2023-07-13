import { error } from '@sveltejs/kit';

import { getNumEventsCreateInServer } from '$lib/supabase/supabaseFunctions/events';
import { getNumRegisterPlayersInServer } from '$lib/supabase/supabaseFunctions/singlePlayers.js';

export const load = async ({ params, url }) => {
	try {
		const guildId: string = url.pathname.split('/')[2];

		const numEventsCreated = await getNumEventsCreateInServer({
			discordServerId: guildId,
		});
		const numRegisteredPlayers = await getNumRegisterPlayersInServer({
			discordServerId: guildId,
		});

		return { numEventsCreated, numRegisteredPlayers };
	} catch (err) {
		throw error(500, {
			message: 'something went wrong',
		});
	}
};
