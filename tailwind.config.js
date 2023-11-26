/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
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
	plugins: [
		// plugin(function ({ matchUtilities, theme }) {
		// 	matchUtilities(
		// 		{
		// 			'translate-z': (value) => ({
		// 				'--tw-translate-z': value,
		// 				transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
		// 			}), // this is actual CSS
		// 		},
		// 		{ values: theme('translate'), supportsNegativeValues: true },
		// 	);
		// }),
	],
};
