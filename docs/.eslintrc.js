module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  rules: {
    strict: 0,
    'react/destructuring-assignment': 0
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    document: true,
    window: true,
  },
};
