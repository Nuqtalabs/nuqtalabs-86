import React from 'react';

interface InstagramIconProps {
  size?: number;
  className?: string;
}

export const InstagramIcon: React.FC<InstagramIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#E4405F" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="4" stroke="#E4405F" strokeWidth="2" fill="none"/>
      <circle cx="18.5" cy="5.5" r="1.5" fill="#E4405F"/>
    </svg>
  );
};