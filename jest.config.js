module.exports = {
  setupFiles: ['./src/testSetup.js'],
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  testURL: 'https://store-manager2.herokuapp.com/api/v1/products',
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
