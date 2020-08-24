import * as React from 'react';
import { TextProps } from './types';
import Text from './Text';

export default function TextSm({
  children,
  color,
  weight,
}: TextProps): React.ReactElement {
  return (
    <Text className="text-sm" color={color} weight={weight}>
      {children}
    </Text>
  );
}
