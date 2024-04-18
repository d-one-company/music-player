'use client';
import { generateFakeTracks } from '@/lib/fakeData';
import RecentFavouriteListItem from './RecentFavouriteListItem';

const RecentFavouritesList = () => {
  const recentlySavedTracks = generateFakeTracks({ count: 10 });

  return (
    <div className="flex items-center gap-3 overflow-x-auto">
      {recentlySavedTracks?.map(track => (
        <RecentFavouriteListItem key={track.id} track={track} />
      ))}
    </div>
  );
};

export default RecentFavouritesList;
