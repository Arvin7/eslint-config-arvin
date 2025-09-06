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
