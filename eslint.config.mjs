import {
    dirname
} from "path";
import {
    fileURLToPath
} from "url";
import {
    FlatCompat
} from "@eslint/eslintrc";

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            // Disabled rules for Vercel deployment
            "@next/next/no-img-element": "off",
            "react/no-unescaped-entities": "off",
            "@typescript-eslint/no-explicit-any": "warn", // Changed to warn instead of off

            // Recommended additions for Next.js projects
            "@next/next/no-html-link-for-pages": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react/jsx-key": "error",

            // Performance optimizations
            "@next/next/no-sync-scripts": "warn",
            "@next/next/no-css-tags": "warn",

            // TypeScript improvements
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
        },
    },
    {
        // Add environment settings
        env: {
            browser: true,
            node: true,
            es2022: true,
        },
    },
];

export default eslintConfig;