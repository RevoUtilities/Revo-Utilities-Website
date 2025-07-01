import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  { // pluginReactConfig is an object, not an array
    ...pluginReactConfig,
    settings: {
      react: {
        version: "detect" // Automatically detect the React version
      }
    }
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed with React 17+ new JSX transform
      "react/jsx-uses-react": "off", // Not needed with React 17+ new JSX transform
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ]
    }
  },
  {
    ignores: ["dist/", "node_modules/", "eslint.config.js"]
  }
];
