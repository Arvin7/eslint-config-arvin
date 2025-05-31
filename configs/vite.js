import reactRefresh from "eslint-plugin-react-refresh";

export const viteConfig = {
  plugins: {
    "react-refresh": reactRefresh,
  },
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
