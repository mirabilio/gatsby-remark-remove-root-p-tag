module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: [
    'prettier',
  ],
  extends: [
    'eslint:recommended', 
    'google',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaVersion: 2018
  } 
};
