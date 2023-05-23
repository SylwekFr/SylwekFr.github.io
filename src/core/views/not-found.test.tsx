import { render, screen } from '@testing-library/react';
import NotFound from './not-found';

test('renders "Not Found"', () => {
  render(<NotFound />);
  const notFoundElement = screen.getByText('Not Found');
  expect(notFoundElement).toBeInTheDocument();
});