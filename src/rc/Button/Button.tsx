import * as React from 'react';
import { SideProps, ChildrenProps } from '../types';

export interface ButtonProps extends SideProps, ChildrenProps {
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
  leftComponent: LeftComponent,
  leftNode,
  onClick,
  rightComponent: RightComponent,
  rightNode,
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
      {LeftComponent ? <LeftComponent /> : leftNode}
      {children}
      {RightComponent ? <RightComponent /> : rightNode}
    </button>
  );
}

Button.defaultProps = {
  isDisabled: false,
  onClick: (): void => {
    // do nothing
  },
  type: 'button',
};
