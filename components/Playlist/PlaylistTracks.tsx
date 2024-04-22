import { Track } from '@/types';
import TrackItem from '../Track/TrackItem';

type Props = {
  search: string;
  tracks: Track[];
};

const PlaylistTracks = ({ tracks, search }: Props) => {
  return (
    <div className="scrollbar-sky flex h-screen w-full flex-col overflow-y-scroll pb-[540px]">
      {tracks
        .filter(
          track =>
            track.title.toLowerCase().includes(search.toLowerCase()) ||
            track.artist.toLowerCase().includes(search.toLowerCase())
        )
        .map(track => (
          <TrackItem track={track} key={track.id} />
        ))}
    </div>
  );
};

export default PlaylistTracks;
