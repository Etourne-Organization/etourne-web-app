<script lang="ts">
	import { enhance } from '$app/forms';

	import moment from 'moment-timezone';

	let eventType: string = '';
</script>

<svelte:head>
	<title>Dashboard | Create Event</title>
</svelte:head>

<div class="parent">
	<p class="stat-title spreaded-title">create event</p>
	<form
		class="create-event-form"
		method="POST"
		action="?/addEvent"
		use:enhance
	>
		<div class="field-div event-name-field-div">
			<label for="event-name">Event name</label>
			<input id="event-name" type="text" name="eventName" />
		</div>
		<div class="field-div game-name-field-div">
			<label for="game-name">Game name</label>
			<input id="game-name" type="text" name="gameName" />
		</div>
		<div class="field-div timezone-field-div">
			<label for="timezone">Timezone</label>
			<select name="timezone" id="timezone">
				{#each moment.tz.names() as tz}
					<option value={tz}>{tz}</option>
				{/each}
			</select>
		</div>
		<div class="field-div date-time-field-div">
			<label for="date-time">Date (Format: DD/MM/YY HOUR:MINUTE)</label>
			<input id="date-time" type="text" name="dateTime" />
		</div>
		<div class="field-div event-type-field-div">
			<label for="event-type">Event type</label>
			<select name="eventType" id="event-type" bind:value={eventType}>
				<option value="no-team">No team (regular)</option>
				<option value="team">Team</option>
			</select>

			{#if eventType === 'team'}
				<div class="field-div max-num-teams-field-div">
					<label for="max-num-teams">Set max num of teams</label>
					<input id="max-num-teams" type="number" name="maxNumTeams" />
				</div>
				<div class="field-div max-num-team-players-field-div">
					<label for="max-num-team-players"
						>Set max num of team players</label
					>
					<input
						id="max-num-team-players"
						type="number"
						name="maxNumTeamPlayers"
					/>
				</div>
			{:else}
				<div class="field-div max-num-players-field-div">
					<label for="max-num-players">Set max num of players</label>
					<input id="max-num-players" type="number" name="maxNumPlayers" />
				</div>
			{/if}
		</div>
		<div class="field-div event-description-div">
			<label for="event-description">Event description</label>
			<textarea id="event-description" name="eventDescription" />
		</div>
		<input id="submit-btn" type="submit" name="submit" value="Create event" />
	</form>
</div>

<style lang="scss">
	.parent {
		.create-event-form {
			margin-top: 40px;
			max-width: 600px;

			display: flex;
			flex-direction: column;
			gap: 20px;

			.field-div {
				display: flex;
				flex-direction: column;

				gap: 10px;

				label {
					color: var(--white-color);
				}

				input,
				select,
				textarea {
					background-color: var(--light-secondary-color);
					border: 0;
					border-radius: 10px;
					padding: 12px 10px;
					color: var(--white-color);
				}

				textarea {
					max-width: 600px;
					min-height: 150px;
				}

				textarea:focus,
				input:focus,
				select:focus {
					outline: none;
				}

				.max-num-teams-field-div,
				.max-num-players-field-div,
				.max-num-team-players-field-div {
					margin-top: 10px;
				}
			}

			#submit-btn {
				color: var(--white-color);
				margin-top: 10px;
				background-color: var(--primary-color);
				border: 0;
				border-radius: 15px;
				padding: 15px 10px;
				max-width: 185px;
				font-size: var(--normal-font-size);
				font-weight: bold;

				&:hover {
					cursor: pointer;
					filter: brightness(0.95);
				}
			}
		}
	}
</style>