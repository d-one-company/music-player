'use client';

import { tracks } from '@/lib/tracks';
import { Playlist, Track } from '@/types';
import { ReactNode, createContext, useContext, useState } from 'react';

interface PlayerContextType {
  currentTrack: Track | undefined;
  isPlaying: boolean;
  search: string;
  setCurrentTrack: (track: Track) => void;
  handlePlayTrack: (track: Track) => void;
  handleTogglePlay: () => void;
  handlePlayNext: () => void;
  handlePlayPrev: () => void;
  handleSetCurrentAndPlayPlaylist: (playlist: Playlist) => void;
  setSearch: (search: string) => void;
}
const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [search, setSearch] = useState('');

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlayTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handlePlayNext = () => {
    const currentTrackIndex = tracks.findIndex(
      track => track.url === currentTrack?.url
    );

    const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
    const nextTrack = tracks[nextTrackIndex];

    setCurrentTrack(nextTrack);

    if (!isPlaying) setIsPlaying(true);
  };

  const handlePlayPrev = () => {
    const currentTrackIndex = tracks.findIndex(
      track => track.url === currentTrack?.url
    );

    const prevTrackIndex =
      currentTrackIndex > 0 ? currentTrackIndex - 1 : tracks.length - 1;

    const prevTrack = tracks[prevTrackIndex];

    setCurrentTrack(prevTrack);

    if (!isPlaying) setIsPlaying(true);
  };

  const handleSetCurrentAndPlayPlaylist = (playlist: Playlist) => {
    if (!!playlist?.tracks?.length) {
      setCurrentTrack(playlist.tracks[0]);
      setIsPlaying(true);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        search,
        handlePlayTrack,
        setCurrentTrack,
        handleTogglePlay,
        handlePlayNext,
        handlePlayPrev,
        handleSetCurrentAndPlayPlaylist,
        setSearch,
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
