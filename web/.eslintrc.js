module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "@nuxt/eslint-config", "prettier"],
  overrides: [],
  plugins: [],
  rules: {},
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./",
      },
    },
  },
};
