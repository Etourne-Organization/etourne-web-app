import { env } from '$env/dynamic/public';

export const load = async ({ params }) => {
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
			console.log(res);
			guildInfo = res;
		});

	return {
		guildInfo,
	};
};
