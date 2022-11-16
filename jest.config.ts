import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: [compilerOptions.baseUrl],
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};

export default jestConfig;
