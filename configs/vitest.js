import vitest from "@vitest/eslint-plugin";

export const vitestConfig = [
  {
    name: "vitest",
    files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/max-nested-describe": ["error", { max: 3 }],
    },
  },
];
