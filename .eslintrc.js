module.exports = {
	//----------------------------------------------------------
	// Basic linting configuration for js config files
	//----------------------------------------------------------
	extends: ['eslint:recommended'],
	env: {
		es2021: true,
		node: true,
	},
	rules: {
		// prettier
		'prettier/prettier': 0, // disable that monster

		//----------------------------------------------------------
		// Semantics
		//----------------------------------------------------------
		'handle-callback-err': 0,
		'no-console': 1,
		radix: [2, 'as-needed'],
		'no-mixed-operators': 2,
		eqeqeq: 2,
		'no-unused-vars': [
			1,
			{
				args: 'after-used',
			},
		],
		'no-shadow': 1,
		'no-use-before-define': 2,
		'require-await': 2,
		'no-return-await': 2,
		'default-param-last': 2,

		//----------------------------------------------------------
		// Style
		//----------------------------------------------------------
		'array-bracket-spacing': [2, 'never'],
		'arrow-parens': [2, 'always'],
		'comma-dangle': [2, 'always-multiline'],
		curly: [2, 'multi-or-nest'],
		'eol-last': [2, 'always'],
		'key-spacing': [
			2,
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		'linebreak-style': [2, 'unix'],
		'max-len': [
			2,
			{
				code: 130,
				ignoreComments: true,
			},
		],
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-multi-spaces': 2,
		'no-multiple-empty-lines': [2, { max: 1 }],
		'semi-spacing': [
			2,
			{
				before: false,
				after: true,
			},
		],
		'semi-style': [2, 'last'],
		'space-in-parens': [2, 'never'],
		'padded-blocks': [2, 'never'],
		'object-property-newline': 2,
		'object-curly-newline': [
			2,
			{
				ObjectExpression: {
					multiline: true,
					minProperties: 2,
					consistent: true,
				},
				ObjectPattern: {
					multiline: true,
					minProperties: 3,
					consistent: true,
				},
				ImportDeclaration: {
					multiline: true,
					minProperties: 3,
					consistent: true,
				},
				ExportDeclaration: {
					multiline: true,
					minProperties: 2,
					consistent: true,
				},
			},
		],
		'import/first': 0,

		'no-empty-function': 1,
		'brace-style': [2, 'stroustrup'],
		'comma-spacing': 'off',
		'func-call-spacing': 2,
		'keyword-spacing': 2,
		'object-curly-spacing': [2, 'always'],
		semi: [2, 'always'],
		quotes: [2, 'single'],
		'space-before-function-paren': [
			2,
			{
				asyncArrow: 'always',
				named: 'never',
				anonymous: 'never',
			},
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
			},
		],
	},
	overrides: [
		{
			//----------------------------------------------------------
			// Linting TypeScript
			//----------------------------------------------------------
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: ['./tsconfig.json'],
			},
			settings: {
				react: {
					version: 'detect',
				},
			},
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
				// 'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:react/recommended',
			],
			plugins: ['eslint-comments'],
			rules: {
				// prettier
				'prettier/prettier': 0, // disable that monster

				//----------------------------------------------------------
				// Semantics
				//----------------------------------------------------------
				'handle-callback-err': 0,
				'no-console': 1,
				radix: [2, 'as-needed'],
				'no-mixed-operators': 2,
				eqeqeq: 2,

				// typescript-eslint
				// '@typescript-eslint/no-unsafe-assignment': 0,
				// '@typescript-eslint/no-unsafe-call': 0,

				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					1,
					{
						args: 'after-used',
					},
				],

				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': 1,

				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': 2,

				'require-await': 'off',
				'@typescript-eslint/require-await': 2,

				'no-return-await': 'off',
				'@typescript-eslint/return-await': 2,

				'default-param-last': 'off',
				'@typescript-eslint/default-param-last': 2,

				'@typescript-eslint/consistent-indexed-object-style': 2,
				'@typescript-eslint/consistent-type-imports': 2,
				'@typescript-eslint/no-base-to-string': 2,
				'@typescript-eslint/prefer-nullish-coalescing': 2,
				'@typescript-eslint/prefer-optional-chain': 2,

				//----------------------------------------------------------
				// Style
				//----------------------------------------------------------
				// typescript-eslint
				'no-empty-function': 0,
				'@typescript-eslint/no-empty-function': 1,

				'brace-style': 'off',
				'@typescript-eslint/brace-style': [2, 'stroustrup'],

				'comma-spacing': 'off',

				'func-call-spacing': 'off',
				'@typescript-eslint/func-call-spacing': 2,

				'keyword-spacing': 'off',
				'@typescript-eslint/keyword-spacing': 2,

				'object-curly-spacing': 'off',
				'@typescript-eslint/object-curly-spacing': [2, 'always'],

				semi: 'off',
				'@typescript-eslint/semi': [2, 'always'],

				quotes: 'off',
				'@typescript-eslint/quotes': [2, 'single'],

				'space-before-function-paren': 'off',
				'@typescript-eslint/space-before-function-paren': [
					2,
					{
						asyncArrow: 'always',
						named: 'never',
						anonymous: 'never',
					},
				],

				indent: 'off',
				'@typescript-eslint/indent': [
					'error',
					'tab',
					{
						SwitchCase: 1,
						ArrayExpression: 1,
						ObjectExpression: 1,
						ImportDeclaration: 1,
					},
				],

				'@typescript-eslint/member-delimiter-style': 2,
				'@typescript-eslint/triple-slash-reference': 0,
				'@typescript-eslint/explicit-module-boundary-types': 0,
				'@typescript-eslint/method-signature-style': 2,
				'@typescript-eslint/type-annotation-spacing': [
					2,
					{
						before: false,
						after: true,
						overrides: {
							arrow: {
								before: true,
								after: true,
							},
						},
					},
				],

				//----------------------------------------------------------
				// React
				//----------------------------------------------------------

				//----------------------------------------------------------
				// Semantics
				//----------------------------------------------------------
				'react/prop-types': 0,
				'react/display-name': 1,
				'react/jsx-key': 2,
				'react/jsx-pascal-case': [2, { allowAllCaps: true }],

				//----------------------------------------------------------
				// Style
				//----------------------------------------------------------
				'jsx-quotes': [2, 'prefer-single'],
				'react/jsx-closing-bracket-location': [
					2,
					{
						selfClosing: 'after-props',
						nonEmpty: 'tag-aligned',
					},
				],
				'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
				'react/jsx-one-expression-per-line': 2,
				'react/jsx-indent': [
					2,
					'tab',
					{
						indentLogicalExpressions: true,
						checkAttributes: true,
					},
				],
				'react/jsx-indent-props': [2, 'tab'],

				'react/jsx-max-props-per-line': [
					2,
					{
						maximum: 1,
						when: 'multiline',
					},
				],

				'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
				'react/jsx-wrap-multilines': [
					2,
					{
						declaration: 'parens-new-line',
						assignment: 'parens-new-line',
						return: 'parens-new-line',
						arrow: 'parens-new-line',
						condition: 'parens-new-line',
						logical: 'parens-new-line',
						prop: 'parens-new-line',
					},
				],
			},
		},
	],
};
