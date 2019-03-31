module.exports = {
  root: true,
  plugins: ['react', 'prettier', 'react-hooks'],
  env: { es6: true, node: true, browser: true, commonjs: true },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: { jsx: true },
  },

  rules: {
    indent: ['warn', 2],
    semi: ['warn', 'never'],
    'no-case-declarations': 'off',
    'comma-dangle': ['off', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
