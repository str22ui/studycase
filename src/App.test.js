import { render, screen } from '@testing-library/react';
import App from './App';
import FunctionalOne from './FunctionalOne';

test('renders learn react link', () => {
  render(<App />);
  // render(<FunctionalOne />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
