import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sandwich order heading', () => {
  render(<App />);
  const heading = screen.getByText(/order a sandwich/i);
  expect(heading).toBeInTheDocument();
});
