module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'node'],
  rootDir: '.',
  testRegex: '.spec.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageDirectory: './coverage',
};
