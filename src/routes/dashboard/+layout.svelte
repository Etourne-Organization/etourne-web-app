<script lang="ts">
	export let data;

	const { guildInfo } = data;

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { getUser, getSession, signOut } from '$lib/supabase/auth';
	import Sidebar from '$lib/dashboard/sidebar/Sidebar.svelte';
	import Navbar from '$lib/dashboard/navbar/Navbar.svelte';
	import { guildInfo as guildInfoStore } from '../../store/guildStore';

	import '../../css/global.css';

	const { id } = $page.params;

	onMount(async () => {
		let discordUser: any;
		let session: any;

		// if (guildInfo.id) {
		guildInfoStore.set({
			imgUrl: guildInfo.icon
				? `https://cdn.discordapp.com/icons/${id}/${guildInfo.icon}.png`
				: '/icons/null-image.svg',
			guildName: guildInfo.name,
			guildId: id,
		});
		// }

		getUser().subscribe((u) => (discordUser = u));

		getSession().subscribe((s) => {
			session = s;
		});

		if (!discordUser) {
			goto('/');
		}

		// if (guildInfo.id) {
		guildInfoStore.set({
			imgUrl: guildInfo.icon
				? `https://cdn.discordapp.com/icons/${id}/${guildInfo.icon}.png`
				: '/icons/null-image.svg',
			guildName: guildInfo.name,
			guildId: id,
		});
		// }

		if (session) {
			if (!session.provider_token) {
				signOut();
				goto('/');
			}
		}
	});
</script>

<div class="layout">
	<div class="left-sidebar">
		<Sidebar guildId={id} />
	</div>
	<div class="right">
		<Navbar
			imgUrl={guildInfo.icon
				? `https://cdn.discordapp.com/icons/${id}/${guildInfo.icon}.png`
				: '/icons/null-image.svg'}
			guildName={guildInfo.name}
		/>
		<div class="children">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.layout {
		height: 100vh;
		background: var(--secondary-color);

		display: flex;

		.right {
			overflow-y: scroll;
			width: 100%;
			padding: 50px 55px;

			.children {
				margin-top: 50px;
			}
		}
	}
</style>
