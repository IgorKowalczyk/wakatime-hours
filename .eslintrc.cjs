module.exports = {
 extends: ["@igorkowalczyk/eslint-config", "plugin:@typescript-eslint/recommended"],
 parser: "@typescript-eslint/parser",
 plugins: ["@typescript-eslint"],
 root: true,
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
 },
 env: {
  node: true,
  es6: true,
 },
 rules: {
  camelcase: "warn",
  "@typescript-eslint/no-explicit-any": "off",
 },
};
