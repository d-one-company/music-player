'use client';

import { generateFakeImage } from '@/lib/fakeData';
import { useCurrentlyPlayingTrack } from '@/lib/hooks/useCurrentlyPlayingTrack';
import { useLastPlayedTracks } from '@/lib/hooks/useLastPlayedTracks';
import { usePlayPause } from '@/lib/hooks/usePlayPause';
import { useSkipToNextTrack } from '@/lib/hooks/useSkipToNextTrack';
import { useSkipToPreviousTrack } from '@/lib/hooks/useSkipToPreviousTrack';
import { Track } from '@spotify/web-api-ts-sdk';
import { ArrowLeftToLine, ArrowRightToLine, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';

const Player = () => {
  const [playerTrack, setPlayerTrack] = useState<Track | null>();

  const [trackChangeFlag, setTrackChangeFlag] = useState(false);

  const currentTrack = useCurrentlyPlayingTrack(trackChangeFlag);
  const lastPlayedTracks = useLastPlayedTracks();

  const skipToNextTrack = useSkipToNextTrack();
  const skipToPreviousTrack = useSkipToPreviousTrack();
  const { playPauseTrack, isPlaying } = usePlayPause();

  const handleSkipToNextTrack = async () => {
    await skipToNextTrack();
    setTrackChangeFlag(prev => !prev);
  };

  const handleSkipToPreviousTrack = async () => {
    await skipToPreviousTrack();
    setTrackChangeFlag(prev => !prev);
  };

  useEffect(() => {
    setPlayerTrack(currentTrack || lastPlayedTracks?.[0]);
  }, [currentTrack, lastPlayedTracks]);

  if (!playerTrack) return null;

  return (
    <div className="relative mt-10 flex h-64 w-full items-end rounded-md">
      <Image
        fill
        alt={playerTrack?.name ?? "Track's album cover"}
        className="rounded-md"
        src={
          playerTrack?.album.images[0].url ??
          generateFakeImage({ width: 256, height: 256 })
        }
      />
      <div className="absolute flex h-[60%] w-full items-end px-2 pb-2 ">
        <div className="flex h-full w-full flex-col rounded-sm bg-muted/60 backdrop-blur-lg">
          <div className="flex flex-col justify-center space-y-2.5 py-4 text-center text-sm">
            <div className="flex flex-col space-y-0.5">
              <p>
                {playerTrack?.artists.map(artist => artist.name).join(', ')}
              </p>
              <p className="text-muted-foreground">{playerTrack?.name}</p>
            </div>

            <div className="flex items-center justify-center gap-8">
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
                onClick={handleSkipToPreviousTrack}
              >
                <ArrowLeftToLine />
              </Button>
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
                onClick={playPauseTrack}
              >
                {isPlaying ? <Pause /> : <Play />}
              </Button>
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
                onClick={handleSkipToNextTrack}
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
