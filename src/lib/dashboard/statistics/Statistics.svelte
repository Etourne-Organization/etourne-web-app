<script lang="ts">
	export let numEventsCreated: number;
	export let numEventsActive: number;
	export let numEventsFinished: number | string;
	export let numEventsCancelled: number | string;
	export let numRegisteredPlayers: number;
</script>

<div class="parent">
	<p class="stat-title spreaded-title">statistics</p>

	<div class="stats">
		<div class="stat">
			<h2 class="number">{numEventsCreated}</h2>
			<p class="description">
				{numEventsCreated === 1 || numEventsCreated === 0
					? 'Event'
					: 'Events'} created
			</p>
		</div>
		<div class="stat">
			<h2 class="number">{numEventsActive}</h2>
			<p class="description">
				{numEventsActive === 1 || numEventsActive === 0
					? 'Event'
					: 'Events'} active
			</p>
		</div>
		<div class="stat">
			<h2 class="number">{numEventsFinished}</h2>
			<p class="description">Events finished</p>
		</div>
		<div class="stat">
			<h2 class="number">{numEventsCancelled}</h2>
			<p class="description">Events cancelled</p>
		</div>
		<div class="stat">
			<h2 class="number">{numRegisteredPlayers}</h2>
			<p class="description">
				Registered {numRegisteredPlayers === 1 || numRegisteredPlayers === 0
					? 'player'
					: 'players'}
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.stats {
		margin-top: 25px;

		display: flex;
		align-items: center;
		gap: 50px;

		.stat {
			.number {
				font-size: var(--subheading-font-size);
			}
		}
	}
</style>
