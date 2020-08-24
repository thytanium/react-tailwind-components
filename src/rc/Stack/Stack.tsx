import * as React from 'react';
import { StackContextType, StackContext } from './Context';

interface StackProps {
  children: (current: StackContextType) => React.ReactNode;
}

export default function Stack({ children }: StackProps): React.ReactElement {
  const current = React.useContext(StackContext);
  const next = {
    ...current,
    zIndex: current.zIndex + 10,
  } as StackContextType;

  return (
    <StackContext.Provider value={next}>{children(next)}</StackContext.Provider>
  );
}
