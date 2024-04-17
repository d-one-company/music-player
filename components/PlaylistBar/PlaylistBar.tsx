import { generateFakeTracks } from '@/lib/fakeData';
import { EllipsisVertical, X } from 'lucide-react';
import Image from 'next/image';
import Player from '../Player/Player';
import { Button } from '../ui/button';

const tracks = generateFakeTracks({ count: 20 });

const PlaylistBar = () => {
  return (
    <div className="relative flex min-h-screen shrink-0 grow flex-col items-center justify-center border bg-muted/50 p-8 pt-24 md:w-[350px]">
      <Button
        variant="ghost"
        className="group absolute right-6 top-6 h-12 w-12 rounded-full p-2"
      >
        <X className="h-9 w-9 text-muted-foreground transition-colors group-hover:text-primary" />
      </Button>

      <div className="flex w-full">
        <p className="pb-2 text-left text-lg font-semibold">
          Next on Chillout Playlist
        </p>
      </div>
      <div className="flex max-h-[calc(100%-320px)] flex-col overflow-y-auto">
        <div className="flex flex-col space-y-6 pt-8">
          {tracks.map(track => (
            <div
              className="flex items-center justify-between"
              key={track.id + 1}
            >
              <div className="flex gap-3">
                <Image
                  src={track.img}
                  alt="track"
                  width={65}
                  height={65}
                  className="grow-0 rounded-sm"
                />
                <div className="flex flex-col justify-center space-y-1">
                  <p className="font-light">{track.title}</p>
                  <p className="text-sm font-light text-muted-foreground">
                    {track.artist}
                  </p>
                </div>
              </div>
              <Button variant="ghost" className="group rounded-full p-2">
                <EllipsisVertical className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Player />
    </div>
  );
};

export default PlaylistBar;
