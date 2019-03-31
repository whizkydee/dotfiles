module.exports = {
  root: true,
  env: { es6: true, node: true, browser: true },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    semi: ['warn', 'never'],
    'no-case-declarations': 'off',
    'comma-dangle': ['off', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
