<script lang="ts">
	export let data;

	const { guildInfo } = data;

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import 'remixicon/fonts/remixicon.css';

	import { getUser, getSession, signOut } from '$lib/supabase/auth';
	import Sidebar from '$lib/dashboard/sidebar/Sidebar.svelte';
	import Navbar from '$lib/dashboard/navbar/Navbar.svelte';
	import { guildInfo as guildInfoStore } from '../../store/guildStore';
	import {
		checkAddUser,
		getUserRole,
	} from '$lib/supabase/supabaseFunctions/users';

	import '../../css/global.css';

	const { id } = $page.params;

	let discordUser: any;
	let session: any;

	guildInfoStore.set({
		imgUrl: guildInfo.icon
			? `https://cdn.discordapp.com/icons/${id}/${guildInfo.icon}.png`
			: '/icons/null-image.svg',
		guildName: guildInfo.name,
		guildId: id,
	});

	onMount(() => {
		getUser().subscribe(async (u: any) => {
			discordUser = u;

			if (u) {
				// checks and add the user in DB if not in DB - this is needed to check for user role
				await checkAddUser({
					discordUserId: u.user_metadata.provider_id,
					username: u.user_metadata.full_name,
					discordServerId: id,
				});

				const userRole: Array<{ roleId: number }> | null =
					await getUserRole({
						discordUserId: u.user_metadata.provider_id,
						discordServerId: id,
					})!;

				if (userRole && userRole[0].roleId === 1) {
					goto('/insufficient-permission');
					return;
				}
			}

			setTimeout(() => {
				if (!u) {
					goto('/');
					return;
				}
			}, 10000);
		});

		getSession().subscribe((s: any) => {
			session = s;

			setTimeout(() => {
				if (s) {
					if (!s.provider_token) {
						signOut();
						goto('/');
						return;
					}
				}
			}, 5000);
		});
	});
</script>

<div class="flex h-screen bg-secondary">
	{#if !discordUser || !session}
		<p class="text-normal text-white mt-5">Loading ...</p>
	{:else}
		<div class="left-sidebar">
			<Sidebar guildId={id} />
		</div>
		<div class="overflow-y-scroll w-full px-12 py-14">
			<Navbar
				imgUrl={guildInfo.icon
					? `https://cdn.discordapp.com/icons/${id}/${guildInfo.icon}.png`
					: '/icons/null-image.svg'}
				guildName={guildInfo.name}
			/>
			<div class="mt-12">
				<slot />
			</div>
		</div>
	{/if}
</div>
