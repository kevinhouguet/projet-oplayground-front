/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		screens: {
			"sm": {"min": "200px", "max": "600px"}
		}
	},
	plugins: [require("daisyui")],
};
