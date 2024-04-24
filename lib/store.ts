import { Playlist } from '@/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Store {
  queuedTrackIds: number[];
  playlists: Playlist[];
  favoriteTracks: { id: number; timestamp: number }[];
  queueTrack: (trackId: number) => void;
  dequeueTrack: (trackId: number) => void;
  toggleFavorite: (trackId: number) => void;
  addPlaylist: (playlist: Playlist) => void;
}

const useTrackStore = create<Store>()(
  devtools(
    persist(
      set => ({
        favoriteTracks: [],
        queuedTrackIds: [],
        queueTrack: trackId =>
          set(state => ({
            queuedTrackIds: [...state.queuedTrackIds, trackId],
          })),
        dequeueTrack: trackId =>
          set(state => ({
            queuedTrackIds: state.queuedTrackIds.filter(id => id !== trackId),
          })),
        toggleFavorite: trackId =>
          set(state => ({
            favoriteTracks: state.favoriteTracks.some(
              track => track.id === trackId
            )
              ? state.favoriteTracks?.filter(track => trackId !== track.id)
              : [
                  ...state.favoriteTracks,
                  { id: trackId, timestamp: Date.now() },
                ],
          })),
        playlists: [],
        addPlaylist: playlist =>
          set(state => ({
            playlists: [...state.playlists, playlist],
          })),
      }),
      { name: 'track-store' }
    )
  )
);

export default useTrackStore;
