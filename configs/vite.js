import reactRefresh from "eslint-plugin-react-refresh";

export const viteConfig = [
  {
    name: "vite",
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
    },
  },
];
