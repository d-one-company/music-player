'use client';

import { generateFakeImage } from '@/lib/fakeData';
import { useCurrentPlayingTrack } from '@/lib/hooks/getCurrentlyPlayingSong';
import { ArrowLeftToLine, ArrowRightToLine, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';

const Player = () => {
  const currentSong = useCurrentPlayingTrack();

  if (!currentSong) return null;

  return (
    <div className="relative mt-10 flex h-64 w-full items-end rounded-md">
      <Image
        fill
        alt={currentSong.name}
        className="rounded-md"
        src={
          currentSong.album.images[0].url ??
          generateFakeImage({ width: 256, height: 256 })
        }
      />
      <div className="absolute flex h-[60%] w-full items-end px-2 pb-2 ">
        <div className="flex h-full w-full flex-col rounded-sm bg-muted/60 backdrop-blur-lg">
          <div className="flex flex-col justify-center space-y-2.5 py-4 text-center text-sm">
            <div className="flex flex-col space-y-0.5">
              <p>{currentSong.artists.map(artist => artist.name).join(', ')}</p>
              <p className="text-muted-foreground">{currentSong.name}</p>
            </div>

            <div className="flex items-center justify-center gap-8">
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
              >
                <ArrowLeftToLine />
              </Button>
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
              >
                <Play />
              </Button>
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
              >
                <ArrowRightToLine />
              </Button>
            </div>
            <div className="px-4">
              <Slider defaultValue={[60]} max={100} step={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
