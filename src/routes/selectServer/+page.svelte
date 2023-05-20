<script lang="ts">
	export const data: string | undefined = undefined;

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import Server from '$lib/selectServer/Server.svelte';
	import { getUser, getSession } from '$lib/supabase/auth';

	// console.log(data);

	onMount(async () => {
		let discordUser: any;
		let session: any;

		getUser().subscribe((u) => (discordUser = u));

		getSession().subscribe((s) => {
			console.log(s);
			session = s;
		});

		const fetchGuilds = async () => {
			await fetch('https://discord.com/api/users/@me/guilds', {
				headers: {
					Authorization: `Bearer ${session.provider_token}`,
				},
			})
				.then((res) => res.json())
				.then((res) => console.log(res));
		};

		fetchGuilds();

		if (!discordUser) {
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>Etourne - Select Server</title>
</svelte:head>

<div class="parent">
	<div class="top">
		<img src="/icons/server.svg" alt="" />
		<h1 class="title">Servers</h1>
	</div>
	<p class="text">
		Servers you and Etourne bot is in. Please select a server.
	</p>
	<ul class="server-list">
		<Server imgUrl="/exampleImages/nd-logo.png" serverName="Noob Dev 54" />
		<Server imgUrl="/exampleImages/nd-logo.png" serverName="Noob Dev 54" />
		<Server imgUrl="/exampleImages/nd-logo.png" serverName="Noob Dev 54" />
	</ul>
</div>

<style lang="scss">
	.parent {
		.top {
			display: flex;
			gap: 35px;

			.title {
				font-size: var(--heading-font-size);
				color: var(--white-color);
			}
		}

		.text {
			font-size: var(--normal-font-size);
			color: var(--white-color);
			margin-top: 20px;
		}

		.server-list {
			margin-top: 50px;

			display: flex;
			gap: 40px;
		}
	}
</style>
