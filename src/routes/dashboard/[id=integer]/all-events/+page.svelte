<script lang="ts">
	export let data;

	const { allEvents } = data;

	import Dropdown from '$lib/dashboard/AllEvents/Dropdown.svelte';
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
			{#if allEvents && allEvents.length > 0}
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
							<Dropdown eventId={aE.id} />
						</td>
					</tr>
				{/each}
			{:else}
				<p>There are no events created...</p>
			{/if}
		</tbody>
	</table>
</div>
