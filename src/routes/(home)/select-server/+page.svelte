<script lang="ts">
	let guilds: [] | any = [];
	let isLoading: boolean = true;

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import Server from '$lib/selectServer/Server.svelte';
	import { getUser, getSession, signOut } from '$lib/supabase/auth';

	onMount(async () => {
		let discordUser: any;
		let session: any;

		getUser().subscribe((u) => (discordUser = u));

		getSession().subscribe((s) => {
			session = s;
		});

		if (!discordUser) {
			goto('/');
		}

		if (session) {
			if (!session.provider_token) {
				signOut();
				goto('/');
			}

			await fetch('https://discord.com/api/users/@me/guilds', {
				headers: {
					Authorization: `Bearer ${session.provider_token}`,
				},
			})
				.then((res) => res.json())
				.then((res) => {
					guilds = res;
				});

			isLoading = false;
		}
	});
</script>

<svelte:head>
	<title>Etourne - Select Server</title>
</svelte:head>

<div>
	<div class="flex gap-9">
		<img src="/icons/server.svg" alt="" />
		<h1 class="text-heading text-white">Servers</h1>
	</div>
	<p class="text-normal text-white mt-5">
		Servers you and Etourne bot is in. Please select a server.
	</p>
	{#if isLoading}
		<p class="text-normal text-white mt-5">Loading ...</p>
	{:else}
		<ul
			class="mt-12 grid grid-cols-1 md:grid-cols-5 auto-rows-min gap-y-10 gap-x-7"
		>
			{#each guilds as g}
				<Server
					id={g.id}
					imgUrl={g.icon
						? `https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png`
						: '/logo/etourne-logo-with-bkg.png'}
					guildName={g.name}
				/>
			{/each}
		</ul>
	{/if}
</div>
