import { createRef, Ref, useCallback, useEffect } from 'react';

export default function useClickOutside<T extends HTMLElement>(
  onClick: () => void
): Ref<T> {
  const ref = createRef<T>();

  const handleClick = useCallback(
    (event: Event): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick();
      }
    },
    [ref, onClick]
  );

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return (): void => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return ref;
}
