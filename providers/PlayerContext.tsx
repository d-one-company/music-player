'use client';

import { tracks } from '@/lib/tracks';
import { Playlist, Track } from '@/types';
import { ReactNode, createContext, useContext, useState } from 'react';

interface PlayerContextType {
  currentTrack: Track | undefined;
  isPlaying: boolean;
  currentPlaylist: Playlist | undefined;
  setCurrentPlaylist: (playlist: Playlist) => void;
  setCurrentTrack: (track: Track) => void;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  handlePlayNext: () => void;
  handlePlayPrev: () => void;
  setCurrentAndPlayPlaylist: (playlist: Playlist) => void;
  search: string;
  setSearch: (search: string) => void;
}
const PlayerContext = createContext<PlayerContextType | undefined>(undefined);
export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>();

  const [search, setSearch] = useState('');

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playTrack = (track: Track) => {
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

  const setCurrentAndPlayPlaylist = (playlist: Playlist) => {
    setCurrentPlaylist(playlist);
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
        currentPlaylist,
        setCurrentPlaylist,
        playTrack,
        setCurrentTrack,
        togglePlay,
        handlePlayNext,
        handlePlayPrev,
        setCurrentAndPlayPlaylist,
        search,
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
