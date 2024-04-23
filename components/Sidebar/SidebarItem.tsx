'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cloneElement } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

type Props = {
  className?: string;
  icon: JSX.Element;
  label: string;
  href?: string;
};

const SidebarItem = ({ className, icon, label, href = '#' }: Props) => {
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            'flex h-9 w-9 items-center justify-center md:h-8 md:w-8',
            'rounded-lg text-muted-foreground transition-colors hover:text-foreground',
            selected && 'text-accent-foreground',
            className
          )}
        >
          {cloneElement(icon, { className: 'size-5' })}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
};

export default SidebarItem;
