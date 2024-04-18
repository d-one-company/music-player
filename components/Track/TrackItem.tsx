'use client';

import { usePlayerContext } from '@/providers/PlayerContext';
import { Track } from '@/types';
import Image from 'next/image';
import useTrackStore from '@/lib/store';
import { Toggle } from '../ui/toggle';
import FavoriteIcon from '../icons/FavoriteIcon';

type Props = { track: Track };

const TrackItem = ({ track }: Props) => {
  const { setCurrentTrack } = usePlayerContext();
  const { favoriteTrackIds, toggleFavorite } = useTrackStore();

  return (
    <div
      role="presentation"
      className="flex items-center gap-4"
      onClick={e => setCurrentTrack(track)}
    >
      <Image
        className="aspect-square rounded-md bg-contain"
        src={track.image}
        alt={track.title}
        width={55}
        height={55}
      />
      <div className="flex w-[300px] flex-col">
        <p className="max-w-full truncate text-sm">{track.title}</p>
        <p className="text-sm text-muted-foreground">{track.artist}</p>
      </div>

      <div className="ml-auto">
        <Toggle
          onClick={e => e.stopPropagation()}
          variant="favorite"
          className="h-10 w-10"
          pressed={favoriteTrackIds.includes(track.id)}
          onPressedChange={() => toggleFavorite(track.id)}
        >
          <FavoriteIcon />
        </Toggle>
      </div>
    </div>
  );
};

export default TrackItem;
