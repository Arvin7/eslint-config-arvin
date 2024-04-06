module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],

  rules: {
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-boolean-value": ["error", "never"],
    "react/self-closing-comp": ["error"],
  },
};
