module.exports = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
      "node_modules/(?!((jest-)?react-native|redux-persist|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|uuid)"
    ],
    collectCoverage: true,
    coverageDirectory: './coverage',  // Ensures Jest outputs coverage files to ./coverage directory
    coverageReporters: ['json-summary', 'text', 'lcov'],  // Adds more reporting formats
    collectCoverageFrom: [
      "**/*.{ts,tsx}",
      "!**/coverage/**",
      "!**/node_modules/**",
      "!**/babel.config.js",
      "!**/jest.setup.js"
    ],
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx"
    ],
    moduleNameMapper: {},
    setupFiles: [
      "./__mocks__/@react-native-async-storage/async-storage.ts"
    ]
  };
  