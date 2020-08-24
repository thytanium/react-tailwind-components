import * as React from 'react';
import { Overlay } from '../Overlay';
import { ChildrenProps } from '../../rc/types';

const Modal = ({ children }: ChildrenProps): React.ReactElement => (
  <Overlay>
    <div className="modal">{children}</div>
  </Overlay>
);

export default Modal;
