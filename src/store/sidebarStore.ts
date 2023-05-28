import { persisted } from 'svelte-local-storage-store';

export const activePage = persisted('activePage', {
	value: 'DASHBOARD',
});
