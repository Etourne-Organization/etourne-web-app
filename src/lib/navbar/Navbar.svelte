<script lang="ts">
	import { goto } from '$app/navigation';

	import {
		signIn as signInWithDiscord,
		signOut as signOutWithDiscord,
		getUser,
	} from '$lib/supabase/auth';

	const links: Array<{ name: string; link: string }> = [
		{
			name: 'About Us',
			link: '/',
		},
		{
			name: 'Add Bot',
			link: '/',
		},
	];

	let discordUser: any;
	getUser().subscribe((u) => (discordUser = u));

	const signIn = async () => {
		await signInWithDiscord();
	};

	const signOut = async () => {
		await signOutWithDiscord();
		goto('/');
	};
</script>

<div class="flex justify-between items-center py-12 px-[100px]">
	<img src="/logo/etourne-letter-logo.svg" alt="etourne logo" />
	<div class="flex items-center justify-between gap-20">
		<ul class="list-none flex items-center gap-16">
			{#each links as { name, link }}
				<li>
					<a
						href={link}
						class="text-white no-underline text-normal font-bold visited:text-white visited:no-underline hover:text-primary transition-all ease-in-out duration-200"
					>
						{name}
					</a>
				</li>
			{/each}
			<li></li>
		</ul>
		{#if !discordUser}
			<button
				class="btn btn-primary font-bold bg-primary text-white rounded-md"
				on:click={signIn}
			>
				<i class="ri-discord-line text-xl"></i> Sign In with Discord
			</button>
		{:else}
			<div class="flex gap-3">
				<a
					href="/select-server"
					class="btn btn-light-secondary text-white font-bold rounded-md"
				>
					Manage Servers
				</a>

				<button
					class="btn btn-square btn-error justify-center border-2 rounded-md"
					on:click={signOut}
				>
					<i class="ri-logout-box-r-line font-medium text-xl" />
				</button>
			</div>
		{/if}
	</div>
</div>
