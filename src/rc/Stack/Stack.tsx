import * as React from 'react';
import StackContext from './StackContext';

interface StackProps {
  children: (zIndex: number) => React.ReactNode;
  value?: number;
}

export default function Stack({
  children,
  value,
}: StackProps): React.ReactElement {
  const previous = React.useContext(StackContext);
  const current = Math.max(previous, value);
  const next = current + 1;

  return (
    <StackContext.Provider value={next}>{children(next)}</StackContext.Provider>
  );
}

Stack.defaultProps = {
  value: 0,
};
