import eslintConfig from "@igorkowalczyk/eslint-config";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
 // prettier
 eslintConfig.base,
 eslintConfig.node,
 eslintConfig.typescript,
 eslintConfig.prettier,
 globalIgnores(["worker-configuration.d.ts"], "Ignore worker-configuration.d.ts file"),
]);
