import React, { memo } from 'react';

interface ChevronProps {
  arrowDirection: 'up' | 'down' | 'left' | 'right';
}
function ChevronIcon({ arrowDirection }: ChevronProps) {
  const direction = (() => {
    switch (arrowDirection) {
      case 'up':
        return 'M5 15l7-7 7 7';
      case 'left':
        return 'M15 19l-7-7 7-7';
      case 'right':
        return 'M9 5l7 7-7 7';
      case 'down':
      default:
        return 'M19 9l-7 7-7-7';
    }
  })();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
    </svg>
  );
}

export default memo(ChevronIcon);
