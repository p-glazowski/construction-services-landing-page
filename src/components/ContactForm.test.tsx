import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';

const fill = async (user: ReturnType<typeof userEvent.setup>, opts: { consent?: boolean } = {}) => {
  await user.type(screen.getByLabelText(/imię i nazwisko/i), 'Jan Kowalski');
  await user.type(screen.getByLabelText(/e-mail/i), 'jan@example.com');
  await user.selectOptions(screen.getByLabelText(/usługa/i), 'klimatyzacja');
  await user.type(screen.getByLabelText(/wiadomość/i), 'Proszę o wycenę.');
  if (opts.consent !== false) await user.click(screen.getByLabelText(/zgoda|zgadzam/i));
};

test('shows required errors and does not submit an empty form', async () => {
  const onSubmit = vi.fn().mockResolvedValue(undefined);
  const user = userEvent.setup();
  render(<ContactForm onSubmit={onSubmit} />);
  await user.click(screen.getByRole('button', { name: /wyślij/i }));
  expect(screen.getAllByRole('alert').length).toBeGreaterThanOrEqual(4);
  expect(onSubmit).not.toHaveBeenCalled();
});

test('rejects an invalid email', async () => {
  const user = userEvent.setup();
  render(<ContactForm onSubmit={vi.fn()} />);
  await fill(user);
  await user.clear(screen.getByLabelText(/e-mail/i));
  await user.type(screen.getByLabelText(/e-mail/i), 'not-an-email');
  await user.click(screen.getByRole('button', { name: /wyślij/i }));
  expect(screen.getByText(/poprawny adres e-mail/i)).toBeInTheDocument();
});

test('requires consent', async () => {
  const onSubmit = vi.fn();
  const user = userEvent.setup();
  render(<ContactForm onSubmit={onSubmit} />);
  await fill(user, { consent: false });
  await user.click(screen.getByRole('button', { name: /wyślij/i }));
  expect(screen.getByText(/zgoda jest wymagana/i)).toBeInTheDocument();
  expect(onSubmit).not.toHaveBeenCalled();
});

test('submits valid data and shows the success state', async () => {
  const onSubmit = vi.fn().mockResolvedValue(undefined);
  const user = userEvent.setup();
  render(<ContactForm onSubmit={onSubmit} />);
  await fill(user);
  await user.click(screen.getByRole('button', { name: /wyślij/i }));
  await waitFor(() => expect(screen.getByText(/dziękujemy/i)).toBeInTheDocument());
  expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ name: 'Jan Kowalski', service: 'klimatyzacja' }));
});

test('silently drops submissions when the honeypot is filled', async () => {
  const onSubmit = vi.fn();
  const user = userEvent.setup();
  const { container } = render(<ContactForm onSubmit={onSubmit} />);
  await fill(user);
  await user.type(container.querySelector('input[name="website"]')!, 'spam');
  await user.click(screen.getByRole('button', { name: /wyślij/i }));
  expect(onSubmit).not.toHaveBeenCalled();
});

test('shows an error state when sending fails and keeps the data', async () => {
  const onSubmit = vi.fn().mockRejectedValue(new Error('fail'));
  const user = userEvent.setup();
  render(<ContactForm onSubmit={onSubmit} />);
  await fill(user);
  await user.click(screen.getByRole('button', { name: /wyślij/i }));
  await waitFor(() => expect(screen.getByText(/nie udało się wysłać/i)).toBeInTheDocument());
  expect(screen.getByLabelText(/imię i nazwisko/i)).toHaveValue('Jan Kowalski');
});
