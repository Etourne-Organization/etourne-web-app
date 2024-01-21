<script lang="ts">
	export let data;
	const {
		numEventsCreated,
		numRegisteredSinglePlayers,
		numRegisteredTeamPlayers,
	} = data;

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Statistics from '$lib/dashboard/statistics/Statistics.svelte';

	import { Toaster } from 'svelte-french-toast';

	import AddIcon from '$lib/dashboard/sidebar/icons/AddIcon.svelte';
	import CalendarIcon from '$lib/dashboard/sidebar/icons/CalendarIcon.svelte';

	const onCreateEventClick = () => {
		goto(`${$page.url.pathname}/create-event`);
	};

	const onAllEventsClick = () => {
		goto(`${$page.url.pathname}/all-events`);
	};
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="text-white">
	<Toaster />
	<Statistics
		{numEventsCreated}
		numEventsActive={numEventsCreated}
		numEventsFinished={'-'}
		numEventsCancelled={'-'}
		numRegisteredPlayers={numRegisteredSinglePlayers +
			numRegisteredTeamPlayers}
	/>
	<div class="mt-16">
		<p class="spreaded-title">actions</p>

		<div class="flex gap-10 mt-6">
			<button
				class="flex items-center gap-[30px] bg-light-secondary py-6 px-5 rounded-2xl min-w-[223px] border-0 hover:cursor-pointer hover:shadow-sm hover:brightness-90 hover:transition-transform hover:scale-[1.1]"
				on:click={onCreateEventClick}
			>
				<AddIcon color="var(--white-color)" width={50} height={50} />
				<p class="text-normal text-white">Create event</p>
			</button>
			<button
				class="flex items-center gap-[30px] bg-light-secondary py-6 px-5 rounded-2xl min-w-[223px] border-0 hover:cursor-pointer hover:shadow-sm hover:brightness-90 hover:transition-transform hover:scale-[1.1]"
				on:click={onAllEventsClick}
			>
				<CalendarIcon color="var(--white-color)" width={50} height={50} />
				<p class="text-normal text-white">All events</p>
			</button>
		</div>
	</div>
</div>
