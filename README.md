# Arvin's ESLint Rules

One plugin to share my common ESLint rules across different projects.

![Heh](https://media.giphy.com/media/M3o3fL9nnxG4o/giphy.gif)

- Use v2.x for ESLint v9.13.0 and above
- Use v1.0.9 for ESLint v8.57.0 and below

## Usage

1. Create a ESLint config file (should be a module file: `mjs`) in your project root directory:
   `eslint.config.mjs`

2. Copy/paste:

```js
import arvinConfig from "eslint-config-arvin";
import arvinReactConfig from "eslint-config-arvin/react.js";
import arvinVitestConfig from "eslint-config-arvin/vitest.js";

export default [...arvinConfig, ...arvinReactConfig ...arvinVitestConfig];
```

## Supported Configurations

```js
import arvinReactConfig from "eslint-config-arvin/react.js";
import arvinNextConfig from "eslint-config-arvin/next.js";
import arvinViteConfig from "eslint-config-arvin/vite.js";
import arvinVitestConfig from "eslint-config-arvin/vitest.js";
```
