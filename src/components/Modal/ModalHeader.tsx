import * as React from 'react';
import { ChildrenProps } from '../../rc/types';
import { Button } from '../../rc';
import { Box } from '../Box';

interface ModalHeaderProps extends ChildrenProps {
  toggle?: () => void;
}

export default function ModalHeader({
  children,
  toggle,
}: ModalHeaderProps): React.ReactElement {
  return (
    <div className="modal-header">
      <Box>{children}</Box>
      {toggle && <Button onClick={toggle}>X</Button>}
    </div>
  );
}
