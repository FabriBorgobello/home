import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      prettier: prettierPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "prettier/prettier": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            [
              "^node:",
              "^(assert|buffer|child_process|crypto|fs|os|path|querystring|stream|timers|url|util|zlib)(/.*|$)",
            ], // Built-in Node.js modules
            ["^react$", "^next"], // React / Next.js
            ["^@?\\w"], // External packages
            ["^@/"], // Aliased imports
            ["^\\."], // Relative imports
            ["^.+\\.?(css|scss|sass|less)$"], // Style imports
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
];

export default eslintConfig;
