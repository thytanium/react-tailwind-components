import * as React from 'react';
import { ChildrenProps } from '../../rc/types';

export default function Container({
  children,
}: ChildrenProps): React.ReactElement {
  return <div className="container mx-auto">{children}</div>;
}
