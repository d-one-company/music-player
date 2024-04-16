import { BellDot, ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { generateFakeImage, generateFakeTracks } from '@/lib/fakeData';
import { cn } from '@/lib/utils';
import Sidebar from '../Sidebar/Sidebar';
import TrackItem from '../Track/TrackItem';
import UsersPlaylists from './UsersPlaylists';

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col px-4 pt-4">
      <Sidebar />
      <div className="flex flex-col bg-background sm:gap-4 sm:py-4 sm:pl-20">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="relative flex flex-1 items-center gap-2">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for songs, artists, lyrics..."
              className="h-11 w-full rounded-full bg-muted pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-full" variant="ghost">
              <BellDot />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex gap-2.5 overflow-hidden rounded-full px-3 py-4"
                >
                  <Image
                    src={generateFakeImage({
                      width: 36,
                      height: 36,
                    })}
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                  <span>Alex</span>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="ml-6 mt-4 flex grow flex-col space-y-10 md:max-w-[950px] 2xl:max-w-[1400px]">
          <div className="flex w-full flex-col space-y-2">
            <p className="text-lg font-semibold">Recently Listened Albums</p>
            <UsersPlaylists />
          </div>
          <div className="flex w-full flex-col space-y-2 ">
            <p className="text-lg font-semibold">Trending Right Now</p>
            <div
              className={cn(
                'scrollbar-sky flex max-h-[300px] flex-col space-y-5 overflow-y-scroll'
              )}
            >
              {generateFakeTracks({ count: 10 }).map(track => (
                <TrackItem track={track} key={track.id} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
