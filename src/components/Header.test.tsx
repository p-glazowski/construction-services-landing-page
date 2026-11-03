import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

test('burger toggles the mobile menu and closes on link click', async () => {
  const user = userEvent.setup();
  render(<Header />);
  const burger = screen.getByRole('button', { name: /otwórz menu/i });
  expect(burger).toHaveAttribute('aria-expanded', 'false');

  await user.click(burger);
  expect(screen.getByRole('button', { name: /zamknij menu/i })).toHaveAttribute('aria-expanded', 'true');
  const menu = screen.getByRole('navigation', { name: 'Menu' });
  expect(menu).toBeVisible();

  await user.click(screen.getAllByRole('link', { name: 'Cennik' }).at(-1)!);
  expect(screen.getByRole('button', { name: /otwórz menu/i })).toHaveAttribute('aria-expanded', 'false');
});

test('Escape closes the menu', async () => {
  const user = userEvent.setup();
  render(<Header />);
  await user.click(screen.getByRole('button', { name: /otwórz menu/i }));
  await user.keyboard('{Escape}');
  expect(screen.getByRole('button', { name: /otwórz menu/i })).toBeInTheDocument();
});
