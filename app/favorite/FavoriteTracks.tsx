'use client';

import useTrackStore from '@/lib/store';
import { tracks } from '@/lib/tracks';
import { usePlayerContext } from '@/providers/PlayerContext';
import type { Track } from '@/types';
import FavoriteTrack from './FavoriteTrack';

const FavoriteTracks = () => {
  const { favoriteTracks: favouriteTracks_ } = useTrackStore();
  const { search } = usePlayerContext();
  const favoriteTracks = favouriteTracks_
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(ft => {
      return tracks.find(track => track.id === ft.id);
    });

  return (
    <div className="scrollbar-sky flex h-full w-full flex-col overflow-y-scroll pb-5">
      {favoriteTracks
        .filter(
          track =>
            track?.title.toLowerCase().includes(search.toLowerCase()) ||
            track?.artist.toLowerCase().includes(search.toLowerCase())
        )
        .map((ft, idx) => (
          <div className="group flex gap-4" key={ft?.id}>
            <div className="hidden items-center justify-center lg:flex">
              <span className="text-sm text-muted-foreground group-hover:text-white">
                {idx < 9 ? `0${idx + 1}` : idx + 1}
              </span>
            </div>
            <FavoriteTrack
              key={ft?.id}
              track={ft as Track}
              dateAdded={
                favouriteTracks_.find(f => f.id === ft?.id)?.timestamp || 0
              }
            />
          </div>
        ))}
    </div>
  );
};

export default FavoriteTracks;
