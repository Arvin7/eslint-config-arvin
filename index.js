module.exports = {
  extends: ["eslint:recommended", "plugin:import/recommended"],

  plugins: ["import", "unused-imports"],

  rules: {
    "prefer-template": "error",
    "prefer-destructuring": "error",
    "object-shorthand": "error",

    "unused-imports/no-unused-imports": "error",
    "import/no-unused-modules": "error",
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
      },
    ],

    "react/jsx-curly-brace-presence": ["error", "never"],

    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
    ],
  },
};
