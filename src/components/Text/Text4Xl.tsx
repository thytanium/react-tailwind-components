import * as React from 'react';
import { TextProps } from './types';
import Text from './Text';

export default function Text4Xl({
  children,
  color,
  weight,
}: TextProps): React.ReactElement {
  return (
    <Text className="text-4xl" color={color} weight={weight}>
      {children}
    </Text>
  );
}
