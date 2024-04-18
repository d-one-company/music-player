'use client';

import { usePlayerContext } from '@/providers/PlayerContext';
import { ArrowLeftToLine, ArrowRightToLine, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';

const Player = () => {
  const {
    isPlaying,
    setIsPlaying,
    handlePlayNext,
    handlePlayPrev,
    currentTrack,
  } = usePlayerContext();

  return (
    <div className="relative mt-10 flex h-64 w-full items-end rounded-md">
      <Image
        fill
        alt={currentTrack?.title}
        className="rounded-md"
        src={currentTrack?.img}
      />
      <div className="absolute flex h-[60%] w-full items-end px-2 pb-2 ">
        <div className="flex h-full w-full flex-col rounded-sm bg-muted/60 backdrop-blur-lg">
          <div className="flex flex-col justify-center space-y-2.5 py-4 text-center text-sm">
            <div className="flex flex-col space-y-0.5">
              <p>{currentTrack?.artist}</p>
              <p className="text-muted-foreground">{currentTrack?.title}</p>
            </div>

            <div className="flex items-center justify-center gap-8">
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
                onClick={handlePlayPrev}
              >
                <ArrowLeftToLine />
              </Button>
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause /> : <Play />}
              </Button>
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
                onClick={handlePlayNext}
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
