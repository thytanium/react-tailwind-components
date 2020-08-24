import * as React from 'react';
import { TextProps } from './types';
import Text from './Text';

export default function Text5Xl({
  children,
  color,
  weight,
}: TextProps): React.ReactElement {
  return (
    <Text className="text-5xl" color={color} weight={weight}>
      {children}
    </Text>
  );
}
