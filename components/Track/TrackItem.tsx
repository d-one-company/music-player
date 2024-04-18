'use client';

import { usePlayerContext } from '@/providers/PlayerContext';
import { Track } from '@/types/track';
import Image from 'next/image';

type Props = { track: Track };

const TrackItem = ({ track }: Props) => {
  const { setCurrentTrack } = usePlayerContext();

  return (
    <div
      role="presentation"
      className="flex items-center gap-4"
      onClick={() => setCurrentTrack(track)}
    >
      <Image
        className="shrink-0 grow-0 rounded-md"
        src={track.img}
        alt={track.title}
        width={55}
        height={55}
      />
      <div className="flex w-[300px] flex-col">
        <p className="max-w-full truncate text-sm">{track.title}</p>
        <p className="text-sm text-muted-foreground">{track.artist}</p>
      </div>
    </div>
  );
};

export default TrackItem;
