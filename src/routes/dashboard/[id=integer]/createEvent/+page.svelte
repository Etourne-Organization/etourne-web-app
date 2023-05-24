<script lang="ts">
	import moment from 'moment-timezone';

	let eventType: string = '';

	console.log(eventType);
</script>

<svelte:head>
	<title>Dashboard | Create Event</title>
</svelte:head>

<div class="parent">
	<p class="stat-title spreaded-title">create event</p>
	<form class="create-event-form">
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
				<option value="africa">Africa</option>
				<option value="america">America</option>
				<option value="europe">Europe</option>
			</select>
		</div>
		<div class="field-div date-field-div">
			<label for="date">Date (Format: DD/MM/YY HOUR:MINUTE)</label>
			<input id="date" type="text" name="date" />
		</div>
		<div class="field-div event-type-field-div">
			<label for="event-type">Event type</label>
			<select name="eventType" id="event-type" bind:value={eventType}>
				<option value="no-team">No team (regular)</option>
				<option value="team">Team</option>
			</select>
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
