import { env } from '$env/dynamic/public';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, fetch }) => {
	const { id } = params;

	let guildInfo: any;

	await fetch(`https://discord.com/api/guilds/${id}`, {
		method: 'GET',
		headers: {
			Authorization: `Bot ${env.PUBLIC_DISCORDJS_BOT_TOKEN}`,
		},
	})
		.then((res) => res.json())
		.then((res) => {
			guildInfo = res;
		})
		.catch((err) => console.log(err));

	/* if the bot isn't in the server, then redirect to invite the bot to the server */
	if (!guildInfo.id) {
		throw redirect(
			308,
			`https://discord.com/api/oauth2/authorize?client_id=${env.PUBLIC_DISCORD_CLIENT_ID}&permissions=277294202048&scope=bot%20applications.commands`,
		);
	}

	return {
		guildInfo,
	};
};
