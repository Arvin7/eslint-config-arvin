module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],

  rules: {
    "react/jsx-curly-brace-presence": ["error", "never"],
  },
};
