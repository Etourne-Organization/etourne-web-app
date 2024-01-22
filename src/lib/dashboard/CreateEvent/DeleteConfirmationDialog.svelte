<script lang="ts">
	export let eventId: number;
	export let isDialogOpen: boolean;

	console.log(isDialogOpen);

	import { fade } from 'svelte/transition';

	import { Dialog, Separator, Label, DropdownMenu, Button } from 'bits-ui';
</script>

<Dialog.Root bind:open={isDialogOpen}>
	<Dialog.Trigger />

	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="fixed inset-0 z-50 backdrop-blur-sm"
		/>
		<Dialog.Content
			class="fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded-lg border p-5 outline-none bg-secondary border-none sm:max-w-[490px] md:w-full"
		>
			<Dialog.Title
				class="flex w-full items-center justify-center text-lg font-semibold tracking-tight text-white"
			>
				Are you sure you want to delete this event?
			</Dialog.Title>
			<Separator.Root class="-mx-5 mb-6 mt-5 block h-px bg-gray-400" />
			<div class="flex gap-3">
				<Dialog.Close>
					<button class="btn btn-primary">Delete</button>
				</Dialog.Close>
				<Dialog.Close>
					<button class="btn btn-neutral">Delete</button>
				</Dialog.Close>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
