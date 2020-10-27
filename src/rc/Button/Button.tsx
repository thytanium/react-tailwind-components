import * as React from 'react';
import { BeforeAfterProps, ChildrenProps } from '../types';

export interface ButtonProps extends BeforeAfterProps, ChildrenProps {
  className?: string;
  innerRef?: React.Ref<HTMLButtonElement>;
  isDisabled?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  className,
  innerRef,
  isDisabled,
  beforeComponent: BeforeComponent,
  beforeNode,
  onClick,
  afterComponent: AfterComponent,
  afterNode,
  type,
}: ButtonProps): React.ReactElement {
  return (
    <button
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      ref={innerRef}
      type={type}
    >
      {BeforeComponent ? <BeforeComponent /> : beforeNode}
      {children}
      {AfterComponent ? <AfterComponent /> : afterNode}
    </button>
  );
}

Button.defaultProps = {
  isDisabled: false,
  onClick: undefined,
  type: 'button',
};
