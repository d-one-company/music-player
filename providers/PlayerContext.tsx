'use client';

import { generateFakeTracks } from '@/lib/fakeData';
import { Track } from '@/types/track';
import { ReactNode, createContext, useContext, useState } from 'react';

interface PlayerContextType {
  currentTrack: Track;
  isPlaying: boolean;
  setCurrentTrack: (track: Track) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  togglePlay: () => void;
  handlePlayNext: () => void;
  handlePlayPrev: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrack, setCurrentTrack] = useState<Track>(
    generateFakeTracks({ count: 1 })[0]
  );

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlayNext = () => {};

  const handlePlayPrev = () => {};

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        setCurrentTrack,
        setIsPlaying,
        togglePlay,
        handlePlayNext,
        handlePlayPrev,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  const context = useContext(PlayerContext);

  if (context === undefined)
    throw new Error('usePlayerContext must be used within a PlayerProvider');

  return context;
}
