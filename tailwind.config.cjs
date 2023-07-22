/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#402A17',
				secondary: '#66532E',
				accent: '#F2C777'
			}
		},
	},
	plugins: [],
}
