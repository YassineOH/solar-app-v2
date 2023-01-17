module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: '**/tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'react/require-default-props': 'off',
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [''],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
      },
    ],
    'react/jsx-no-constructed-context-values': 'off',
  },
};
