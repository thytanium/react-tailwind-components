import * as React from 'react';
import { TextProps } from './types';
import Text from './Text';

export default function TextXl({
  children,
  color,
  weight,
}: TextProps): React.ReactElement {
  return (
    <Text className="text-xl" color={color} weight={weight}>
      {children}
    </Text>
  );
}
