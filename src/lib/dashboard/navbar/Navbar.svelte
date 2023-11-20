<script lang="ts">
	export let imgUrl: string;
	export let guildName: string;

	import { goto } from '$app/navigation';

	import { signOut as signOutWithDiscord, getUser } from '../../supabase/auth';

	let discordUser: any;
	getUser().subscribe((u) => (discordUser = u));

	const signOut = async () => {
		await signOutWithDiscord();
		goto('/');
	};
</script>

<div class="flex justify-between items-center text-white">
	<div class="flex gap-6 items-center">
		<img class="w-[100px]" src={imgUrl} alt="discord guild icon" />
		<h2 class="text-sub-heading">{guildName}</h2>
	</div>
	<div class="flex items-center gap-5">
		<img
			src={discordUser
				? discordUser.user_metadata.avatar_url
				: '/icons/loading.svg'}
			alt="discord guild icon"
			class="w-[50px]"
		/>
		<p class="text-normal font-bold">
			{discordUser ? discordUser.user_metadata.full_name : 'Loading'}
		</p>
		<button
			class="bg-none border-0 ml-5 hover:cursor-pointer"
			on:click={signOut}
		>
			<img class="w-12" src="/icons/signout.svg" alt="sign out" />
		</button>
	</div>
</div>
