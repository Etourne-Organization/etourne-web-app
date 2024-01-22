<script lang="ts">
	export let data;

	const { allEvents } = data;

	import { DropdownMenu, Button } from 'bits-ui';

	import DeleteConfirmationDialog from '$lib/dashboard/CreateEvent/DeleteConfirmationDialog.svelte';

	let currentDialogOpenId: number | null = null;

	const onDeleteButtonClick = (eventId: number) => {
		currentDialogOpenId = eventId;
		console.log(currentDialogOpenId);
	};
</script>

<svelte:head>
	<title>Dashboard | All Events</title>
</svelte:head>

<div>
	<p class="stat-title spreaded-title">all events</p>

	<table class="table table-zebra mt-10">
		<thead>
			<tr>
				<th class="col" id="id-col">ID</th>
				<th class="col" id="event-name-col">Event Name</th>
				<th class="col" id="game-name-col">Game Name</th>
				<th class="col" id="timezone-col">Timezone</th>
				<th class="col" id="date-time-col">Date and Time</th>
				<th class="col" id="max-num-players-col">Max Num of Players</th>
				<th class="col" id="max-num-teams-col">Max Num of Teams</th>
				<th class="col" id="max-num-team-players-col">
					Max Num of Team Players
				</th>
				<th class="col"></th>
			</tr>
		</thead>
		<tbody>
			{#if allEvents.length > 0}
				{#each allEvents as aE}
					<tr>
						<td>{aE.id}</td>
						<td>{aE.eventName}</td>
						<td>{aE.gameName}</td>
						<td>{aE.timezone}</td>
						<td
							>{`${new Date(aE.dateTime).getDate()}/${
								new Date(aE.dateTime).getMonth() + 1
							}/${new Date(aE.dateTime).getFullYear()} ${new Date(
								aE.dateTime,
							).getHours()} ${
								new Date(aE.dateTime).getMinutes().toString().length ===
									1 && new Date(aE.dateTime).getMinutes() === 0
									? '00'
									: new Date(aE.dateTime).getMinutes()
							}`}</td
						>
						<td>{aE.maxNumPlayers ? aE.maxNumPlayers : '-'}</td>
						<td>{aE.maxNumTeams ? aE.maxNumTeams : '-'}</td>
						<td>{aE.maxNumTeamPlayers ? aE.maxNumTeamPlayers : '-'}</td>
						<td>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger
									class="h-10 w-10 items-center justify-center rounded-md transition-transform hover:bg-light-secondary active:scale-98"
								>
									<i class="ri-more-2-fill text-white text-2xl"></i>
								</DropdownMenu.Trigger>

								<DropdownMenu.Content
									class="w-full max-w-[150px] rounded-md bg-black px-1 py-1.5 shadow-lg"
									align="end"
									sideOffset={3}
								>
									<DropdownMenu.Item
										class="h-10 flex items-center gap-2 rounded-md py-3 px-3 font-medium hover:cursor-pointer hover:bg-[#343434]"
									>
										<i class="ri-edit-2-fill" />
										Edit
									</DropdownMenu.Item>

									<DropdownMenu.Item
										class="h-10 flex items-center gap-2 rounded-md py-3 px-3 font-medium hover:cursor-pointer hover:bg-[#4d0f0f]"
										on:click={() => onDeleteButtonClick(aE.id)}
									>
										<i class="ri-delete-bin-fill" />
										Delete
									</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>

							<DeleteConfirmationDialog
								eventId={aE.id}
								isDialogOpen={currentDialogOpenId === aE.id
									? true
									: false}
							/>
						</td>
					</tr>
				{/each}
			{:else}
				<p>There are no events created...</p>
			{/if}
		</tbody>
	</table>
</div>
