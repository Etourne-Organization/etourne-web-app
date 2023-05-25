import momentTimezone from 'moment-timezone';

import { addEvent } from '$lib/supabase/supabaseFunctions/events';

export const actions = {
	addEvent: async ({ request, url }) => {
		const formData = await request.formData();

		const guildId = url.pathname.split('/')[2];

		const eventName: string | any = formData.get('eventName');
		const gameName: string | any = formData.get('gameName');
		const timezone: string | any = formData.get('timezone');
		const dateTime: string | any = formData.get('dateTime');
		const eventType: string | any = formData.get('eventType');
		const maxNumPlayers: number | any = formData.get('maxNumPlayers');
		const maxNumTeams: number | any = formData.get('maxNumTeams');
		const maxNumTeamPlayers: number | any = formData.get('maxNumTeamPlayers');
		const eventDescription: string | any = formData.get('eventDescription');

		await addEvent({
			eventName: eventName,
			gameName: gameName,
			eventHost: 'mz10ah#0054',
			description: eventDescription,
			dateTime: new Date(
				momentTimezone.tz(dateTime, 'DD/MM/YYYY hh:mm', timezone).format(),
			).toISOString(),
			maxNumPlayers: maxNumPlayers,
			timezone: timezone,
			maxNumTeams: maxNumTeams,
			maxNumTeamPlayers: maxNumTeamPlayers,
			discordServerId: guildId,
			isTeamEvent: maxNumTeamPlayers ? true : false,
		});
	},
};
