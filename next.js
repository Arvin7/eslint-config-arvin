import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    name: "next.js",
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
];
