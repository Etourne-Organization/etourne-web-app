<script lang="ts">
	export let guildId: string;

	import { get } from 'svelte/store';

	import DashboardIcon from './icons/DashboardIcon.svelte';
	import CalendarIcon from './icons/CalendarIcon.svelte';
	import AddIcon from './icons/AddIcon.svelte';
	import SettingsIcon from './icons/SettingsIcon.svelte';
	import { activePage } from '../../../store/sidebarStore';

	let whichLinkHover: string = '';
	// ** THIS IS NEEDED to make the sidebar link go white when it is active
	let temp: string = get(activePage).value;
</script>

<div class="parent">
	<div class="top">
		<div class="logo">
			<img src="/logo/et-logo.svg" alt="" />
		</div>
		<ul class="links">
			<li>
				<a
					href={`/dashboard/${guildId}`}
					on:mouseenter={() => {
						whichLinkHover = 'DASHBOARD';
					}}
					on:mouseleave={() => {
						whichLinkHover = '';
					}}
					on:click={() => {
						activePage.set({ value: 'DASHBOARD' });

						temp = 'DASHBOARD';
					}}
					class:selected={temp === 'DASHBOARD'}
				>
					<DashboardIcon
						color={whichLinkHover === 'DASHBOARD'
							? 'var(--white-color)'
							: get(activePage).value === 'DASHBOARD'
							? 'var(--white-color)'
							: 'var(--dark-white-color)'}
					/>
					Dashboard
				</a>
			</li>
			<li>
				<a
					href={`/dashboard/${guildId}/allEvents`}
					on:mouseenter={() => {
						whichLinkHover = 'EVENTS';
					}}
					on:mouseleave={() => {
						whichLinkHover = '';
					}}
					on:click={() => {
						activePage.set({ value: 'ALL_EVENTS' });

						temp = get(activePage).value;
					}}
					class:selected={temp === 'ALL_EVENTS'}
				>
					<CalendarIcon
						color={whichLinkHover === 'EVENTS'
							? 'var(--white-color)'
							: get(activePage).value === 'ALL_EVENTS'
							? 'var(--white-color)'
							: 'var(--dark-white-color)'}
					/>
					Events</a
				>
			</li>
			<li>
				<a
					href={`/dashboard/${guildId}/createEvent`}
					on:mouseenter={() => {
						whichLinkHover = 'CREATE_EVENT';
					}}
					on:mouseleave={() => {
						whichLinkHover = '';
					}}
					on:click={() => {
						activePage.set({ value: 'CREATE_EVENT' });

						temp = get(activePage).value;
					}}
					class:selected={temp === 'CREATE_EVENT'}
				>
					<AddIcon
						color={whichLinkHover === 'CREATE_EVENT'
							? 'var(--white-color)'
							: get(activePage).value === 'CREATE_EVENT'
							? 'var(--white-color)'
							: 'var(--dark-white-color)'}
					/>
					Create Event</a
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
					font-weight: bold;

					.selected {
						&:link,
						&:visited {
							color: var(--white-color);
						}
					}

					a {
						display: flex;
						gap: 20px;
						align-items: center;

						text-decoration: none;
						padding: 10px 5 10px 0;

						&:visited,
						&:link {
							color: var(--dark-white-color);
						}

						&:visited {
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
