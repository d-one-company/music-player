'use client';

import useTrackStore from '@/lib/store';
import { tracks } from '@/lib/tracks';
import type { Track } from '@/types';
import RecentFavouriteListItem from './RecentFavouriteListItem';

const RecentFavouritesList = () => {
  const { favoriteTracks } = useTrackStore();

  return (
    <div className="relative">
      <div className="flex items-center gap-3 overflow-x-auto">
        {favoriteTracks
          .sort((a, b) => b.timestamp - a.timestamp)
          .map(ft => (
            <RecentFavouriteListItem
              key={ft.id}
              track={tracks.find(t => t.id === ft.id) as Track}
            />
          ))}
      </div>
      <div className="pointer-events-none absolute inset-0 left-auto w-80 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

export default RecentFavouritesList;
