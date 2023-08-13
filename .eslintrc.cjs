module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': 'off', // Let Prettier handle this
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
    '@typescript-eslint/semi': ['error', 'always'],
    'prettier/prettier': ['error'],
    'no-trailing-spaces': 'error',
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/comma-dangle': 'off', // Let Prettier handle this
      },
    },
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/comma-dangle': 'off', // Let Prettier handle this
      },
    },
  ],
};
