<script lang="ts">
	export let eventId: number;
	export let isDialogOpen: boolean;

	import { fade } from 'svelte/transition';
	import { invalidateAll } from '$app/navigation';
	import { enhance } from '$app/forms';

	import { Dialog, Separator } from 'bits-ui';
	import toast, { Toaster } from 'svelte-french-toast';

	import { deleteEvent } from '$lib/supabase/supabaseFunctions/events';
</script>

<Toaster />
<Dialog.Root bind:open={isDialogOpen}>
	<Dialog.Trigger />

	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="fixed inset-0 z-50 backdrop-blur-sm"
		/>
		<Dialog.Content
			class="fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded-md border p-5 outline-none bg-secondary border-none sm:max-w-[490px] md:w-full"
			transition={fade}
			transitionConfig={{ duration: 150 }}
		>
			<Dialog.Title
				class="flex w-full items-center justify-center text-lg font-semibold tracking-tight text-white"
			>
				Are you sure you want to delete this event?
			</Dialog.Title>
			<Separator.Root class="-mx-5 mb-6 mt-5 block h-px bg-gray-400" />
			<div class="flex justify-center gap-3">
				<form
					action="?/deleteEvent"
					use:enhance={(input) => {
						const toastId = toast.loading('Working on it...');

						input.formData.append('eventId', eventId.toString());

						return async ({ result }) => {
							// `result` is an `ActionResult` object
							if (result.type === 'success') {
								toast.success('Event deleted successfully!', {
									id: toastId,
									duration: 5000,
								});
							} else {
								toast.error('Event deletion failed!', {
									id: toastId,
									duration: 5000,
								});
							}
						};
					}}
					method="POST"
				>
					<!-- on:click={onDeleteButtonClick} -->
					<Dialog.Close>
						<button class="btn border-red-600 bg-red-600 rounded-md">
							Delete
						</button>
					</Dialog.Close>
				</form>
				<Dialog.Close>
					<button class="btn btn-neutral rounded-md">Cancel</button>
				</Dialog.Close>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
