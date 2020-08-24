import { createContext } from 'react';

export type StackContextType = {
  zIndex: number;
};

export const StackContext = createContext({
  zIndex: -10,
} as StackContextType);
