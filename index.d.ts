import type { Linter } from "eslint";

declare const arvinConfig: {
  configs: {
    recommended: Linter.Config[];
    nextJs: Linter.Config[];
    react: Linter.Config[];
    vite: Linter.Config[];
    vitest: Linter.Config[];
  };
};

export default arvinConfig;
