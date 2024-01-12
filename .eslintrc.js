module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true
	},
	'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}',
				'**/src/**/*.test.{ts, tsx}',
			],
			rules: {
				'i18next/no-literal-string': 'off',
			},
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'react',
		'i18next',
		'typescript-enum',
		'react-hooks',
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'object-curly-spacing': ['error', 'always'],
		'no-unsafe-optional-chainin': 'off',
		'import/no-resolved': 'off',
		'react/no-deprecated': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'off',
		'no-enum': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'i18next/no-literal-string': ['error', { 'markupOnly': true, ignoreAttribute: ['to', 'theme', 'data-testid'] }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/display-name': 'off',
		'react/prop-types': 'off',
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
};
