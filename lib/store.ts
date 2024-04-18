import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Store {
  recentTracks: number[];
  addRecentTrack: (trackId: number) => void;

  queuedTrackIds: number[];
  queueTrack: (trackId: number) => void;
  dequeueTrack: (trackId: number) => void;

  favoriteTrackIds: number[];
  toggleFavorite: (trackId: number) => void;
}

const useTrackStore = create<Store>()(
  devtools(
    persist(
      set => ({
        recentTracks: [],
        favoriteTrackIds: [],
        queuedTrackIds: [],
        addRecentTrack: trackId =>
          set(state => ({ recentTracks: [trackId, ...state.recentTracks] })),
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
            favoriteTrackIds: state.favoriteTrackIds.some(id => id === trackId)
              ? state.favoriteTrackIds.filter(id => id !== trackId)
              : [...state.favoriteTrackIds, trackId],
          })),
      }),
      { name: 'track-store' }
    )
  )
);

export default useTrackStore;
