import { fail } from '@sveltejs/kit';

import momentTimezone from 'moment-timezone';

import { addEvent } from '$lib/supabase/supabaseFunctions/events';

export const actions = {
	addEvent: async ({ request, url }) => {
		try {
			const formData = await request.formData();

			const guildId: string = url.pathname.split('/')[2];

			const eventName: string | any = formData.get('eventName');
			const gameName: string | any = formData.get('gameName');
			const timezone: string | any = formData.get('timezone');
			const dateTime: string | any = formData.get('dateTime');
			const eventHost: string | any = formData.get('eventHost');
			const eventType: string | any = formData.get('eventType');
			const maxNumPlayers: number | any = formData.get('maxNumPlayers');
			const maxNumTeams: number | any = formData.get('maxNumTeams');
			const maxNumTeamPlayers: number | any =
				formData.get('maxNumTeamPlayers');
			const eventDescription: string | any =
				formData.get('eventDescription');

			console.log(timezone);

			// await addEvent({
			// 	eventName: eventName,
			// 	gameName: gameName,
			// 	eventHost: eventHost,
			// 	description: eventDescription,
			// 	dateTime: new Date(
			// 		momentTimezone.tz(dateTime, timezone).format(),
			// 	).toISOString(),
			// 	maxNumPlayers: parseInt(maxNumPlayers),
			// 	timezone: timezone,
			// 	maxNumTeams: parseInt(maxNumTeams),
			// 	maxNumTeamPlayers: parseInt(maxNumTeamPlayers),
			// 	discordServerId: guildId,
			// 	isTeamEvent: eventType === 'team' ? true : false,
			// });
		} catch (err) {
			return fail(500, { err });
		}
	},
};
