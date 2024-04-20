import Link from 'next/link';
import { TooltipProvider } from '../ui/tooltip';

import {
  BarChartHorizontal,
  DoorClosedIcon,
  DownloadIcon,
  HeartIcon,
  Home,
  MicIcon,
  Music,
  PlusIcon,
  SearchIcon,
  TrendingUpIcon,
} from 'lucide-react';

const Sidebar = () => {
  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden flex-col bg-muted/50 shadow-lg sm:flex">
        <nav className="flex flex-col items-center gap-6 px-6 sm:pb-4 sm:pt-9">
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white transition-colors hover:text-foreground md:h-9 md:w-9"
          >
            <Music className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Home className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <SearchIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <HeartIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <MicIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <TrendingUpIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <DownloadIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <BarChartHorizontal className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <PlusIcon className="h-5 w-5" />
          </Link>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <DoorClosedIcon className="h-5 w-5" />
          </Link>
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
