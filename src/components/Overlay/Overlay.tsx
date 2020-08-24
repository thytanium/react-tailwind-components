import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classnames from 'classnames';
import { zIndexMap } from '../../mappings';
import { Stack } from '../../rc';
import { ChildrenProps } from '../../rc/types';

export default function Overlay({
  children,
}: ChildrenProps): React.ReactElement {
  return (
    <Stack>
      {React.useCallback(
        ({ zIndex }) =>
          ReactDOM.createPortal(
            <div className={classnames('overlay', zIndexMap[zIndex])}>
              {children}
            </div>,
            document.body
          ),
        [children]
      )}
    </Stack>
  );
}
