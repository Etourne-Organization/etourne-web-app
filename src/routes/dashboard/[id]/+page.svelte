<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

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
			if (!session.provider_token) signOut();
		}
	});
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h2>servers</h2>
