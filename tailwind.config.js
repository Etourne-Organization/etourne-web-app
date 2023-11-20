/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				heading: '3.8rem',
				'sub-heading': '2.2rem',
				normal: '1.2rem',
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
	plugins: [],
};
