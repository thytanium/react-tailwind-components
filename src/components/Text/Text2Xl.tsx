import * as React from 'react';
import { TextProps } from './types';
import Text from './Text';

export default function Text2Xl({
  children,
  color,
  weight,
}: TextProps): React.ReactElement {
  return (
    <Text className="text-2xl" color={color} weight={weight}>
      {children}
    </Text>
  );
}
