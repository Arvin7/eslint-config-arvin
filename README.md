# Arvin's ESLint Rules

One plugin to share my common ESLint rules across different projects.

![Heh](https://media.giphy.com/media/M3o3fL9nnxG4o/giphy.gif)

- Use v2.x for ESLint v9.13.0 and above
- Use v1.0.9 for ESLint v8.57.0 and below

## Usage

1. Create a ESLint config file in your project root directory:
   `eslint.config.mjs`

2. Copy/paste:

```js
import arvinConfig from "eslint-config-arvin";
import arvinReactConfig from "eslint-config-arvin/react.js";
import arvinViteConfig from "eslint-config-arvin/vite.js";

export default [...arvinConfig, ...arvinReactConfig, ...arvinViteConfig];
```

## All Supported Configurations

| Config                    | Import                                                           |
| ------------------------- | ---------------------------------------------------------------- |
| JavaScript and TypeScript | `import arvinConfig from "eslint-config-arvin";`                 |
| React                     | `import arvinReactConfig from "eslint-config-arvin/react.js";`   |
| Next.js                   | `import arvinNextConfig from "eslint-config-arvin/next.js";`     |
| Vite                      | `import arvinViteConfig from "eslint-config-arvin/vite.js";`     |
| Vitest                    | `import arvinVitestConfig from "eslint-config-arvin/vitest.js";` |
