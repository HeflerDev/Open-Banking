import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lorem ipsum', () => {
  render(<App />);
  const linkElement = screen.getByText(/lorem ipsum/i);
  expect(linkElement).toBeInTheDocument();
});
