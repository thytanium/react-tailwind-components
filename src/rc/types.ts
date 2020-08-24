import { ReactType, ReactNode } from 'react';

export type SideProps = {
  leftComponent?: ReactType;
  leftNode?: ReactNode;
  rightComponent?: ReactType;
  rightNode?: ReactNode;
};

export type ChildrenProps = {
  children?: ReactNode;
};
