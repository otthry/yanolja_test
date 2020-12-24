import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders assignment header', () => {
  render(<App />);
  const linkElement = screen.getByText('Assignment');
  expect(linkElement).toBeInTheDocument();
});
