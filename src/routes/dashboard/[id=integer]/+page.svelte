<script lang="ts">
	export let data;
	const { numEventsCreated, numRegisteredPlayers } = data;

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Statistics from '$lib/dashboard/statistics/Statistics.svelte';

	import AddIcon from '$lib/dashboard/sidebar/icons/AddIcon.svelte';
	import CalendarIcon from '$lib/dashboard/sidebar/icons/CalendarIcon.svelte';

	const onCreateEventClick = () => {
		goto(`${$page.url.pathname}/createEvent`);
	};

	const onAllEventsClick = () => {
		goto(`${$page.url.pathname}/allEvents`);
	};
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="parent">
	<Statistics
		{numEventsCreated}
		numEventsActive={numEventsCreated}
		numEventsFinished={0}
		numEventsCancelled={10}
		{numRegisteredPlayers}
	/>
	<div class="actions-div">
		<p class="action-title spreaded-title">actions</p>

		<div class="actions">
			<button class="action" on:click={onCreateEventClick}>
				<AddIcon color="var(--white-color)" width={50} height={50} />
				<p>Create event</p>
			</button>
			<button class="action" on:click={onAllEventsClick}>
				<CalendarIcon color="var(--white-color)" width={50} height={50} />
				<p>All events</p>
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.parent {
		color: var(--white-color);

		.actions-div {
			margin-top: 65px;

			.actions {
				margin-top: 25px;

				display: flex;
				gap: 40px;

				.action {
					display: flex;
					align-items: center;
					gap: 30px;

					background-color: var(--light-secondary-color);
					padding: 25px 20px;
					border-radius: 15px;
					min-width: 223px;
					border: 0;

					p {
						font-size: var(--normal-font-size);
						color: var(--white-color);
					}

					&:hover {
						cursor: pointer;
						transform: translateZ(0);
						box-shadow: 0 0 1px rgba(0, 0, 0, 0);
						backface-visibility: hidden;
						-moz-osx-font-smoothing: grayscale;
						transition-duration: 0.3s;
						transition-property: transform;
					}

					&:hover,
					&:focus,
					&:active {
						transform: scale(1.1);
					}
				}
			}
		}
	}
</style>
