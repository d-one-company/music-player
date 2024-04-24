'use client';

import { usePlayerContext } from '@/providers/PlayerContext';
import { ArrowLeftToLine, ArrowRightToLine, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';

const LargePlayer = () => {
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
    <div className="fixed bottom-0 left-0 right-0 flex h-20 items-center bg-black px-4 text-white">
      <div className="mr-4 flex h-full w-3/12 min-w-[160px] items-center">
        <Image
          width={50}
          height={50}
          alt={currentTrack.title}
          className="h-12 w-12"
          src={currentTrack.image}
        />
        <div className="ml-3">
          <p className="text-sm font-semibold">{currentTrack.artist}</p>
          <p className="text-xs text-gray-400">{currentTrack.title}</p>
        </div>
      </div>

      <div className="flex-grow">
        <Slider
          defaultValue={[currentTime || 0]}
          max={duration}
          onValueChange={value => changeTime(value[0])}
          value={[currentTime || 0]}
          step={1}
        />
      </div>

      <div className="ml-4 flex items-center justify-center gap-4">
        <Button variant="ghost" onClick={handlePlayPrev}>
          <ArrowLeftToLine />
        </Button>
        <Button variant="ghost" onClick={handleTogglePlay}>
          {isPlaying ? <Pause /> : <Play />}
        </Button>
        <Button variant="ghost" onClick={handlePlayNext}>
          <ArrowRightToLine />
        </Button>
      </div>
    </div>
  );
};

export default LargePlayer;
