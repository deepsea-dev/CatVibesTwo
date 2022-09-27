import { render, screen } from '@testing-library/react';
import App from './App';

import backgroudImage from './images/background-blurred.png';

describe('App', () => {
  it('should have a url entry', () => {
    render(<App/>);
    expect(screen.getByTestId('url-entry')).toBeInTheDocument();
  });

  it('should have a background image', () => {
    render(<App/>);
    let contentElement = screen.getByTestId('content');
    
    expect(contentElement).toHaveStyle(`background-image: url(${backgroudImage})`);
  });
});