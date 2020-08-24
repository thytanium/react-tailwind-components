import * as React from 'react';
import { Box } from '../Box';
import { ChildrenProps } from '../../rc/types';

export default function ModalBody({
  children,
}: ChildrenProps): React.ReactElement {
  return (
    <div className="modal-body">
      <Box>{children}</Box>
    </div>
  );
}
