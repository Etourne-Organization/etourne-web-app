import { getSession } from '$lib/supabase/auth';

export const load = async ({ params }) => {
	// let session: any;
	// getSession().subscribe((s) => {
	// 	console.log(s);
	// 	session = s;
	// });

	return {
		post: {
			session: 'session',
		},
	};
};
