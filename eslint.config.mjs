import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["node_modules/**", "build/**", "eslint.config.mjs"] },

  // Fichiers modules (Router)
  {
    files: ["Router/**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        isConnected: "readonly",
        getRole: "readonly",
        showAndHideElementsForRoles: "readonly",
      },
    },
  },

  // script.js : la source des globales, pas un consommateur
  {
    files: ["js/script.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      sourceType: "script",
      globals: { ...globals.browser },
    },
  },

  // Les autres scripts classiques qui CONSOMMENT les globales de script.js
  {
    files: ["js/**/*.js"],
    ignores: ["js/script.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.browser,
        apiUrl: "writable",
        setToken: "writable",
        setCookie: "writable",
        roleCookieName: "writable",
        sanitizeHtml: "readonly",
      },
    },
  },

  {
    files: ["**/*.js"],
    rules: {
      "no-var": "error",
      "no-unused-vars": "error",
      eqeqeq: "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-script-url": "error",
      // "prefer-const": "error",
    },
  },
]);