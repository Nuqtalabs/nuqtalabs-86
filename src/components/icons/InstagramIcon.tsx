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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instagram-gradient)" strokeWidth="2"/>
      <path d="m16 11.37a4 4 0 1 1-7.914-1.42A4 4 0 0 1 16 11.37z" stroke="url(#instagram-gradient)" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagram-gradient)"/>
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#405de6"/>
          <stop offset="25%" stopColor="#5851db"/>
          <stop offset="50%" stopColor="#833ab4"/>
          <stop offset="75%" stopColor="#c13584"/>
          <stop offset="100%" stopColor="#e1306c"/>
        </linearGradient>
      </defs>
    </svg>
  );
};