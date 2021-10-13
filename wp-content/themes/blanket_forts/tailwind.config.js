module.exports = {
	mode: 'jit',
	purge: {
		content: [
			'./src/**/*.php',
			'./template-parts/**/*.php',
			'./*.php',
			'./inc/**/*.php',
			'./inc/*.php',
			'./src/**/*.js',
      './views/*.twig',
      './views/**/*.twig',
      './svg/**/*.twig',
		],
	},
	darkMode: false, //you can set it to media(uses prefers-color-scheme) or class(better for toggling modes via a button)
	theme: {
		extend: {
			colors: {
				mustard: '#FFC940',
				navy: '#004A80',
				oxford: '#401B00',
				smoke: '#002540',
				'electric-blue': '#00528C',
				'dark-cerulean': '#004A80',
				'antique-white': '#F7E9D8',
			}
		},
	},
	variants: {},
	plugins: [],
}