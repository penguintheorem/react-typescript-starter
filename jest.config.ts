export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
