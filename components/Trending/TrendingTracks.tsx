'use client';

import { tracks } from '@/lib/tracks';
import { cn } from '@/lib/utils';
import { usePlayerContext } from '@/providers/PlayerContext';
import TrackItem from '../Track/TrackItem';
import { usePathname } from 'next/navigation';

type Props = {
  className?: string;
};

const TrendingTracks = ({ className }: Props) => {
  const { currentPlaylist, search } = usePlayerContext();
  const currentTracks = currentPlaylist ? currentPlaylist?.tracks : tracks;
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'scrollbar-sky flex flex-col overflow-y-scroll',
        pathname.includes('trending')
          ? 'h-full'
          : 'max-h-[200px] 2xl:max-h-[300px]',
        className
      )}
    >
      {currentTracks
        ?.filter(
          track =>
            track.title.toLowerCase().includes(search) ||
            track.artist.toLowerCase().includes(search)
        )
        .map((track, idx) => (
          <div className="group flex gap-4" key={track.id}>
            <div className="hidden items-center justify-center lg:flex">
              <span className="text-sm text-muted-foreground group-hover:text-white">
                {idx < 9 ? `0${idx + 1}` : idx + 1}
              </span>
            </div>
            <TrackItem track={track} key={track.id} />
          </div>
        ))}
    </div>
  );
};

export default TrendingTracks;
