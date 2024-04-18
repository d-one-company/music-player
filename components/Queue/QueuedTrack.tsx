import { usePlayerContext } from '@/providers/PlayerContext';
import { Track } from '@/types';
import { EllipsisVertical } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = { track: Track };

const QueuedTrack = ({ track }: Props) => {
  const { setCurrentTrack } = usePlayerContext();

  return (
    <div
      role="presentation"
      onClick={() => setCurrentTrack(track)}
      className="flex max-w-full items-center justify-between"
      key={track.title}
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
