import { cn } from '@/lib/utils';
import Link from 'next/link';
import { cloneElement } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

type Props = {
  className?: string;
  icon: JSX.Element;
  label: string;
  selected?: boolean;
};

const SidebarItem = ({ className, icon, label, selected }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className={cn(
            'flex h-9 w-9 items-center justify-center md:h-8 md:w-8',
            'rounded-lg text-muted-foreground transition-colors hover:text-foreground',
            selected && 'text-accent-foreground',
            className
          )}
        >
          {cloneElement(icon, { className: 'h-5 w-5' })}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
};

export default SidebarItem;
