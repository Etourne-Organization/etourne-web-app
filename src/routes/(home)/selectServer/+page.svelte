<script lang="ts">
	export const data: string | undefined = undefined;

	let guilds: [] | any = [];
	let isLoading: boolean = true;

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import Server from '$lib/selectServer/Server.svelte';
	import { getUser, getSession, signOut } from '$lib/supabase/auth';

	// console.log(data);
	// to get guild icon (guild image)
	// https://cdn.discordapp.com/icons/guild_id/guild_icon.png

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
			if (!session.provider_token) signOut();

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

<div class="parent">
	<div class="top">
		<img src="/icons/server.svg" alt="" />
		<h1 class="title">Servers</h1>
	</div>
	<p class="text">
		Servers you and Etourne bot is in. Please select a server.
	</p>
	{#if isLoading}
		<p class="loading-text">Loading ...</p>
	{:else}
		<ul class="server-list">
			{#each guilds as g, i}
				<Server
					id={g.id}
					index={i}
					imgUrl={g.icon
						? `https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png`
						: '/logo/etourne-logo-with-bkg.png'}
					guildName={g.name}
				/>
			{/each}
		</ul>
	{/if}
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

		.loading-text {
			font-size: var(--normal-font-size);
			color: var(--white-color);
			margin-top: 20px;
		}

		.text {
			font-size: var(--normal-font-size);
			color: var(--white-color);
			margin-top: 20px;
		}

		.server-list {
			margin-top: 50px;

			display: grid;
			grid-template-columns: repeat(5, auto);
			grid-column-gap: 40px;
			grid-row-gap: 30px;
			/* grid-auto-columns: auto; */
		}
	}
</style>
