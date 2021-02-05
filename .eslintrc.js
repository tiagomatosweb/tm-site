module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'eslint:recommended',
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        indent: 'off',
        'comma-dangle': ['error', 'always-multiline'],
        semi: ['error', 'always'],
        'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
        'space-before-function-paren': ['error', 'never'],
        'vue/html-indent': ['error', 4],
        'vue/no-v-html': 'off',
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            registeredComponentsOnly: false,
        }],
        'vue/match-component-file-name': ['error', {
            extensions: ['vue'],
            shouldMatchCase: false,
        }],
        'import/extensions': ['error', 'ignorePackages'],
        'import/no-absolute-path': 'error',
        'import/newline-after-import': 'error',
        'import/no-unresolved': ['error'],
    },
};
