import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders browse panel', () => {
  render(<App />);
  const browsePanel = screen.getByText(/browse/i);
  expect(browsePanel).toBeInTheDocument();
});

test('renders list panel', () => {
  render(<App />);
  const listPanel = screen.getByText(/list/i);
  expect(listPanel).toBeInTheDocument();
});

test('renders result panel', () => {
  render(<App />);
  const resultPanel = screen.getByText(/result/i);
  expect(resultPanel).toBeInTheDocument();
});
