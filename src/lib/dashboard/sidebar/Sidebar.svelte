<script lang="ts">
	export let pathname: string;
	export let guildId: string;

	import { css } from '@emotion/css';
	import { get } from 'svelte/store';

	import DashboardIcon from './icons/DashboardIcon.svelte';
	import CalendarIcon from './icons/CalendarIcon.svelte';
	import AddIcon from './icons/AddIcon.svelte';
	import SettingsIcon from './icons/SettingsIcon.svelte';
	import { activePage } from '../../../store/sidebarStore';

	let whichLinkHover: string = '';
	let color: string = 'var(--dark-white-color)';

	// TODO: FIX THIS LATER
	$: aStyle = css`
		color: ${color};

		&:visited {
			color: ${color};
		}
	`;
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
					on:mousedown={() => {
						whichLinkHover = 'DASHBOARD';
					}}
					on:mouseleave={() => {
						whichLinkHover = '';
					}}
					on:click={() => {
						activePage.set({ value: 'DASHBOARD' });
					}}
					style="color: {get(activePage).value === 'DASHBOARD'
						? 'var(--white-color)'
						: 'var(--dark-white-color)'}"
				>
					<DashboardIcon
						color={whichLinkHover === 'EVENTS'
							? 'var(--white-color)'
							: pathname.split('/').length == 3
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
					}}
				>
					<CalendarIcon
						color={whichLinkHover === 'EVENTS'
							? 'var(--white-color)'
							: pathname.includes('/allEvents')
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
					}}
				>
					<AddIcon
						color={whichLinkHover === 'CREATE_EVENT'
							? 'var(--white-color)'
							: pathname.includes('/createEvent')
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
					color: var(--dark-white-color);
					font-weight: bold;

					a {
						display: flex;
						gap: 20px;
						align-items: center;

						text-decoration: none;
						padding: 10px 5 10px 0;
						color: var(--dark-white-color);

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
