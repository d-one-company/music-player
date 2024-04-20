import { tracks } from '@/lib/tracks';
import { usePlayerContext } from '@/providers/PlayerContext';
import TrackItem from '../Track/TrackItem';

const TrendingTracks = () => {
  const { currentPlaylist } = usePlayerContext();
  const currentTracks = currentPlaylist ? currentPlaylist?.tracks : tracks;

  return (
    <div className="scrollbar-sky flex max-h-[200px] flex-col overflow-y-scroll 2xl:max-h-[300px]">
      {currentTracks?.map((track, idx) => (
        <div className="group flex gap-4" key={track.id}>
          <div className="hidden items-center justify-center lg:flex">
            <span className="text-sm text-muted-foreground group-hover:text-white">
              {idx < 9 ? `0${idx + 1}` : idx + 1}
            </span>
          </div>
          <TrackItem track={track} key={track.id} />
        </div>
      ))}
    </div>
  );
};

export default TrendingTracks;
