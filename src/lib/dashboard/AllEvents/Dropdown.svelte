<script lang="ts">
	export let eventId: number;

	import { DropdownMenu, Dialog, Separator } from 'bits-ui';
	import DeleteConfirmationDialog from './DeleteConfirmationDialog.svelte';

	let isDialogOpen: boolean = false;

	const onDeleteButtonClick = () => {
		isDialogOpen = true;
		console.log(isDialogOpen);
	};
</script>

<div>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger
			class="h-10 w-10 items-center justify-center rounded-md transition-transform hover:bg-light-secondary active:scale-98"
		>
			<i class="ri-more-2-fill text-white text-2xl"></i>
		</DropdownMenu.Trigger>

		<DropdownMenu.Content
			class="w-full max-w-[150px] rounded-md bg-black px-1 py-1.5 shadow-lg"
			align="end"
			sideOffset={3}
		>
			<DropdownMenu.Item
				class="h-10 flex items-center gap-2 rounded-md py-3 px-3 font-medium hover:cursor-pointer hover:bg-[#343434]"
			>
				<i class="ri-edit-2-fill" />
				Edit
			</DropdownMenu.Item>

			<DropdownMenu.Item
				class="h-10 flex items-center gap-2 rounded-md py-3 px-3 font-medium hover:cursor-pointer hover:bg-[#4d0f0f]"
				on:click={onDeleteButtonClick}
			>
				<i class="ri-delete-bin-fill" />
				Delete
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>

	<DeleteConfirmationDialog {eventId} bind:isDialogOpen />
</div>
