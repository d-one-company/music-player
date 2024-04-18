'use client';
import RecentFavouriteListItem from './RecentFavouriteListItem';
import { tracks } from '@/lib/tracks';

const RecentFavouritesList = () => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto">
      {tracks?.map(track => (
        <RecentFavouriteListItem key={track.id} track={track} />
      ))}
    </div>
  );
};

export default RecentFavouritesList;
