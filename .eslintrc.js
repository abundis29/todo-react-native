module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        // "plugin:react/recommended",
        // 'airbnb', 
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
        // Add specific React Native rules here, e.g., for React Native specific components
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        // Override or extend rules from the Airbnb config
        'no-console': 'off', // Allow console in certain environments
        // Add your custom rules or overrides here
    },
    "ignorePatterns": ['scripts/setup.js'],
}
