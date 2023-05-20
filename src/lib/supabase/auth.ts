import { redirect } from '@sveltejs/kit';
import { writable } from 'svelte/store';

import { supabase } from './supabaseClient';

const userStore = writable();
const session = writable();

supabase.auth.getSession().then(({ data }) => {
	session.set(data.session);
	userStore.set(data.session?.user);
});

supabase.auth.onAuthStateChange((event, session) => {
	if (event == 'SIGNED_IN' && session) {
		userStore.set(session.user);
	} else if (event == 'SIGNED_OUT') {
		userStore.set(null);
	}
});

export const getUser = () => {
	return userStore;
};

export const getSession = () => {
	return session;
};

export const signIn = async () => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'discord',
		options: {
			scopes: 'guilds',
		},
	});

	return { data, error };
};

export const signOut = async () => {
	const { error } = await supabase.auth.signOut();

	return error;
};
