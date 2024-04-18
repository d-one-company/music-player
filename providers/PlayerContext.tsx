'use client';

import { tracks } from '@/lib/tracks';
import { Track } from '@/types';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
interface PlayerContextType {
  currentTrack: Track | undefined;
  isPlaying: boolean;
  queuedTracks: Track[];
  setCurrentTrack: (track: Track) => void;
  togglePlay: () => void;
  handlePlayNext: () => void;
  handlePlayPrev: () => void;
}
const PlayerContext = createContext<PlayerContextType | undefined>(undefined);
export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>();
  const [queuedTracks, setQueuedTracks] = useState(tracks);

  useEffect(() => {
    setCurrentTrack(queuedTracks[0]);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlayNext = () => {
    const currentTrackIndex = queuedTracks.findIndex(
      track => track.url === currentTrack?.url
    );
    const nextTrackIndex = (currentTrackIndex + 1) % queuedTracks.length;
    const nextTrack = queuedTracks[nextTrackIndex];

    setCurrentTrack(nextTrack);

    const newTrack =
      tracks.find(track => track.url === nextTrack.url) ?? tracks[0];
    const updatedQueue = [...queuedTracks];
    updatedQueue.splice(currentTrackIndex, 1);
    updatedQueue.push(newTrack);

    setQueuedTracks(updatedQueue);
  };
  const handlePlayPrev = () => {
    const currentTrackIndex = queuedTracks.findIndex(
      track => track.url === currentTrack?.url
    );
    const prevTrackIndex =
      (currentTrackIndex - 1 + queuedTracks.length) % queuedTracks.length;
    const prevTrack = queuedTracks[prevTrackIndex];

    setCurrentTrack(prevTrack);

    const newTrack =
      tracks.find(track => track.url === prevTrack.url) ?? tracks[0];
    const updatedQueue = [...queuedTracks];
    updatedQueue.splice(currentTrackIndex, 1);
    updatedQueue.unshift(newTrack);

    setQueuedTracks(updatedQueue);
  };
  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        queuedTracks,
        setCurrentTrack,
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
