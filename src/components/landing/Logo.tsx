import * as React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 316 120"
    fill="none"
    aria-label="SignAI"
    {...props}
  >
    <text
      style={{
        whiteSpace: 'pre',
        fill: '#0069FF',
        fontFamily: 'Inter',
        fontSize: '44.3px',
        fontWeight: '900',
        letterSpacing: '-.025em',
      }}
      x={107.08}
      y={79.35}
    >
      {'Sign'}
    </text>
    <path
      stroke="#0069FF"
      strokeWidth={5}
      d="M239.52 38.35h60.4v51h-60.4z"
      rx={10.9}
    />
    <text
      style={{
        whiteSpace: 'pre',
        fill: '#0069FF',
        fontFamily: 'Inter',
        fontSize: '44.3px',
        fontWeight: '900',
        letterSpacing: '-.025em',
      }}
      x={247.92}
      y={79.35}
    >
      {'AI'}
    </text>
  </svg>
);