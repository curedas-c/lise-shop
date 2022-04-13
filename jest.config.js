module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  roots: ['<rootDir>/src/'],
  moduleNameMapper: {
    '@store/(.*)': '<rootDir>/src/app/@store/$1',
    '@shared/(.*)': '<rootDir>/src/app/@shared/$1',
    '@environments/(.*)': '<rootDir>/src/environments/$1'
  }
};
