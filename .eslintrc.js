module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'plugins': [
    'prettier',
  ],
  'extends': [
    'eslint:recommended', 
    'plugin:prettier/recommended',
  ],
  'rules': {
    'prettier/prettier': 'error',
  },
  // 'globals': {
  //   'Atomics': 'readonly',
  //   'SharedArrayBuffer': 'readonly',
  // },
  'parserOptions': {
    'ecmaVersion': 2017,
  }
};
