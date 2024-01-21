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

<div
	class="flex flex-col justify-between border-r-[0.5px] border-r-dark-white border-solid h-full px-[60px]"
>
	<div class="flex flex-col gap-14">
		<div class="mt-[60px]">
			<img src="/logo/et-logo.svg" alt="" />
		</div>
		<ul class="flex flex-col gap-12 list-none">
			<li class="font-bold">
				<a
					class="flex gap-5 items-center no-underline visited:text-dark-white visited:no-underline text-dark-white hover:text-white"
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
					class:text-white={temp === 'DASHBOARD'}
					class:visited:text-white={temp === 'DASHBOARD'}
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
			<li class="font-bold">
				<a
					class="flex gap-5 items-center no-underline visited:text-dark-white visited:no-underline text-dark-white hover:text-white"
					href={`/dashboard/${guildId}/all-events`}
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
					class:text-white={temp === 'ALL_EVENTS'}
					class:visited:text-white={temp === 'ALL_EVENTS'}
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
			<li class="font-bold">
				<a
					class="flex gap-5 items-center no-underline visited:text-dark-white visited:no-underline text-dark-white hover:text-white"
					href={`/dashboard/${guildId}/create-event`}
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
					class:text-white={temp === 'CREATE_EVENT'}
					class:visited:text-white={temp === 'CREATE_EVENT'}
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
	<div class="flex gap-10 items-center mb-12">
		<SettingsIcon />
		<p class="text-dark-white font-bold hover:cursor-not-allowed">Settings</p>
	</div>
</div>
