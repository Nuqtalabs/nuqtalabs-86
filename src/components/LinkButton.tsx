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
      variant="outline"
      className="w-full h-auto p-4 justify-start gap-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="flex flex-col items-start text-left">
          <span className="font-semibold text-foreground">{title}</span>
          <span className="text-sm text-muted-foreground">{subtitle}</span>
        </div>
      </a>
    </Button>
  );
};