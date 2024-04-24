'use client';

import { tracks } from '@/lib/tracks';
import { Playlist, Track } from '@/types';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface PlayerContextType {
  currentTrack?: Track;
  currentTime?: number;
  duration?: number;
  isPlaying: boolean;
  search: string;
  setCurrentTrack: (track: Track) => void;
  handlePlayTrack: (track: Track) => void;
  handleTogglePlay: () => void;
  handlePlayNext: () => void;
  handlePlayPrev: () => void;
  handleSetCurrentAndPlayPlaylist: (playlist: Playlist) => void;
  setSearch: (search: string) => void;
  changeTime: (time: number) => void;
}
const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [search, setSearch] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number | undefined>(0);

  const duration = audioRef.current?.duration;

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlayTrack = (track: Track) => {
    setCurrentTrack(track);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePlayNext = () => {
    const currentTrackIndex = tracks.findIndex(
      track => track.url === currentTrack?.url
    );

    const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
    const nextTrack = tracks[nextTrackIndex];

    setCurrentTrack(nextTrack);
    setCurrentTime(0);

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
    setCurrentTime(0);

    if (!isPlaying) setIsPlaying(true);
  };

  const handleSetCurrentAndPlayPlaylist = (playlist: Playlist) => {
    if (!!playlist?.tracks?.length) {
      setCurrentTrack(playlist.tracks[0]);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current?.currentTime);
    });
  }, [audioRef.current?.currentTime]);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
      audioRef.current.volume = 0.1;
    }
  }, [isPlaying, currentTrack]);

  const changeTime = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        currentTime,
        duration,
        isPlaying,
        search,
        handlePlayTrack,
        setCurrentTrack,
        handleTogglePlay,
        handlePlayNext,
        handlePlayPrev,
        handleSetCurrentAndPlayPlaylist,
        setSearch,
        changeTime,
      }}
    >
      {children}
      <audio
        className="hidden"
        autoPlay
        ref={audioRef}
        src={currentTrack?.url}
        onEnded={handlePlayNext}
      />
    </PlayerContext.Provider>
  );
}
export function usePlayerContext() {
  const context = useContext(PlayerContext);
  if (context === undefined)
    throw new Error('usePlayerContext must be used within a PlayerProvider');
  return context;
}
