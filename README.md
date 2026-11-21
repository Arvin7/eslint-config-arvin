# Arvin's ESLint Rules

A shareable ESLint config with my common rules, for use across projects.

![Heh](https://media.giphy.com/media/M3o3fL9nnxG4o/giphy.gif)

## Usage

1. Create a ESLint config file in your project root directory:
   `eslint.config.mjs`

2. Copy/paste:

```js
import arvinConfig from "eslint-config-arvin";

export default [
  ...arvinConfig.configs.recommended,
  ...arvinConfig.configs.react,
  ...arvinConfig.configs.vitest,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
```

The last block tells typescript-eslint where your project's `tsconfig.json` lives. Without it, type-aware rules
fall back to the directory ESLint was started from, so running ESLint from a subfolder (as some editors and
monorepo tools do) fails with a parsing error.

## All Supported Configurations

| Config                    | Import                            |
| ------------------------- | --------------------------------- |
| JavaScript and TypeScript | `arvinConfig.configs.recommended` |
| React                     | `arvinConfig.configs.react`       |
| Next.js                   | `arvinConfig.configs.nextJs`      |
| Vite                      | `arvinConfig.configs.vite`        |
| Vitest                    | `arvinConfig.configs.vitest`      |

## Requirements

- ESLint `^10.0.0`
- TypeScript `>=6.0 <6.1` (required by `@vitest/eslint-plugin` and `typescript-eslint`)

## Migrating from v3 (ESLint 9) to v4 (ESLint 10)

`eslint-plugin-import` and `eslint-plugin-react` do not support ESLint 10, so they were replaced. Update any `eslint-disable` comments that reference the old rule names:

| v3 rule                         | v4 rule                                |
| ------------------------------- | -------------------------------------- |
| `import/*`                      | `import-x/*`                           |
| `react/jsx-curly-brace-presence`| `@stylistic/jsx-curly-brace-presence`  |
| `react/jsx-boolean-value`       | `@stylistic/jsx-shorthand-boolean`     |
| `react/self-closing-comp`       | `@stylistic/jsx-self-closing-comp`     |
| `react/*` (recommended)         | `@eslint-react/*` (recommended-typescript) |

Other changes:

- `import/no-unused-modules` was removed; it cannot run under ESLint 10.
- `eslint-plugin-react-hooks` v7 enables the React Compiler rules (`purity`, `refs`, `set-state-in-effect`, …) in its recommended preset.
- `settings.react.version` is no longer needed.
- `build/` and `dist/` folders are now actually ignored (the old `ignores` entry had no effect).
- Type-aware rules no longer run on plain `.js`/`.mjs`/`.cjs`/`.jsx` files, which usually aren't in `tsconfig.json` and failed with a parsing error.
- Unused variables are reported by `unused-imports/no-unused-vars` instead of `@typescript-eslint/no-unused-vars`. Names starting with `_` are allowed.
- `import-x/no-unresolved`, `named`, `namespace`, `default` and `no-named-as-default-member` are off for TypeScript files, since TypeScript already checks them.
- Config files (`*.config.*`), `.cjs` files and `scripts/` get Node globals, and `require()` is allowed in `.cjs` files.
- The Vite config allows constant exports next to components (`allowConstantExport`).
- The Vitest config also matches `.js`/`.jsx` test files.
- Type declarations are included, so `eslint.config.ts` works.
- `tsconfigRootDir` is no longer set by this package (it pointed at the package's own folder in `node_modules`). Set it in your own config as shown in [Usage](#usage).
