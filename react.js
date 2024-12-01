import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/jsx-boolean-value": ["error", "never"],
      "react/self-closing-comp": ["error"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
