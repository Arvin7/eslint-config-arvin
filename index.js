import { recommendedConfig } from "./configs/recommended.js";
import { reactConfig } from "./configs/react.js";
import { nextJsConfig } from "./configs/next.js";
import { viteConfig } from "./configs/vite.js";
import { vitestConfig } from "./configs/vitest.js";

export default {
  configs: {
    recommended: recommendedConfig,
    nextJs: nextJsConfig,
    react: reactConfig,
    vite: viteConfig,
    vitest: vitestConfig,
  },
};
