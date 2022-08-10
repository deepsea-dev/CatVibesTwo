import { fireEvent, render, screen } from '@testing-library/react';
import { UrlEntry } from './urlEntry';

describe('Url entry', () => {
  it('renders enter video text', () => {
    render(<UrlEntry/>);
    expect(screen.getByText('Enter a video link (50MB Max.)')).toBeInTheDocument();
  });

  it('hides enter video text when clicked', async () => {
    render(<UrlEntry/>);
    const entry = screen.getByTestId('url-entry');
    entry.click();
    expect(await screen.findByText('Enter a video link (50MB Max.)')).toHaveStyle({visibility: 'hidden'});
  });

  it('reshows enter video text when focus lost and no text has been entered', async () => {
    render(<UrlEntry/>);
    const entry = screen.getByTestId('url-entry');
    entry.click();
    expect(await screen.findByText('Enter a video link (50MB Max.)')).toHaveStyle({visibility: 'hidden'});
    fireEvent.focusOut(screen.getByTestId('url-entry-input'));
    expect(await screen.findByText('Enter a video link (50MB Max.)')).toHaveStyle({visibility: 'visible'});
  });

  it('doesn\'t reshow enter video text when focus lost and text has been entered', async () => {
    render(<UrlEntry/>);
    const entry = screen.getByTestId('url-entry');
    entry.click();
    expect(await screen.findByText('Enter a video link (50MB Max.)')).toHaveStyle({visibility: 'hidden'});
    const input: HTMLInputElement = screen.getByTestId('url-entry-input');
    fireEvent.change(input, {target: {value: 'cat vibes only'}});
    fireEvent.focusOut(screen.getByTestId('url-entry-input'));
    expect(await screen.findByText('Enter a video link (50MB Max.)')).toHaveStyle({visibility: 'hidden'});
  });
});