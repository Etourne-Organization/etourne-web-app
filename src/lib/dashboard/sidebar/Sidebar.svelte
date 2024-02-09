<script lang="ts">
	export let guildId: string;

	import { get } from 'svelte/store';

	import { activePage } from '../../../store/sidebarStore';
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
				<!-- 				class:text-white={get(activePage).value === 'DASHBOARD'}
					class:visited:text-white={get(activePage).value === 'DASHBOARD'} -->
				<a
					class="flex gap-5 items-center no-underline visited:text-dark-white visited:no-underline text-dark-white hover:text-white py-5 transition-all ease-in-out duration-200"
					href={`/dashboard/${guildId}`}
				>
					<i
						class="ri-dashboard-3-line text-2xl text-dark-white hover:text-white"
					>
					</i>
					Dashboard
				</a>
			</li>
			<li class="font-bold">
				<a
					class="flex gap-5 items-center no-underline visited:text-dark-white visited:no-underline text-dark-white hover:text-white py-5 transition-all ease-in-out duration-200"
					href={`/dashboard/${guildId}/all-events`}
				>
					<i
						class="ri-calendar-fill text-dark-white text-2xl hover:text-white"
					/>
					Events
				</a>
			</li>
			<li class="font-bold">
				<a
					class="flex gap-5 items-center no-underline visited:text-dark-white visited:no-underline text-dark-white hover:text-white py-5 transition-all ease-in-out duration-200"
					href={`/dashboard/${guildId}/create-event`}
				>
					<i
						class="ri-add-circle-fill text-2xl text-dark-white hover:text-white hover:cursor-pointer"
					/>
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
