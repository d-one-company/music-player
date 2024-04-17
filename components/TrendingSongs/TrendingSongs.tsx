import { getTrendingTracks } from '@/lib/queries';
import TrackItem from '../Track/TrackItem';

const TrendingTracks = async () => {
  const trendingTracks = await getTrendingTracks();

  return (
    <div className="scrollbar-sky flex max-h-[250px] flex-col space-y-5 overflow-y-scroll">
      {trendingTracks.tracks.items.map(track => (
        <TrackItem track={track} key={track.track.id} />
      ))}
    </div>
  );
};

export default TrendingTracks;
