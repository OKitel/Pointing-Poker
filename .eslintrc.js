module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'prettier'],
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true,
    },
    // Airbnb's ESLint config requires this
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname // <-- this did the trick for me
     },
    rules: {
        'import/prefer-default-export': 'off',
        // Include .prettierrc.js rules
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],

        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',
        // We don't want unused vars
        '@typescript-eslint/no-unused-vars': ['error'],
    },
    settings: {
        'import/resolver': {
            node: {},
        },
    },
};

