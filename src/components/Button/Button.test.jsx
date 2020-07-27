import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const buttonText = 'Button Test Text';

  it('renders properly', () => {
    ['solid', 'outline'].forEach(scheme => {
      ['primary', 'secondary'].forEach(variant => {
        const text = `${buttonText} ${scheme} ${variant}`;
        const { getByText } = render(
          <Button scheme={scheme} variant={variant}>
            {text}
          </Button>
        );
        expect(getByText(text)).toBeInTheDocument();
      });
    });
  });

  it('handles click event', () => {
    const onClick = jest.fn(() => {});
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
