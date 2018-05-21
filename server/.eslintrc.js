module.exports = {
  extends: 'airbnb',
  plugins: [
    'import'
  ],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline'
      }
    ],
    'react/jsx-wrap-multilines': 'off',
    'global-require': 'warn',
    'import/no-dynamic-require': 'warn',
    'react/prop-types': 'warn',
    'no-console': 'off',
  },
  env: {
    node: true
  }
}