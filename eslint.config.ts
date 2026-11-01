import baseConfig from "@igorkowalczyk/eslint-config/base";
import nodeConfig from "@igorkowalczyk/eslint-config/node";
import prettierConfig from "@igorkowalczyk/eslint-config/prettier";
import typescriptConfig from "@igorkowalczyk/eslint-config/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  //
  baseConfig,
  nodeConfig,
  typescriptConfig,
  prettierConfig,
  globalIgnores(["worker-configuration.d.ts"], "Ignore worker-configuration.d.ts file"),
]);
