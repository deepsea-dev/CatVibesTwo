import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should have a url entry', () => {
    render(<App/>);
    expect(screen.getByTestId('url-entry')).toBeInTheDocument();
  });
});