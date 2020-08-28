import * as React from 'react';
import * as classnames from 'classnames';
import { Axis } from '../../types';

const paddingMap: Record<Axis, string> = {
  [Axis.X]: 'box-px',
  [Axis.Y]: 'box-py',
  [Axis.BOTH]: 'box-px box-py',
};

interface BoxProps {
  children?: React.ReactNode;
  isHorizontallySpaced?: boolean;
  isVerticallySpaced?: boolean;
  padding?: Axis;
}

export default function Box({
  children,
  isHorizontallySpaced,
  isVerticallySpaced,
  padding,
}: BoxProps): React.ReactElement {
  return (
    <div
      className={classnames('box', paddingMap[padding], {
        'space-x': isHorizontallySpaced,
        'space-y': isVerticallySpaced,
      })}
    >
      {children}
    </div>
  );
}

Box.defaultProps = {
  isHorizontallySpaced: false,
  isVerticallySpaced: false,
  padding: Axis.BOTH,
};

Box.padding = Axis;
