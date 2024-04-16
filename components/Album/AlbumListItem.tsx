import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Music2 } from 'lucide-react';

type AlbumListItemProps = {
  album: {
    title: string;
    numberOfTracks: number;
    image: string;
  };
};

const AlbumListItem = ({ album }: AlbumListItemProps) => {
  return (
    <div className="relative h-32 w-48 shrink-0 rounded-md">
      <Image
        fill
        alt={album.title}
        className="shrink-0 rounded-md"
        src={album.image}
      />
      <div className="absolute inset-0 h-full w-full rounded-md bg-muted/20 backdrop-blur-lg" />
      <Button
        className="group absolute left-4 top-4 h-10 w-10 rounded-full p-0 hover:bg-muted-foreground/30"
        variant="ghost"
      >
        <Music2 className="transition-all " />
      </Button>
      <div className="bg-muted-50 absolute bottom-0 flex h-1/3 w-full justify-center flex-col p-4 backdrop-blur-lg">
        <p>{album.title}</p>
        <p className="text-sm text-muted-foreground">
          {album.numberOfTracks} tracks
        </p>
      </div>
    </div>
  );
};

export default AlbumListItem;
