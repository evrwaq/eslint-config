import path from 'path';
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['eslint.config.mjs']
  },
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        project: path.resolve(process.cwd(), './tsconfig.json'),
      }
    }
  },
  {
    rules: {
      'indent': ['error', 2],
      'no-trailing-spaces': ['error'],
      'eol-last': ['error', 'always'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      'space-before-blocks': ['error', 'always'],
      'import/no-default-export': 'error',
      'import/prefer-default-export': 'off',
      "no-restricted-syntax": [
        "error",
        {
          "selector": "ImportNamespaceSpecifier",
          "message": "Namespace import is not allowed. Use named imports instead."
        }
      ],
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-module-boundary-types': ['error'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-exports': 'error'
    },
  },
]
