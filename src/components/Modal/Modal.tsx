import * as React from 'react';
import { Overlay } from '../Overlay';
import { ChildrenProps } from '../../rc/types';
import { useClickOutside } from '../../rc/ClickOutside';

interface ModalProps extends ChildrenProps {
  isOpen?: boolean;
  toggle?: () => void;
}

export default function Modal({
  isOpen,
  children,
  toggle,
}: ModalProps): React.ReactElement {
  const ref = useClickOutside<HTMLDivElement>(toggle);

  return isOpen ? (
    <Overlay flex={Overlay.flex.CENTER}>
      <div className="modal" ref={ref}>
        {children}
      </div>
    </Overlay>
  ) : null;
}

Modal.defaultProps = {
  isOpen: true,
};
