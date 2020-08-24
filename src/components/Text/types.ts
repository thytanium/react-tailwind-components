import { TextColor, FontWeight } from '../../types';
import { ChildrenProps } from '../../rc/types';

export type TextProps = {
  color: TextColor;
  weight?: FontWeight;
} & ChildrenProps;
