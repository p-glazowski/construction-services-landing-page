import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the hero heading and phone link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /zadzwoń/i })[0]).toHaveAttribute('href', 'tel:+48123456789');
});
