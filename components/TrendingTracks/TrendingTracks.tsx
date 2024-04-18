import { tracks } from '@/lib/tracks';
import TrackItem from '../Track/TrackItem';

const TrendingTracks = () => {
  return (
    <div className="scrollbar-sky flex max-h-[200px] flex-col space-y-5 overflow-y-scroll 2xl:max-h-[300px]">
      {tracks.map(track => (
        <TrackItem track={track} key={track.id} />
      ))}
    </div>
  );
};

export default TrendingTracks;
