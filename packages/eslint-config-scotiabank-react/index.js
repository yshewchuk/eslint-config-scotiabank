module.exports = {
  extends: [
    '@scotia/eslint-config-scotiabank-base',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',

    // Scotiabank Specific Rules
    './rules/react',
    './rules/react-a11y'
  ].map(require.resolve)
};
