import * as React from 'react';
import * as classnames from 'classnames';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from '../../rc';
import { variantMap } from '../../mappings';
import { Variant } from '../../types';

interface ButtonProps {
  variant?: Variant;
}

export default function Button({
  children,
  innerRef,
  isDisabled,
  leftComponent,
  leftNode,
  onClick,
  rightComponent,
  rightNode,
  type,
  variant,
}: ButtonProps & BaseButtonProps): React.ReactElement {
  return (
    <BaseButton
      className={classnames('btn', variantMap[variant])}
      innerRef={innerRef}
      isDisabled={isDisabled}
      leftComponent={leftComponent}
      leftNode={leftNode}
      onClick={onClick}
      rightComponent={rightComponent}
      rightNode={rightNode}
      type={type}
    >
      {children}
    </BaseButton>
  );
}

Button.defaultProps = {
  children: undefined,
  isDisabled: false,
  onClick: (): void => {
    // do nothing
  },
  type: 'button',
};
Button.variant = Variant;
