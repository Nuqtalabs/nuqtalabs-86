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
      className="w-full h-auto p-4 justify-between bg-gray-800/90 backdrop-blur-sm border border-gray-700/60 hover:bg-gray-700/90 transition-all duration-300 rounded-2xl group"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="font-semibold text-white text-base">{title}</span>
            <span className="text-sm text-gray-400">{subtitle}</span>
          </div>
        </div>
        <ExternalLink size={20} className="text-gray-400 group-hover:text-white transition-colors" />
      </a>
    </Button>
  );
};