import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents() {
			// implement node event listeners here
		},
		baseUrl: 'http://localhost:3000',
	},

	env: {
		mode: 'development',
	},
	'component': {
		'devServer': {
			'framework': 'react',
			'bundler': 'webpack'
		}
	}
});
