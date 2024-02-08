<script lang="ts">
	export let imgUrl: string;
	export let guildName: string;
	export let id: string;

	import { goto } from '$app/navigation';

	const onClick = () => {
		goto(`/dashboard/${id}`, { invalidateAll: true, replaceState: true });
	};
</script>

<button
	class="flex flex-col gap-4 items-center justify-center border-0 bg-secondary transition-all ease-in-out duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-110 active:scale-110 focus:scale-110 hover:duration-300"
	{id}
	on:click={onClick}
>
	<img
		class="rounded-[15px] w-[130px] object-cover"
		src={imgUrl}
		alt="server url"
	/>
	<p class="text-normal text-white text-center">{guildName}</p>
</button>
