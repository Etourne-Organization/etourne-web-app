<script lang="ts">
	import DashboardIcon from './icons/DashboardIcon.svelte';
	import CalendarIcon from './icons/CalendarIcon.svelte';
	import AddIcon from './icons/AddIcon.svelte';
	import SettingsIcon from './icons/SettingsIcon.svelte';

	let whichLinkHover: string = '';
</script>

<div class="parent">
	<div class="top">
		<div class="logo">
			<img src="/logo/et-logo.svg" alt="" />
		</div>
		<ul class="links">
			<li>
				<a
					href="/dashboard/1"
					on:mouseenter={() => {
						whichLinkHover = 'DASHBOARD';
					}}
					on:mouseleave={() => {
						whichLinkHover = '';
					}}
				>
					<DashboardIcon
						color={whichLinkHover === 'DASHBOARD'
							? 'var(--white-color)'
							: 'var(--dark-white-color)'}
					/>
					Dashboard
				</a>
			</li>
			<li>
				<a
					href="/dashboard/1"
					on:mouseenter={() => {
						whichLinkHover = 'EVENTS';
					}}
					on:mouseleave={() => {
						whichLinkHover = '';
					}}
				>
					<CalendarIcon
						color={whichLinkHover === 'EVENTS'
							? 'var(--white-color)'
							: 'var(--dark-white-color)'}
					/>
					Events</a
				>
			</li>
			<li>
				<a
					href="/dashboard/1"
					on:mouseenter={() => {
						whichLinkHover = 'ADD_EVENT';
					}}
					on:mouseleave={() => {
						whichLinkHover = '';
					}}
				>
					<AddIcon
						color={whichLinkHover === 'ADD_EVENT'
							? 'var(--white-color)'
							: 'var(--dark-white-color)'}
					/>
					Add Event</a
				>
			</li>
		</ul>
	</div>
	<div class="bottom">
		<SettingsIcon />
		<p>Settings</p>
	</div>
</div>

<style lang="scss">
	.parent {
		border-right: 0.5px solid var(--dark-white-color);
		height: 100%;
		padding: 0 60px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.top {
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
					color: var(--dark-white-color);
					font-weight: bold;

					a {
						display: flex;
						gap: 20px;
						align-items: center;

						text-decoration: none;
						padding: 10px 5 10px 0;

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

		.bottom {
			display: flex;
			gap: 40px;
			align-items: center;

			margin-bottom: 50px;

			p {
				color: var(--dark-white-color);
				font-weight: bold;
			}

			&:hover {
				cursor: not-allowed;
			}
		}
	}
</style>
