import eslint from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importPlugin from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tsEslint from "typescript-eslint";

export const recommendedConfig = [
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...tsEslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "prefer-template": "error",
      "prefer-destructuring": "error",
      "object-shorthand": "error",

      "unused-imports/no-unused-imports": "error",
      "import-x/newline-after-import": "error",
      "import-x/order": [
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

      "@typescript-eslint/method-signature-style": ["error", "property"],
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
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },

    ignores: ["build", "dist"],
  },
];
