<script lang="ts">
	import AddIcon from '$lib/dashboard/sidebar/icons/AddIcon.svelte';
	import CalendarIcon from '$lib/dashboard/sidebar/icons/CalendarIcon.svelte';
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="parent">
	<div class="stats-div">
		<p class="stat-title spreaded-title">statistics</p>

		<div class="stats">
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Events created</p>
			</div>
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Events active</p>
			</div>
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Events finished</p>
			</div>
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Events cancelled</p>
			</div>
			<div class="stat">
				<h2 class="number">45</h2>
				<p class="description">Registered players</p>
			</div>
		</div>
	</div>
	<div class="actions-div">
		<p class="action-title spreaded-title">actions</p>

		<div class="actions">
			<div class="action">
				<AddIcon color="var(--white-color)" />
				<p>Create event</p>
			</div>
			<div class="action">
				<AddIcon color="var(--white-color)" />
				<p>Create event</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.parent {
		color: var(--white-color);

		.stats-div {
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
		}

		.actions-div {
			margin-top: 65px;

			.actions {
				margin-top: 25px;

				display: flex;
				gap: 40px;

				.action {
					display: flex;
					gap: 30px;

					background-color: var(--light-secondary-color);
					padding: 20px 15px;
					border-radius: 15px;
				}
			}
		}
	}
</style>
