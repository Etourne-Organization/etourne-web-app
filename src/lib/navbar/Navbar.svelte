<script lang="ts">
	import { goto } from '$app/navigation';

	import {
		signIn as signInWithDiscord,
		signOut as signOutWithDiscord,
		getUser,
	} from '$lib/supabase/auth';

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
			<li>
				<a
					href="/selectServer"
					class="text-white no-underline text-normal font-bold visited:text-whtie visited:no-underline hover:text-primary"
					>Dashboard</a
				>
			</li>
			<li>
				<a
					href="/"
					class="text-white no-underline text-normal font-bold visited:text-whtie visited:no-underline hover:text-primary"
					>About</a
				>
			</li>
			<li>
				<a
					href="/"
					class="text-white no-underline text-normal font-bold visited:text-whtie visited:no-underline hover:text-primary"
					>Add Bot</a
				>
			</li>
		</ul>
		{#if !discordUser}
			<button
				class="flex gap-5 items-center text-normal font-bold bg-primary text-white border-0 rounded-2xl py-4 px-7"
				on:click={signIn}
			>
				<img src="/icons/discord-logo.svg" alt="discord logo" /> Sign In
			</button>
		{:else}
			<button
				class="bg-none border-0 hover:cursor-pointer"
				on:click={signOut}
			>
				<img class="w-[50px]" src="/icons/signout.svg" alt="sign out" />
			</button>
		{/if}
	</div>
</div>
