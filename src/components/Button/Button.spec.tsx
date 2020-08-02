import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const buttonText = 'Button Test Text';

  it('renders properly', () => {
    ['solid', 'outline'].forEach((variant: ButtonVariant) => {
      const text = `${buttonText} ${variant}`;
      const { getByText } = render(<Button variant={variant}>{text}</Button>);
      expect(getByText(text)).toBeInTheDocument();
    });
  });

  it('handles click event', () => {
    const onClick = jest.fn((): void => {
      // do nothing
    });
    const { getByText } = render(
      <Button onClick={onClick}>{buttonText}</Button>
    );

    fireEvent(
      getByText(buttonText),
      new MouseEvent('click', {
        bubbles: true,
      })
    );

    expect(onClick.mock.calls).toHaveLength(1);
  });
});
