import * as React from 'react';
import { Button } from '../Button';
import Modal from './Modal';
import ModalBody from './ModalBody';
import { ChildrenProps } from '../../rc/types';
import ModalHeader from './ModalHeader';

interface UncontrolledModalProps extends ChildrenProps {
  testy?: number;
}

export default function UncontrolledModal({
  children,
}: UncontrolledModalProps): React.ReactElement {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const toggle = (): void => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={toggle} variant={Button.variant.PRIMARY}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>Uncontrolled Modal</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  );
}
