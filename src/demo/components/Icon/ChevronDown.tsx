import * as React from 'react';

interface Props {
  size?: number;
}

export default function ChevronDown({ size }: Props): React.ReactElement {
  return (
    <svg
      className="icon icon-tabler icon-tabler-chevron-down"
      fill="none"
      height={size || 24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={size || 24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
