import { fail } from '@sveltejs/kit';

import {
	getAllEventsByServerId,
	deleteEvent,
} from '$lib/supabase/supabaseFunctions/events';

export const load = async ({ params, url }) => {
	const guildId: string = url.pathname.split('/')[2];

	const allEvents = await getAllEventsByServerId({ discordServerId: guildId });

	return {
		allEvents,
	};
};

export const actions = {
	deleteEvent: async ({ request, url }) => {
		try {
			const formData = await request.formData();
			const eventId: string | any = formData.get('eventId');

			if (eventId) await deleteEvent({ eventId: parseInt(eventId) });
			// throw redirect(302, url.href);
		} catch (err) {
			return fail(500, { err });
		}
	},
};
