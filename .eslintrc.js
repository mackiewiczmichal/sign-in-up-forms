module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
  },
};
