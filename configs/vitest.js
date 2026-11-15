import vitest from "@vitest/eslint-plugin";

export const vitestConfig = [
  {
    name: "arvin/vitest",
    files: ["**/*.{test,spec}.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/max-nested-describe": ["error", { max: 3 }],
    },
  },
];
