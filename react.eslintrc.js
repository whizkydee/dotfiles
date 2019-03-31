const config = require('./.eslintrc.js')

module.exports = {
  root: true,
  plugins: ['react', 'prettier', 'react-hooks'],
  env: {
    ...config.env,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  parserOptions: {
    ...config.parserOptions,
    ecmaFeatures: { jsx: true },
  },

  rules: {
    ...config.rules,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
