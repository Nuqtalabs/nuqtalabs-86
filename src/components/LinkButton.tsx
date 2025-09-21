import React from 'react';
import { Button } from '@/components/ui/button';

interface LinkButtonProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, icon, title, subtitle }) => {
  return (
    <Button
      asChild
      variant="ghost"
      className="w-full h-auto p-4 justify-start gap-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/80 transition-all duration-300 rounded-xl"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="flex flex-col items-start text-left">
          <span className="font-semibold text-white">{title}</span>
          <span className="text-sm text-gray-400">{subtitle}</span>
        </div>
      </a>
    </Button>
  );
};