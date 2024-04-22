import { TooltipProvider } from '../ui/tooltip';

import {
  ArrowDownToLine,
  Heart,
  Home,
  ListMinus,
  Mic,
  Music,
  Plus,
  Search,
  Settings,
  TrendingUp,
} from 'lucide-react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <TooltipProvider>
      <aside className="hidden flex-col bg-muted/50 shadow-lg sm:flex">
        <nav className="flex flex-1 flex-col items-center gap-4 px-4 sm:pb-4 sm:pt-9">
          <SidebarItem
            className="rounded-full bg-sky-500 text-white md:h-9 md:w-9"
            icon={<Music />}
            label="Music"
          />
          <SidebarItem icon={<Home />} label="Dashboard" href="/" />
          <SidebarItem icon={<Search />} label="Search" />
          <SidebarItem icon={<Heart />} label="Favorites" href="favorite" />
          <SidebarItem icon={<Mic />} label="Record" />
          <SidebarItem
            icon={<TrendingUp />}
            label="Trending"
            href="/trending"
          />
          <SidebarItem icon={<ArrowDownToLine />} label="Downloads" />
          <SidebarItem icon={<ListMinus />} label="Playlists" />
          <SidebarItem icon={<Plus />} label="Create Playlist" />
          <SidebarItem
            className="mt-auto"
            icon={<Settings />}
            label="Settings"
          />
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
