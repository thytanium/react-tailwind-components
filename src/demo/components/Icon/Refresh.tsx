import * as React from 'react';

interface Props {
  size?: number;
}

export default function Refresh({ size }: Props): React.ReactElement {
  return (
    <svg
      className="icon icon-tabler icon-tabler-refresh"
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
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
      <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
    </svg>
  );
}
