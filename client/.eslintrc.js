const path = require('path');

module.exports = {
  extends: 'airbnb',
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'webpack.development.config.js')
      }
    },
  },
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
    'import/prefer-default-export': 'warn',
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': 'off',
    'arrow-body-style': ['off', 'as-needed', { requireReturnForObjectLiteral: true }],
    'no-confusing-arrow': 'warn',
    'no-return-assign': ['error', 'except-parens'],
    'jsx-a11y/no-autofocus': 'off',
    'no-confusing-arrow': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  env: {
    browser: true
  }
}