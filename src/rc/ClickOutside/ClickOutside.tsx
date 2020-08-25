import * as React from 'react';
import useClickOutside from './useClickOutside';

interface ClickOutsideProps<T extends HTMLElement> {
  children: ({ ref }: { ref: React.Ref<T> }) => React.ReactElement;
  onClick: () => void;
}

export default function ClickOutside<T extends HTMLElement>({
  children,
  onClick,
}: ClickOutsideProps<T>): React.ReactElement {
  const ref = useClickOutside<T>(onClick);
  return children({ ref });
}
