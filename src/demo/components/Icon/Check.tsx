import * as React from 'react';

interface Props {
  size?: number;
}

export default function Check({ size }: Props): React.ReactElement {
  return (
    <svg
      className="icon icon-tabler icon-tabler-check"
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
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}
