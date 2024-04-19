'use client';

import { usePlayerContext } from '@/providers/PlayerContext';
import type { Track } from '@/types';
import Image from 'next/image';
import useTrackStore from '@/lib/store';
import { Toggle } from '../ui/toggle';
import FavoriteIcon from '../icons/FavoriteIcon';

type TrackItemProps = { track: Track };

const TrackItem = ({ track }: TrackItemProps) => {
  const { setCurrentTrack } = usePlayerContext();
  const { favoriteTrackIds, toggleFavorite } = useTrackStore();

  return (
    <div
      className="flex w-full items-center justify-between gap-4 rounded-sm p-2.5 group-hover:bg-[#181818]"
      role="presentation"
      onClick={e => setCurrentTrack(track)}
    >
      <div className="flex flex-shrink-0 flex-grow items-center justify-start gap-4">
        <Image
          src={track.image}
          alt={track.title}
          className="aspect-square rounded-sm"
          width={55}
          height={55}
        />
        <div className="flex h-full flex-col gap-0.5">
          <span className="max-w-full truncate text-sm">{track.title}</span>
          <span className="text-xs text-muted-foreground">{track.artist}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-7">
        <div className="col-span-2 hidden min-w-[150px] items-center justify-center xl:flex">
          <span className="text-sm text-muted-foreground">{track.album}</span>
        </div>
        <div className="col-span-2 hidden min-w-[150px] items-center justify-center xl:flex">
          <span className="text-sm text-muted-foreground">
            {new Intl.NumberFormat('en-US').format(track.viewsCount)}
          </span>
        </div>
        <div className="col-span-2 flex min-w-[150px] items-center justify-center">
          <span className="text-sm text-muted-foreground">
            {track.duration}
          </span>
        </div>
        <div className="col-span-1">
          <Toggle
            variant="favorite"
            className="h-10 w-10"
            pressed={favoriteTrackIds.includes(track.id)}
            onPressedChange={() => toggleFavorite(track.id)}
            onClick={e => e.stopPropagation()}
          >
            <FavoriteIcon />
          </Toggle>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
