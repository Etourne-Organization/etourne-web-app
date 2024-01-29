<script lang="ts">
	export let imgUrl: string;
	export let guildName: string;

	import { goto } from '$app/navigation';

	import { signOut as signOutWithDiscord, getUser } from '../../supabase/auth';

	let discordUser: any;
	getUser().subscribe((u) => (discordUser = u));

	console.log('discorduser', discordUser);

	const signOut = async () => {
		await signOutWithDiscord();
		goto('/');
		return;
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
			class="btn btn-square btn-error justify-center border-2 rounded-md h-auto"
			on:click={signOut}
		>
			<i class="ri-logout-box-r-line font-medium text-xl" />
		</button>
	</div>
</div>
