import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['darkmode'],
	theme: {
		extend: {
			fontSize: {
				heading: '3.8rem', // text-6xl
				'sub-heading': '2.2rem', // text-3xl
				normal: '1.2rem', // text-xl
			},
			colors: {
				primary: '#3a9ce2',
				secondary: '#1b1f24',
				'light-secondary': '#313539',
				black: '#1e1e1e',
				white: '#f6f6f6',
				'dark-white': '#939393',
			},

			fontFamily: {
				'pt-sans': ['PT sans'],
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#3a9ce2',
					secondary: '#1b1f24',
					accent: '#ffffff',
					neutral: '#ffffff',
					'base-100': '#313539',
					info: '#ffffff',
					success: '#00ffff',
					warning: '#ffffff',
					error: '#ffffff',
				},
			},
		],
	},
	plugins: [
		require('daisyui'),
		skeleton({
			themes: {
				// Register each theme within this array:
				preset: ['skeleton'],
			},
		}),
	],
};
