<script lang="ts">
	export let data;

	const { guildInfo } = data;

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { getUser, getSession, signOut } from '$lib/supabase/auth';
	import { guildInfo as guildInfoStore } from '../../../store/guildStore.js';

	const { id } = $page.params;

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

<div class="parent">
	<div class="stats-div">
		<p class="stat-title spreaded-title">statistics</p>

		<div class="stats">
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Events created</p>
			</div>
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Events active</p>
			</div>
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Events finished</p>
			</div>
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Events cancelled</p>
			</div>
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Registered players</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.parent {
		color: var(--white-color);

		.stats-div {
			.stats {
				margin-top: 25px;

				display: flex;
				align-items: center;
				gap: 50px;

				.stat {
					.number {
						font-size: var(--subheading-font-size);
					}
				}
			}
		}
	}
</style>
