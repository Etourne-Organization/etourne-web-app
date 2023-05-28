import { getAllEvents } from '$lib/supabase/supabaseFunctions/events.js';

export const load = async ({ params, url }) => {
	const guildId: string = url.pathname.split('/')[2];

	const allEvents = await getAllEvents({ discordServerId: guildId });

	return {
		allEvents,
	};
};
