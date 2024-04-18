'use client';

import useTrackStore from '@/lib/store';
import RecentFavouriteListItem from './RecentFavouriteListItem';
import { tracks } from '@/lib/tracks';

const RecentFavouritesList = () => {
  const { favoriteTrackIds } = useTrackStore();

  return (
    <div className="flex items-center gap-3 overflow-x-auto">
      {tracks
        .filter(track => favoriteTrackIds.includes(track.id))
        ?.map(track => (
          <RecentFavouriteListItem key={track.id} track={track} />
        ))}
    </div>
  );
};

export default RecentFavouritesList;
