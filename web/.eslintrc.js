module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "@nuxt/eslint-config", "prettier"],
  overrides: [],
  plugins: [],
  rules: {
    "import/no-anonymous-default-export": "error",
    "import/prefer-default-export": "off",
    "no-useless-constructor": "off",
    "no-empty-function": ["error", { allow: ["constructors"] }],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["tsconfig.json"],
      },
    },
  },
};
