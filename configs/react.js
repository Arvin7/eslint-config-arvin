import eslintReact from "@eslint-react/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const reactHooksRecommendedRules = reactHooksPlugin.configs.recommended.rules;

// @eslint-react ships its own copies of several react-hooks rules.
// Keep the official react-hooks versions and turn off the duplicates.
const duplicateHooksRules = Object.fromEntries(
  Object.keys(reactHooksRecommendedRules)
    .map((rule) => `@eslint-react/${rule.replace(/^react-hooks\//, "")}`)
    .filter((rule) => rule in eslintReact.configs["recommended-typescript"].rules)
    .map((rule) => [rule, "off"]),
);

export const reactConfig = [
  eslintReact.configs["recommended-typescript"],
  {
    name: "arvin/react",
    plugins: {
      "react-hooks": reactHooksPlugin,
      "@stylistic": stylistic,
    },
    rules: {
      ...duplicateHooksRules,
      ...reactHooksRecommendedRules,
      "@stylistic/jsx-curly-brace-presence": ["error", "never"],
      "@stylistic/jsx-shorthand-boolean": "error",
      "@stylistic/jsx-self-closing-comp": ["error"],
    },
  },
];
