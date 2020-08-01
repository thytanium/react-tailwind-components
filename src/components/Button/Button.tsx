import * as React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  scheme?: Scheme;
  type?: 'button' | 'submit';
  variant?: Variant;
}

const Button = ({
  children,
  isDisabled,
  onClick,
  scheme,
  type,
  variant,
}: ButtonProps): React.ReactElement => {
  return (
    <button type={type} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  isDisabled: false,
  onClick: (): void => {
    // do nothing
  },
  scheme: 'solid',
  type: 'button',
  variant: 'primary',
};

export default Button;
