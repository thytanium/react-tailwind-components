import * as React from 'react';

enum BoxType {
  X,
  Y,
  BOTH,
}

const boxMap: Record<BoxType, string> = {
  [BoxType.X]: 'box-x',
  [BoxType.Y]: 'box-y',
  [BoxType.BOTH]: 'box',
};

interface BoxProps {
  children?: React.ReactNode;
  type?: BoxType;
}

export default function Box({ children, type }: BoxProps): React.ReactElement {
  return <div className={boxMap[type]}>{children}</div>;
}

Box.defaultProps = {
  type: BoxType.BOTH,
};

Box.type = BoxType;
