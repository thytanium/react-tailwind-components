import * as React from 'react';
import { TextProps } from './types';
import Text from './Text';

export default function TextBase({
  children,
  color,
  weight,
}: TextProps): React.ReactElement {
  return (
    <Text className="text-base" color={color} weight={weight}>
      {children}
    </Text>
  );
}
