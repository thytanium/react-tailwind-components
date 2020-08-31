import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classnames from 'classnames';
import { flexMap, zIndexMap } from '../../mappings';
import { Stack } from '../../rc';
import { ChildrenProps } from '../../rc/types';
import { Flex } from '../../types';

interface OverlayProps extends ChildrenProps {
  flex?: Flex;
}

export default function Overlay({
  children,
  flex,
}: OverlayProps): React.ReactElement {
  return (
    <Stack>
      {React.useCallback(
        zIndex =>
          ReactDOM.createPortal(
            <div
              className={classnames(
                'overlay',
                flexMap[flex],
                zIndexMap[zIndex * 10]
              )}
            >
              {children}
            </div>,
            document.body
          ),
        [children, flex]
      )}
    </Stack>
  );
}

Overlay.flex = Flex;
