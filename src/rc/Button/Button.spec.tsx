import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const buttonText = 'Button Test Text';

  it('renders a side component', () => {
    const SideComponent = (): React.ReactElement => <span>Side</span>;
    const { getByText } = render(
      <Button leftComponent={SideComponent}>{buttonText}</Button>,
    );

    expect(getByText('Side')).toBeInTheDocument();
  });

  it('renders a side node', () => {
    const { getByText } = render(
      <Button leftNode={<span>Side</span>}>{buttonText}</Button>,
    );

    expect(getByText('Side')).toBeInTheDocument();
  });

  it('handles click event', () => {
    const onClick = jest.fn((): void => {
      // do nothing
    });
    const { getByText } = render(
      <Button onClick={onClick}>{buttonText}</Button>,
    );

    fireEvent(
      getByText(buttonText),
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    expect(onClick.mock.calls).toHaveLength(1);
  });
});
