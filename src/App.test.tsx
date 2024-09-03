import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const homeElement = screen.getByRole('main');
  expect(homeElement).toBeInTheDocument();
});
