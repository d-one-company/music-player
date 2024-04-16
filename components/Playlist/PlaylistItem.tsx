import type { Playlist, TrackItem } from '@spotify/web-api-ts-sdk';
import { Music2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

type PlaylistItemProps = {
  playlist: Playlist<TrackItem>;
};

const PlaylistItem = ({ playlist }: PlaylistItemProps) => {
  return (
    <div className="relative h-32 w-48 shrink-0 rounded-md">
      {playlist.images[0]?.url && (
        <Image
          fill
          alt={playlist.name}
          className="shrink-0 rounded-md"
          src={playlist.images[0]?.url}
        />
      )}
      <div className="absolute inset-0 h-full w-full rounded-md bg-muted/20 backdrop-blur-lg" />
      <Button
        className="group absolute left-4 top-4 h-10 w-10 rounded-full p-0 hover:bg-muted-foreground/30"
        variant="ghost"
      >
        <Music2 className="transition-all " />
      </Button>
      <div className="bg-muted-50 absolute bottom-0 flex h-1/3 w-full flex-col justify-center p-4 backdrop-blur-lg">
        <p>{playlist.name}</p>
        <p className="text-sm text-muted-foreground">
          {playlist.tracks.total} tracks
        </p>
      </div>
    </div>
  );
};

export default PlaylistItem;
