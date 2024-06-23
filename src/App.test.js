import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Weather Table', () => {
  render(<App />);
  const para = screen.getByText(/Please enter a location/i);
  expect(para).toBeInTheDocument();
});
