module.exports = {
	root: true,
	env: {
		node: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended'
	],
	plugins: [
		'license',
		'prettier',
		'react'
	],
	settings: {
		react: {
			version: 'detect' // Визначити версію React автоматично
		}
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2018
	},
	rules: {
		'license/license': [2, {
			'path': 'LICENSE',
			'validLicenses': ['ISC']
		}],
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				tabWidth: 2,
				singleQuote: true,
				trailingComma: 'all',
				bracketSpacing: true
			}
		]
	},
	overrides: [
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				createDefaultProgram: true,
				project: './tsconfig.json'
			},
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'prettier/@typescript-eslint',
				'plugin:prettier/recommended'
			],
			plugins: ['@typescript-eslint'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'prettier/prettier': 'off',
				'no-console': 'warn'
			}
		}
	]
};
