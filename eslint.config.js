import stylistic from '@stylistic/eslint-plugin'
import tseslint from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: parserTs,
    },
    plugins: {
      '@stylistic': stylistic,
      '@typescript-eslint': tseslint,
    },
    rules: {
      'eol-last': ['error', 'always'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'class' },
        { blankLine: 'always', prev: 'class', next: '*' },
        { blankLine: 'always', prev: 'block-like', next: 'block-like' },
        { blankLine: 'any', prev: 'block-like', next: 'block-like' },
      ],
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
      'no-multiple-empty-lines': [
        'error', 
        { max: 1, maxEOF: 0, maxBOF: 0 }
      ],
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
      '@stylistic/type-generic-spacing': ['error'],
      '@typescript-eslint/explicit-function-return-type': ['error', {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
      }],
    },
  },
]
