import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

test('adds 1 + 2 to equal 3', () => {
  render(<App />)
  // Step 1: Arrange - Setup the component that we want to test
  // Step 2: Act - Run the logic that should be tested (e.g., exec function)
  // Step 3: Assert - Compare execution results with expected results
  expect(1 + 2).toBe(3);
});