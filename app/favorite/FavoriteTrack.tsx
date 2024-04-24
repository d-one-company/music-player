import { Toggle } from '@/components/ui/toggle';
import { getTimePassed } from '@/lib/getTimePassed';
import useTrackStore from '@/lib/store';
import { cn } from '@/lib/utils';
import { usePlayerContext } from '@/providers/PlayerContext';
import type { Track } from '@/types';
import { Heart } from 'lucide-react';
import Image from 'next/image';

type FavoriteTrackProps = {
  track: Track;
  dateAdded: number;
};

const FavoriteTrack = ({ track, dateAdded }: FavoriteTrackProps) => {
  const { toggleFavorite, favoriteTracks } = useTrackStore();
  const { currentTrack, handlePlayTrack } = usePlayerContext();

  return (
    <div
      className={cn(
        'grid w-full grid-cols-8 items-center justify-between gap-4 rounded-sm p-2.5 transition-colors duration-200',
        currentTrack?.id === track.id
          ? 'bg-gray-200/20'
          : 'hover:bg-gray-100/10'
      )}
      role="presentation"
      onClick={() => handlePlayTrack(track)}
    >
      <div className="col-span-3 flex items-center gap-4">
        <Image
          width={55}
          height={55}
          className="aspect-square"
          src={track.image}
          alt={track.title}
        />
        <div className="flex h-full flex-col gap-0.5">
          <span className="max-w-full truncate text-sm">{track.title}</span>
          <span className="text-xs text-muted-foreground">{track.artist}</span>
        </div>
      </div>
      <div className="col-span-2">
        <span className="text-sm text-muted-foreground">{track.album}</span>
      </div>
      <div className="col-span-2">
        <span className="text-sm text-muted-foreground">
          {getTimePassed(new Date(dateAdded))}
        </span>
      </div>
      <div className="col-span-1 flex items-center justify-end gap-4">
        <Toggle
          variant="favorite"
          className="hidden h-10 w-10 group-hover:flex"
          pressed={favoriteTracks?.flatMap(t => t.id)?.includes(track.id)}
          onPressedChange={() => toggleFavorite(track.id)}
          onClick={e => e.stopPropagation()}
        >
          <Heart />
        </Toggle>
        <span className="text-sm text-muted-foreground">{track.duration}</span>
      </div>
    </div>
  );
};

export default FavoriteTrack;
