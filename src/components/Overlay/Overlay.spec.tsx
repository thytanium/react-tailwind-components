import * as React from 'react';
import { render } from '@testing-library/react';
import Overlay from './Overlay';

describe('Overlay', () => {
  it('renders the overlay component', () => {
    const { getByText } = render(<Overlay>My overlaid content</Overlay>);

    const element = getByText('My overlaid content');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('overlay');
    expect(element).toHaveClass('z-10');
  });
});
