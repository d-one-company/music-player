import { Track } from '@spotify/web-api-ts-sdk';
import { EllipsisVertical } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = { track: Track };

const QueuedTrack = ({ track }: Props) => {
  return (
    <div className="flex items-center justify-between" key={track.id + 1}>
      <div className="flex gap-3">
        <Image
          src={track.album.images[0].url}
          alt="track"
          width={65}
          height={65}
          className="grow-0 rounded-sm"
        />
        <div className="flex flex-col justify-center space-y-1">
          <p className="font-light">{track.album.name}</p>
          <p className="text-sm font-light text-muted-foreground">
            {track.artists.map(artist => artist.name).join(', ')}
          </p>
        </div>
      </div>
      <Button variant="ghost" className="group rounded-full p-2">
        <EllipsisVertical className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
      </Button>
    </div>
  );
};

export default QueuedTrack;