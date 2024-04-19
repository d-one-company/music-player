import { cn } from '@/lib/utils';
import { usePlayerContext } from '@/providers/PlayerContext';
import { Track } from '@/types';
import { EllipsisVertical } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = { track: Track };

const QueuedTrack = ({ track }: Props) => {
  const { currentTrack, playTrack } = usePlayerContext();

  return (
    <div
      role="presentation"
      onClick={() => playTrack(track)}
      className={cn(
        'flex max-w-full cursor-pointer items-center justify-between rounded-md py-2 pl-3 transition-colors duration-200',
        currentTrack?.id === track.id
          ? 'bg-gray-200/20'
          : 'hover:bg-gray-100/10'
      )}
      key={track.id}
    >
      <div className="flex gap-3">
        <Image
          src={track.image}
          alt="track"
          width={65}
          height={65}
          className="aspect-square shrink-0 grow-0 rounded-sm"
        />
        <div className="flex max-w-full flex-col justify-center space-y-1">
          <p className="line-clamp-1 text-ellipsis font-light">{track.title}</p>
          <p className="text-sm font-light text-muted-foreground">
            {track.artist}
          </p>
        </div>
      </div>
      <Button variant="ghost" className="group mx-1.5 rounded-full p-1">
        <EllipsisVertical className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
      </Button>
    </div>
  );
};

export default QueuedTrack;
