<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import moment from 'moment-timezone';
	import toast, { Toaster } from 'svelte-french-toast';

	import { getUser } from '$lib/supabase/auth.js';
	import {
		getSortedNormalizedTimezoneNames,
		getTimezoneValue,
	} from '$lib/utilities/timezone';

	let eventType: string = '';
	let required: boolean = true;
	let user: any; // TODO: assign type to this

	console.log(getSortedNormalizedTimezoneNames());

	getUser().subscribe((u) => {
		if (u) {
			user = u;
		}
	});
</script>

<svelte:head>
	<title>Dashboard | Create Event</title>
</svelte:head>

<div>
	<Toaster />
	<p class="stat-title spreaded-title">create event</p>
	<form
		class="flex flex-col gap-5 mt-10 max-w-[600px]"
		method="POST"
		action="?/addEvent"
		use:enhance={({ cancel }) => {
			// calling `cancel()` will prevent the submission
			getUser().subscribe((u) => {
				if (!u) {
					console.log('not signed in');
					cancel();
					goto('/');
				}
			});

			console.log('processing');
			const toastId = toast.loading('Working on it...');

			return async ({ result }) => {
				console.log(result);
				// `result` is an `ActionResult` object
				if (result.type === 'success') {
					toast.success('Event created successfully!', {
						id: toastId,
						duration: 5000,
					});
				} else {
					toast.error('Event creation failed!', {
						id: toastId,
						duration: 5000,
					});
				}
			};
		}}
	>
		<div class="flex flex-col gap-[10px]">
			<label class="text-white" for="event-name">Event name</label>
			<input
				class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white"
				id="event-name"
				type="text"
				name="eventName"
				{required}
			/>
		</div>
		<div class="flex flex-col gap-[10px]">
			<label class="text-white" for="game-name">Game name</label>
			<input
				class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white"
				id="game-name"
				type="text"
				name="gameName"
				{required}
			/>
		</div>
		<div class="flex flex-col gap-[10px]">
			<label class="text-white" for="timezone">Timezone</label>
			<select
				class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white"
				name="timezone"
				id="timezone"
				{required}
			>
				{#each moment.tz.names() as tz}
					<option value={tz}>{tz}</option>
				{/each}
			</select>
		</div>
		<div class="flex flex-col gap-[10px]">
			<label class="text-white" for="date-time"
				>Date (Format: DD/MM/YY HOUR:MINUTE)</label
			>
			<input
				class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white"
				id="date-time"
				type="text"
				name="dateTime"
				{required}
			/>
		</div>
		<div class="flex flex-col gap-[10px]">
			<label class="text-white" for="event-type">Event type</label>
			<select
				class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white"
				name="eventType"
				id="event-type"
				bind:value={eventType}
				{required}
			>
				<option selected value="no-team">No team (regular)</option>
				<option value="team">Team</option>
			</select>

			{#if eventType === 'team'}
				<div class="flex flex-col gap-[10px] mt-[10px]">
					<label class="text-white" for="max-num-teams"
						>Set max num of teams</label
					>
					<input
						class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white focus:outline-none"
						id="max-num-teams"
						type="number"
						name="maxNumTeams"
						placeholder="Defaults to unlimited"
					/>
				</div>
				<div class="flex flex-col gap-[10px] mt-[10px]">
					<label class="text-white" for="max-num-team-players"
						>Set max num of team players</label
					>
					<input
						class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white focus:outline-none"
						id="max-num-team-players"
						type="number"
						name="maxNumTeamPlayers"
						placeholder="Defaults to unlimited"
					/>
				</div>
			{:else}
				<div class="flex flex-col gap-[10px] mt-[10px]">
					<label class="text-white" for="max-num-players"
						>Set max num of players</label
					>
					<input
						class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white focus:outline-none"
						id="max-num-players"
						type="number"
						name="maxNumPlayers"
						placeholder="Defaults to unlimited"
					/>
				</div>
			{/if}
		</div>
		<input
			class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white focus:outline-none"
			id="event-host"
			type="text"
			name="eventHost"
			required
			hidden
			value={user && user.user_metadata.name}
		/>
		<div class="flex flex-col gap-[10px] mt-[10px]">
			<label class="text-white" for="event-description"
				>Event description</label
			>
			<textarea
				class="bg-light-secondary border-0 rounded-lg py-3 px-[10px] text-white focus:outline-none"
				id="event-description"
				name="eventDescription"
			/>
		</div>
		<input
			class="text-white mt-[10px] bg-primary border-0 rounded-2xl py-4 px-[10px] max-w-[185px] text-normal font-bold focus:outline-none hover:cursor-pointer hover:brightness-95"
			id="submit-btn"
			type="submit"
			name="submit"
			value="Create event"
		/>
	</form>
</div>
