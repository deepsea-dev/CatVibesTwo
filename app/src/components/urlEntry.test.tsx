import { render, screen } from '@testing-library/react';
import { UrlEntry } from './urlEntry';

describe('Url entry', () => {
  it('renders enter video text', () => {
    render(<UrlEntry/>);
    expect(screen.getByTestId('url-entry-input')).toHaveAttribute('placeholder', 'Enter a video link (50MB Max.)');
  });
});