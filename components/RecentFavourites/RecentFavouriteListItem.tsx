import { usePlayerContext } from '@/providers/PlayerContext';
import { Track } from '@/types';
import Image from 'next/image';

type Props = { track: Track };

const RecentFavouriteListItem = ({ track }: Props) => {
  const { playTrack } = usePlayerContext();

  return (
    <div
      role="presentation"
      onClick={() => playTrack(track)}
      className="flex size-28 shrink-0 grow-0 flex-col space-y-1"
    >
      <div className="relative size-24">
        <Image
          src={track.image}
          alt={track.title}
          fill
          className="rounded-md"
        />
      </div>
      <p className="truncate text-sm">{track.title}</p>
      <p className="truncate text-xs text-muted-foreground">{track.artist}</p>
    </div>
  );
};

export default RecentFavouriteListItem;
