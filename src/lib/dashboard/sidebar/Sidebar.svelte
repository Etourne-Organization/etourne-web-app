<script lang="ts">
	export let guildId: string;

	import { get } from 'svelte/store';

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
		<ul class="flex flex-col list-none">
			<li class="font-bold">
				<a
					class="flex gap-5 items-center no-underline visited:text-dark-white visited:no-underline text-dark-white hover:text-white py-5 transition-all ease-in-out duration-200"
					href={`/dashboard/${guildId}`}
					on:click={() => {
						activePage.set({ value: 'DASHBOARD' });
					}}
					class:text-white={get(activePage).value === 'DASHBOARD'}
					class:visited:text-white={get(activePage).value === 'DASHBOARD'}
				>
					<i class="ri-dashboard-3-line text-2xl" />
					Dashboard
				</a>
			</li>
			<li class="font-bold">
				<a
					class="flex gap-5 items-center no-underline visited:text-dark-white visited:no-underline text-dark-white hover:text-white py-5 transition-all ease-in-out duration-200"
					href={`/dashboard/${guildId}/all-events`}
					on:click={() => {
						activePage.set({ value: 'ALL_EVENTS' });
					}}
					class:text-white={get(activePage).value === 'ALL_EVENTS'}
					class:visited:text-white={get(activePage).value === 'ALL_EVENTS'}
				>
					<i class="ri-calendar-fill text-white text-2xl" />
					Events
				</a>
			</li>
			<li class="font-bold">
				<a
					class="flex gap-5 items-center no-underline visited:text-dark-white visited:no-underline text-dark-white hover:text-white py-5 transition-all ease-in-out duration-200"
					href={`/dashboard/${guildId}/create-event`}
					on:click={() => {
						activePage.set({ value: 'CREATE_EVENT' });
					}}
					class:text-white={get(activePage).value === 'CREATE_EVENT'}
					class:visited:text-white={get(activePage).value ===
						'CREATE_EVENT'}
				>
					<i class="ri-add-circle-fill text-white text-2xl" />
					Create Event
				</a>
			</li>
		</ul>
	</div>
	<div class="flex gap-10 items-center mb-12 hover:cursor-not-allowed">
		<i class="ri-settings-2-fill text-2xl"></i>
		<p class="text-dark-white font-bold">Settings</p>
	</div>
</div>
