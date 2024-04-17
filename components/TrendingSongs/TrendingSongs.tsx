import { getTrendingSongs } from '@/lib/queries';
import TrackItem from '../Track/TrackItem';

const TrendingSongs = async () => {
  const trendingSongs = await getTrendingSongs();

  return (
    <div className="scrollbar-sky flex max-h-[250px] flex-col space-y-5 overflow-y-scroll">
      {trendingSongs.tracks.items.map(track => (
        <TrackItem track={track} key={track.track.id} />
      ))}
    </div>
  );
};

export default TrendingSongs;
