'use client';

import { tracks } from '@/lib/tracks';
import { cn } from '@/lib/utils';
import { usePlayerContext } from '@/providers/PlayerContext';
import TrackItem from '../Track/TrackItem';

type Props = { className?: string };

const TrendingTracks = ({ className }: Props) => {
  const { search } = usePlayerContext();

  return (
    <div
      className={cn('scrollbar-sky flex flex-col overflow-y-scroll', className)}
    >
      {tracks
        ?.slice(0, 15)
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
