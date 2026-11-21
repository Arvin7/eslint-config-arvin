import reactRefresh from "eslint-plugin-react-refresh";

export const viteConfig = [
  {
    name: "arvin/vite",
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      // Vite's HMR handles constant exports next to components.
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
