export default {
	theme: {
		extend: {
			padding: {
				safe: "env(safe-area-inset-bottom)", // for iOS notch, Android etc.
			},
		},
	},
	plugins: [],
};
