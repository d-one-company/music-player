'use client';

import useTrackStore from '@/lib/store';
import RecentFavouriteListItem from './RecentFavouriteListItem';
import { tracks } from '@/lib/tracks';
import type { Track } from '@/types';

const RecentFavouritesList = () => {
  const { favoriteTracks } = useTrackStore();

  return (
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
  );
};

export default RecentFavouritesList;
