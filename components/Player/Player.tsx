'use client';

import { usePlayerContext } from '@/providers/PlayerContext';
import { ArrowLeftToLine, ArrowRightToLine, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';

const Player = () => {
  const {
    isPlaying,
    handleTogglePlay,
    handlePlayNext,
    handlePlayPrev,
    currentTrack,
    currentTime,
    duration,
    changeTime,
  } = usePlayerContext();

  if (!currentTrack) return null;

  return (
    <div className="mt-10 h-64 w-full overflow-hidden rounded-md px-5 grid-stack">
      <div className="relative">
        <Image
          fill
          alt={currentTrack?.title}
          className="rounded-md"
          src={currentTrack?.image}
        />
      </div>

      <div className="z-10 mt-auto flex px-2 pb-2">
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
                onClick={handleTogglePlay}
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
              <Slider
                defaultValue={[currentTime || 0]}
                max={duration}
                onValueChange={value => changeTime(value[0])}
                value={[currentTime || 0]}
                step={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
