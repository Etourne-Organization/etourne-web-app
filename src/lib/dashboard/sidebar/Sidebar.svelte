<script lang="ts">
	import DashboardIcon from './icons/DashboardIcon.svelte';
	import CalendarIcon from './icons/CalendarIcon.svelte';
	import AddIcon from './icons/AddIcon.svelte';
</script>

<div class="parent">
	<div class="top">
		<div class="logo">
			<img src="/logo/et-logo.svg" alt="" />
		</div>
		<ul class="links">
			<li>
				<DashboardIcon />
				<a href="/dashboard/1">Dashboard</a>
			</li>
			<li>
				<CalendarIcon />
				<a href="/dashboard/1">Events</a>
			</li>
			<li>
				<AddIcon />
				<a href="/dashboard/1">Add Event</a>
			</li>
		</ul>
	</div>
	<div class="bottom" />
</div>

<style lang="scss">
	.parent {
		border-right: 0.5px solid var(--dark-white-color);
		height: 100%;

		.top {
			padding: 0 60px;

			display: flex;
			flex-direction: column;
			gap: 55px;

			.logo {
				margin-top: 60px;
			}

			ul {
				list-style: none;

				display: flex;
				flex-direction: column;
				gap: 40px;

				li {
					display: flex;
					gap: 20px;
					align-items: center;

					color: var(--dark-white-color);
					font-weight: bold;

					a {
						text-decoration: none;

						&:visited {
							color: var(--dark-white-color);
							text-decoration: none;
						}

						&:hover {
							color: var(--white-color);
						}
					}
				}
			}
		}
	}
</style>
