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
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E09B3D"/>
          <stop offset="30%" stopColor="#C74C4D"/>
          <stop offset="60%" stopColor="#C21975"/>
          <stop offset="100%" stopColor="#7024C4"/>
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="21" height="21" rx="6" ry="6" fill="url(#instagram-gradient)" stroke="none"/>
      <circle cx="12" cy="12" r="5.5" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="18.5" cy="5.5" r="1.5" fill="white"/>
    </svg>
  );
};