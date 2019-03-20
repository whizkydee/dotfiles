const config = require('./.eslintrc.js')

module.exports = {
  root: true,
  plugins: ['react', 'prettier'],
  env: {
    ...config.env,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  parserOptions: {
    ...config.parserOptions,
    ecmaFeatures: { jsx: true },
  },

  rules: { ...config.rules },
}
