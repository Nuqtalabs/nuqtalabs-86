import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

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
      className="w-full h-auto p-4 justify-between bg-gray-900/90 backdrop-blur-sm border border-gray-800/60 hover:bg-gray-800/90 transition-all duration-200 rounded-xl group"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="font-medium text-white text-lg">{title}</span>
            <span className="text-base text-gray-400">{subtitle}</span>
          </div>
        </div>
        <ExternalLink size={20} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
      </a>
    </Button>
  );
};