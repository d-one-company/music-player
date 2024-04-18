'use client';
import { useRecentlySavedTracks } from '@/lib/hooks/useRecentlySavedTracks';
import RecentFavouriteListItem from './RecentFavouriteListItem';

const RecentFavouritesList = () => {
  const recentlySavedTracks = useRecentlySavedTracks();

  return (
    <div className="flex items-center gap-3 overflow-x-auto">
      {recentlySavedTracks?.map(track => (
        <RecentFavouriteListItem key={track.id} track={track} />
      ))}
    </div>
  );
};

export default RecentFavouritesList;
