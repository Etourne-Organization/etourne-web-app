<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import toast, { Toaster } from 'svelte-french-toast';
	import { Autocomplete } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption } from '@skeletonlabs/skeleton';

	import { getUser } from '$lib/supabase/auth.js';
	import {
		getSortedNormalizedTimezoneNames,
		getTimezoneLabelValue,
	} from '$lib/utilities/timezone';

	let eventType: string = 'no-team';
	let required: boolean = true;
	let user: any; // TODO: assign type to this

	const tzNames: Array<{ label: string; value: string }> =
		getSortedNormalizedTimezoneNames().map((timezone: string) =>
			getTimezoneLabelValue(timezone),
		);

	getUser().subscribe((u) => {
		if (u) {
			user = u;
		}
	});

	let timezoneInputLabel: string = '';
	let timezoneInputValue: string = '';

	function onTimezoneSelection(
		event: CustomEvent<AutocompleteOption<string>>,
	): void {
		timezoneInputLabel = event.detail.label;
		timezoneInputValue = event.detail.value;
	}
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
				class="input input-primary border-0 bg-light-secondary w-full max-w-lg rounded-md text-white"
				id="event-name"
				type="text"
				name="eventName"
				{required}
			/>
		</div>
		<div class="flex flex-col gap-[10px]">
			<label class="text-white" for="game-name">Game name</label>
			<input
				class="input input-primary border-0 bg-light-secondary w-full max-w-lg rounded-md text-white"
				id="game-name"
				type="text"
				name="gameName"
				{required}
			/>
		</div>
		<div class="flex flex-col gap-[10px]">
			<label class="text-white" for="timezone">Timezone</label>
			<input
				class="input input-primary border-0 bg-light-secondary w-full max-w-lg rounded-md text-white"
				type="search"
				name="timezone-label"
				bind:value={timezoneInputLabel}
				placeholder="Search..."
			/>
			<input
				type="hidden"
				id="timezone-hidden"
				name="timezone"
				bind:value={timezoneInputValue}
			/>
			<div
				class="card w-full max-w-lg bg-light-secondary max-h-48 p-4 overflow-y-auto rounded-md"
				tabindex="-1"
			>
				<Autocomplete
					bind:input={timezoneInputLabel}
					options={tzNames}
					on:selection={onTimezoneSelection}
					regionItem="p-3 hover:bg-secondary rounded-md hover:cursor-pointer"
				/>
			</div>
		</div>
		<div class="flex flex-col gap-[10px]">
			<label class="text-white" for="date-time">
				Date and time of the event
			</label>
			<input
				class="input input-primary border-0 bg-light-secondary w-full max-w-lg rounded-md text-white dark:[color-scheme:dark]"
				id="date-time"
				type="datetime-local"
				name="dateTime"
				{required}
			/>
		</div>

		<div class="flex flex-col gap-[10px]">
			<label class="text-white" for="event-type">Event type</label>
			<select
				class="select select-primary w-full max-w-lg bg-light-secondary border-0 rounded-md text-white"
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
						class="input input-primary border-0 bg-light-secondary w-full max-w-lg rounded-md text-white"
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
						class="input input-primary border-0 bg-light-secondary w-full max-w-lg rounded-md text-white"
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
						class="input input-primary border-0 bg-light-secondary w-full max-w-lg rounded-md text-white"
						id="max-num-players"
						type="number"
						name="maxNumPlayers"
						placeholder="Defaults to unlimited"
					/>
				</div>
			{/if}
		</div>
		<input
			class="bg-light-secondary border-0 rounded-md py-3 px-[10px] text-white focus:outline-none"
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
				class="textarea textarea-primary bg-light-secondary border-0 rounded-md text-white max-w-lg"
				id="event-description"
				name="eventDescription"
			/>
		</div>
		<input
			class="btn btn-primary text-white mt-[10px] rounded-md max-w-sm"
			id="submit-btn"
			type="submit"
			name="submit"
			value="Create event"
		/>
	</form>
</div>
