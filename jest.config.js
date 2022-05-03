const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './'
})

const jestCustomConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: [
        "<rootDir>/node_modules",
        "<rootDir>/.next"
    ]
}

module.exports = createJestConfig(jestCustomConfig)