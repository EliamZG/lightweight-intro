/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			'sm' : '640px',
			'md' : '992px',
			'lg' : '1200px'
		},
		extend: {
			fontFamily: {
				'primary': ['Roboto']
			},
			colors: {
				primary: '#402A17',
				secondary: '#A67841',
				accent: '#e8aa38',
				base_dark: '#111'
			}
		},
	},
	plugins: [],
}
