import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders CloudOps Academy sign-in experience', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Advance your cloud operations career/i)).toBeInTheDocument();
  expect(getByText(/Sign in to your workspace/i)).toBeInTheDocument();
});
