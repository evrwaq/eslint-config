module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'double'],
    'semi': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': ['error']
  }
}
