import * as React from 'react';
import { TextProps } from './types';
import Text from './Text';

export default function TextXs({
  children,
  color,
  weight,
}: TextProps): React.ReactElement {
  return (
    <Text className="text-xs" color={color} weight={weight}>
      {children}
    </Text>
  );
}
