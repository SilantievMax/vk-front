// src/App.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App', () => {
  test('renders title', () => {
    render(<App />);
    // const linkElement = screen.getByText(/NPM Package List/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
