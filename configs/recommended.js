import eslint from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importPlugin from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tsEslint from "typescript-eslint";

export const recommendedConfig = [
  {
    name: "arvin/ignores",
    ignores: ["**/build/", "**/dist/"],
  },
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...tsEslint.configs.recommendedTypeChecked,
  {
    name: "arvin/recommended",
    files: ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"],
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

      // unused-imports/no-unused-vars wraps @typescript-eslint/no-unused-vars
      // and leaves unused imports to unused-imports/no-unused-imports, so each
      // problem is reported once.
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

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
  },
  {
    // TypeScript already checks these, and they are slow on large projects.
    // https://typescript-eslint.io/troubleshooting/typed-linting/performance#eslint-plugin-import
    name: "arvin/typescript-imports",
    files: ["**/*.{ts,mts,cts,tsx}"],
    rules: {
      "import-x/no-unresolved": "off",
      "import-x/named": "off",
      "import-x/namespace": "off",
      "import-x/default": "off",
      "import-x/no-named-as-default-member": "off",
    },
  },
  {
    // Config files and scripts run in Node, not the browser.
    name: "arvin/node-files",
    files: [
      "**/*.config.{js,mjs,cjs,ts,mts,cts}",
      "**/*.cjs",
      "**/scripts/**/*.{js,mjs,cjs,ts,mts,cts}",
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    // require() is how CommonJS files import.
    name: "arvin/commonjs",
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    // Plain JS files are usually not part of the tsconfig, so the type-aware
    // rules can't run on them.
    ...tsEslint.configs.disableTypeChecked,
    name: "arvin/javascript",
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
];
