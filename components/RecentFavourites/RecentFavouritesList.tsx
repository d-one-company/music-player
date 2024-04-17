import { getTrendingSongs } from '@/lib/queries';
import RecentFavouriteListItem from './RecentFavouriteListItem';

const RecentFavouritesList = async () => {
  const trendingSongs = await getTrendingSongs();

  return (
    <div className="flex items-center gap-3 overflow-x-auto">
      {trendingSongs.tracks.items.map(track => (
        <RecentFavouriteListItem key={track.track.id} track={track} />
      ))}
    </div>
  );
};

export default RecentFavouritesList;
