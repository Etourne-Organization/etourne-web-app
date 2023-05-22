<script lang="ts">
	export let data;

	const { guildInfo } = data;

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { getUser, getSession, signOut } from '$lib/supabase/auth';
	import { guildInfo as guildInfoStore } from '../../../store/guildStore.js';

	const { id } = $page.params;

	console.log(guildInfo.icon);

	guildInfoStore.set({
		imgUrl: guildInfo.icon
			? `https://cdn.discordapp.com/icons/${id}/${guildInfo.icon}.png`
			: '/icons/null-image.svg',
		guildName: guildInfo.name,
		guildId: id,
	});

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
		}
	});
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h2>servers</h2>
