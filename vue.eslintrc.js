const config = require('./.eslintrc.js')

module.exports = {
  root: true,
  env: {
    ...config.env,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  parserOptions: { ...config.parserOptions },
  rules: { ...config.rules },
}
