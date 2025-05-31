import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...tseslint.configs.recommendedTypeChecked,
  {
    name: "arvin",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      "unused-imports": unusedImports,
    },
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

      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },
      ],
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
    },

    settings: {
      "import/resolver": {
        typescript: {},
      },
    },

    ignores: ["build", "dist"],
  },
];
