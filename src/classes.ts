const basePadding = 'p-4';
const basePaddingX = 'px-4';
const basePaddingY = 'py-4';
const halfPaddingY = 'py-2';

export const button = (variant: ButtonVariant): string => {
  const base = [
    'border-2',
    'shadow',
    'rounded',
    'font-medium',
    basePaddingX,
    halfPaddingY,
  ];
  switch (variant) {
    case 'outline':
      return [
        ...base,
        'text-indigo-700',
        'border-indigo-700',
        'hover:text-indigo-800',
        'hover:border-indigo-800',
      ].join(' ');
    default:
      return [
        ...base,
        'bg-indigo-700',
        'text-white',
        'border-transparent',
        'hover:bg-indigo-800',
      ].join(' ');
  }
};
