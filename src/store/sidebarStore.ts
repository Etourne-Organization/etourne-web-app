import { persisted } from 'svelte-persisted-store';

export const activePage = persisted('activePage', {
	value: 'DASHBOARD',
});
