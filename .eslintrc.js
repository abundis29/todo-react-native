module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        'plugin:react-native/all',
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        'react-native',
        "@typescript-eslint"
    ],
    "rules": {
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'no-console': 'off', 
    },
    "ignorePatterns": ['scripts/setup.js'],
}
