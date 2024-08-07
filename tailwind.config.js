/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				"2xl": "1496px",
			},
			height: {
				screen: "100svh",
				"screen+": "100lvh",
				"screen-dynamic": "100dvh",
				"screen/2": "50vh",
			},
			minHeight: {
				screen: "100svh",
				"screen+": "100lvh",
				"screen-dynamic": "100dvh",
				"screen-20": "120vh",
			},
			backgroundSize: {
				"200%": "200%",
			},
			keyframes: {
				shift: {
					"0%": { backgroundPosition: "0% center" },
					"100%": { backgroundPosition: "-200% center" },
				},
			},
			animation: {
				shift: "shift 3s linear infinite",
			},
			transitionTimingFunction: {
				bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
				bounce2: "cubic-bezier(.47,1.64,.41,.8)",
			},
			padding: {
				108: "432px",
				120: "480px",
				128: "512px",
				132: "528px",
				144: "576px",
				156: "624px",
				168: "672px",
				180: "720px",
				192: "768px",
				204: "816px",
			},
			margin: {
				auto: "auto",
			},
			colors: {
				blue: {
					1000: "#101a3b",
				},
			},
			spacing: {
				screen: "100vh",
				108: "432px",
				120: "480px",
				128: "512px",
				132: "528px",
				144: "576px",
				156: "624px",
				168: "672px",
				180: "720px",
				192: "768px",
				204: "816px",
			},
			translate: {
				"screen-y": "100vh",
			},
			maxWidth: {
				prose: "55ch",
			},
			lineHeight: {
				11: "2.75rem",
				12: "3rem",
			},
			fontFamily: {
				heading: ["var(--heading-font)"],
			},
			fontSize: {
				"10xl": "10rem",
			},
		},
	},
	plugins: [],
};
