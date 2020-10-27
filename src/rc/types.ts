import { ElementType, ReactNode } from 'react';

export type BeforeAfterProps = {
  beforeComponent?: ElementType;
  beforeNode?: ReactNode;
  afterComponent?: ElementType;
  afterNode?: ReactNode;
};

export type ChildrenProps = {
  children?: ReactNode;
};
