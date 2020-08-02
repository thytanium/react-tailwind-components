import * as React from 'react';
import * as cn from 'classnames';
import { button } from '../../classes';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  variant?: ButtonVariant;
}

const Button = ({
  children,
  className,
  isDisabled,
  onClick,
  type,
  variant,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(button(variant), className)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  isDisabled: false,
  onClick: (): void => {
    // do nothing
  },
  type: 'button',
  variant: 'solid',
};

export default Button;
