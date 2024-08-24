import stylistic from '@stylistic/eslint-plugin'
import parserTs from '@typescript-eslint/parser'

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: parserTs,
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'none', requireLast: true },
          singleline: { delimiter: 'comma', requireLast: false },
        },
      ],
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/type-generic-spacing': ["error"],
    },
  },
]
