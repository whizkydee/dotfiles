const config = {
  root: true,
  extends: ['eslint:recommended'],
  env: { es6: true, node: true, browser: true },
  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    indent: ['warn', 2],
    semi: ['warn', 'never'],
    'no-case-declarations': 'off',
    'comma-dangle': ['off', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}

module.exports = config
export default config
