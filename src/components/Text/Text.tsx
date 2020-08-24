import * as React from 'react';
import * as classnames from 'classnames';
import { TextProps } from './types';
import { textColorMap, fontWeightMap } from '../../mappings';
import { FontWeight, TextColor } from '../../types';

type Props = {
  className?: string;
};

export default function Text({
  children,
  className,
  color,
  weight,
}: TextProps & Props): React.ReactElement {
  return (
    <span
      className={classnames(
        textColorMap[color],
        fontWeightMap[weight],
        className
      )}
    >
      {children}
    </span>
  );
}

Text.defaultProps = {
  weight: FontWeight.NORMAL,
};

Text.color = TextColor;
Text.weight = FontWeight;
