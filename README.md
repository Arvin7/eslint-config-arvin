# Arvin's ESLint Rules

One plugin to share my common ESLint rules across different projects.

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
];
```

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
