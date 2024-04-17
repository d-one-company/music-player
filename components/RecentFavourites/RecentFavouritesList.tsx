import { getTrendingTracks } from '@/lib/queries';
import RecentFavouriteListItem from './RecentFavouriteListItem';

const RecentFavouritesList = async () => {
  const trendingTracks = await getTrendingTracks();

  return (
    <div className="flex items-center gap-3 overflow-x-auto">
      {trendingTracks.tracks.items.map(track => (
        <RecentFavouriteListItem key={track.track.id} track={track} />
      ))}
    </div>
  );
};

export default RecentFavouritesList;
