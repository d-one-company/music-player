'use client';

import { usePlayerContext } from '@/providers/PlayerContext';
import { ArrowLeftToLine, ArrowRightToLine, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';

const LargePlayer = () => {
  const {
    isPlaying,
    togglePlay,
    handlePlayNext,
    handlePlayPrev,
    currentTrack,
  } = usePlayerContext();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number | undefined>(0);

  useEffect(() => {
    if (audioRef.current)
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (!audioRef.current) return;
    const handler = () => setCurrentTime(audioRef.current?.currentTime);
    audioRef.current.addEventListener('timeupdate', handler);
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handler);
      }
    };
  }, [audioRef.current]);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-20 items-center bg-black px-4 text-white">
      <audio
        autoPlay
        ref={audioRef}
        src={currentTrack.url}
        onEnded={handlePlayNext}
      />
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
          max={audioRef.current?.duration}
          onValueChange={value => {
            if (audioRef.current) audioRef.current.currentTime = value[0];
          }}
          value={[currentTime || 0]}
          step={1}
        />
      </div>

      <div className="ml-4 flex items-center justify-center gap-4">
        <Button variant="ghost" onClick={handlePlayPrev}>
          <ArrowLeftToLine />
        </Button>
        <Button variant="ghost" onClick={togglePlay}>
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
