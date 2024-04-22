'use client';

import { tracks } from '@/lib/tracks';
import useTrackStore from '@/lib/store';
import FavoriteTrack from './FavoriteTrack';
import type { Track } from '@/types';

const FavoriteTracks = () => {
  const { favoriteTracks } = useTrackStore();

  return (
    <div className="flex h-full w-full flex-col scroll-shadow-size-5">
      {favoriteTracks
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((ft, idx) => (
          <div className="group flex gap-4" key={ft.id}>
            <div className="hidden items-center justify-center lg:flex">
              <span className="text-sm text-muted-foreground group-hover:text-white">
                {idx < 9 ? `0${idx + 1}` : idx + 1}
              </span>
            </div>
            <FavoriteTrack
              key={ft.id}
              track={tracks.find(t => t.id === ft.id) as Track}
              dateAdded={ft.timestamp}
            />
          </div>
        ))}
    </div>
  );
};

export default FavoriteTracks;
