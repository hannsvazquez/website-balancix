/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#5228d9',
				accent: '#EBEBEB',
				background: '#18181B',
				secondary: '#b6b1ff',
				muted: '#f7fafc',
				'base-100': '#f7fafc',
				info: '#a0aec0',
				success: '#16a34a',
				warning: '#f59e0b',
				error: '#f43f5e',
			},
		},
	},
	plugins: [],
}
