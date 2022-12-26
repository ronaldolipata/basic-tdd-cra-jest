import { render, screen } from '@testing-library/react';
import App from './index';

test('it should have the correct title', () => {
  render(<App />);
  const text = screen.getByText('Basic Counter');
  expect(text).toBeInTheDocument();
});
