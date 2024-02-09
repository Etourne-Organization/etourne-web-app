<script lang="ts">
	let guilds: [] | any = [];
	let etourneBotGuilds: [] | any = [];
	let isLoading: boolean = true;

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import Server from '$lib/selectServer/Server.svelte';
	import { getUser, getSession, signOut } from '$lib/supabase/auth';
	import { getFilteredServers } from '$lib/supabase/supabaseFunctions/servers';

	onMount(async () => {
		let discordUser: any;
		let session: any;

		getUser().subscribe((u) => {
			discordUser = u;

			if (!u) {
				goto('/');
			}
		});

		getSession().subscribe(async (s: any) => {
			session = s;

			if (s) {
				if (!s.provider_token) {
					signOut();
					goto('/');
				}

				await fetch('https://discord.com/api/users/@me/guilds', {
					headers: {
						Authorization: `Bearer ${s.provider_token}`,
					},
				})
					.then((res) => res.json())
					.then(async (res) => {
						const guildIds = res.map((r: any) => r.id);
						const etourneBotGuildIds = await getFilteredServers({
							discordServerIds: guildIds,
						});

						etourneBotGuilds = res.filter((r: any) =>
							etourneBotGuildIds.includes(r.id),
						);

						// remove etourneBotGuilds from res
						etourneBotGuilds.forEach((g: any) => {
							res.splice(res.indexOf(g), 1);
						});

						guilds = res;
					});

				isLoading = false;
			}
		});
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
	{#if isLoading}
		<p class="text-normal text-white mt-5">Loading ...</p>
	{:else}
		<h3 class="text-normal text-white font-bold mt-10">
			Servers Etourne Bot is in. Please select a server.
		</h3>
		<div
			class="mt-12 grid grid-cols-1 md:grid-cols-5 auto-rows-min gap-y-10 gap-x-7"
		>
			{#each etourneBotGuilds as g}
				<Server
					id={g.id}
					imgUrl={g.icon
						? `https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png`
						: '/logo/etourne-logo-with-bkg.png'}
					guildName={g.name}
				/>
			{/each}
		</div>
		<p class="text-normal text-white mt-20 font-bold">
			Other servers you are in:
		</p>
		<div
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
		</div>
	{/if}
</div>
