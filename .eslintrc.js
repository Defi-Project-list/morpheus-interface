module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['next', 'plugin:react/jsx-runtime', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'arrow-body-style': 'off',
    'react/button-has-type': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'warn',
  },
};
