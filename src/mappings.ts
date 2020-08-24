import { Variant, ZIndex, TextColor, FontWeight } from './types';

export const variantMap: Record<Variant, string> = {
  [Variant.PRIMARY]: 'is-primary',
  [Variant.LIGHT]: 'is-light',
  [Variant.DARK]: 'is-dark',
  [Variant.SUCCESS]: 'is-success',
  [Variant.WARNING]: 'is-warning',
  [Variant.DANGER]: 'is-danger',
};

export const textColorMap: Record<TextColor, string> = {
  [TextColor.WHITE]: 'text-white',
  [TextColor.LIGHT]: 'text-light',
  [TextColor.DARK]: 'text-dark',
  [TextColor.BLACK]: 'text-black',
};

export const fontWeightMap: Record<FontWeight, string> = {
  [FontWeight.HAIRLINE]: 'font-hairline',
  [FontWeight.THIN]: 'font-thin',
  [FontWeight.LIGHT]: 'font-light',
  [FontWeight.NORMAL]: 'font-normal',
  [FontWeight.MEDIUM]: 'font-medium',
  [FontWeight.SEMIBOLD]: 'font-semibold',
  [FontWeight.BOLD]: 'font-bold',
  [FontWeight.EXTRABOLD]: 'font-extrabold',
  [FontWeight.BLACK]: 'font-black',
};

export const zIndexMap: Record<ZIndex, string> = {
  0: 'z-0',
  10: 'z-10',
  20: 'z-20',
  30: 'z-30',
  40: 'z-40',
  50: 'z-50',
};
