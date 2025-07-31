import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders sandwich order heading', () => {
  render(<App />);
  const heading = screen.getByText(/order a sandwich/i);
  expect(heading).toBeInTheDocument();
});

test('order button disabled until toggle is checked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /place order/i });
  expect(button).toBeDisabled();
  const toggle = screen.getByLabelText(/ready to order/i);
  userEvent.click(toggle);
  expect(button).toBeEnabled();
});
