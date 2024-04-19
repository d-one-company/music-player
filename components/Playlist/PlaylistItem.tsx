import type { Playlist } from '@/types';
import { Music2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = { playlist: Playlist };

const PlaylistItem = ({ playlist }: Props) => {
  return (
    <div className="relative min-h-32 w-44 shrink-0 rounded-md">
      <Image
        fill
        alt={playlist.title}
        className="shrink-0 rounded-md"
        src={playlist.image}
      />
      <div className="absolute inset-0 h-full w-full rounded-md bg-muted/20 backdrop-blur-lg" />
      <Button
        className="group absolute left-4 top-4 h-10 w-10 rounded-full p-0 hover:bg-muted-foreground/30"
        variant="ghost"
      >
        <Music2 className="transition-all " />
      </Button>
      <div className="bg-muted-50 absolute bottom-0 flex h-1/2 w-full flex-col justify-center overflow-hidden px-4 backdrop-blur-lg">
        <p className="line-clamp-1 text-ellipsis">{playlist.title}</p>
        <p className="text-sm text-muted-foreground">
          {playlist.tracks?.length || 1} tracks
        </p>
      </div>
    </div>
  );
};

export default PlaylistItem;
