process.env.TZ = 'UTC';
process.env.VITE_APP_ENV = "test";

export default
{
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/node_modules/',
        '!src/__tests__/**/*.{js,jsx,ts,tsx}',
        '!**/theme/**',
        "!src/**/index.{js,jsx,ts,tsx}",
        "!**/types/**",
        "!src/reportWebVitals.ts",
        "!src/react-app-env.d.ts",
        "!src/setupExpect.ts"
    ],
    coverageThreshold: {
        global: {
            branches: 25,
            functions: 40,
            lines: 40,
            statements: 40,
        },
    },
    coverageReporters: [
        'text',
        'lcov',
        'cobertura',
    ],
    reporters: [
        'default',
        'jest-junit',
    ],
    setupFiles: [
        'react-app-polyfill/jsdom',
    ],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    testEnvironment: 'jsdom',
    testRunner: '<rootDir>/node_modules/jest-circus/runner.js',
    transform: {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/jest/babelTransform.cjs',
        '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|json)$)': '<rootDir>/jest/fileTransform.cjs',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '.+\\.module\\.(css|sass|scss)$',
        'node_modules/(?!(babel-jest)/)',
    ],
    modulePaths: [],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/fileTransform.cjs',
        '\\.(css|less)$': '<rootDir>/jest/cssTransform.cjs',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
    },
    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
        'node',
    ],
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
    resetMocks: true,
};
