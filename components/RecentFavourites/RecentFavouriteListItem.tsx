import { cn } from '@/lib/utils';
import { usePlayerContext } from '@/providers/PlayerContext';
import { Track } from '@/types';
import Image from 'next/image';

type Props = { track: Track };

const RecentFavouriteListItem = ({ track }: Props) => {
  const { currentTrack, playTrack } = usePlayerContext();
  return (
    <div
      role="presentation"
      onClick={() => playTrack(track)}
      className={cn(
        'flex size-28 shrink-0 grow-0 cursor-pointer flex-col space-y-1 rounded-md p-2 pb-2 transition-colors duration-200',
        currentTrack?.id === track.id
          ? 'bg-gray-200/20'
          : 'hover:bg-gray-100/10'
      )}
    >
      <div className="relative size-20">
        <Image
          src={track.image}
          alt={track.title}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <p className="truncate text-sm">{track.title}</p>
      <p className="truncate text-xs text-muted-foreground">{track.artist}</p>
    </div>
  );
};
export default RecentFavouriteListItem;
