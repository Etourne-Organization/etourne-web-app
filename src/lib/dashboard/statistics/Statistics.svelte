<script lang="ts">
	export let numEventsCreated: number;
	export let numEventsActive: number;
	export let numEventsFinished: number | string;
	export let numEventsCancelled: number | string;
	export let numRegisteredPlayers: number;
</script>

<div class="parent">
	<p class="stat-title spreaded-title">statistics</p>

	<div class="flex items-center gap-12 mt-6">
		<div>
			<h2 class="text-sub-heading">{numEventsCreated}</h2>
			<p class="mt-2">
				{numEventsCreated === 1 || numEventsCreated === 0
					? 'Event'
					: 'Events'} created
			</p>
		</div>
		<div>
			<h2 class="text-sub-heading">{numEventsActive}</h2>
			<p class="mt-2">
				{numEventsActive === 1 || numEventsActive === 0
					? 'Event'
					: 'Events'} active
			</p>
		</div>
		<div>
			<h2 class="text-sub-heading">{numEventsFinished}</h2>
			<p class="mt-2">Events finished</p>
		</div>
		<div>
			<h2 class="text-sub-heading">{numEventsCancelled}</h2>
			<p class="mt-2">Events cancelled</p>
		</div>
		<div>
			<h2 class="text-sub-heading">{numRegisteredPlayers}</h2>
			<p class="mt-2">
				Registered {numRegisteredPlayers === 1 || numRegisteredPlayers === 0
					? 'player'
					: 'players'}
			</p>
		</div>
	</div>
</div>
