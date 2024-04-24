import { tracks } from '@/lib/tracks';
import QueuedTrack from './QueuedTrack';

const Queue = () => {
  return (
    <>
      <div className="flex w-full px-4 pb-2">
        <p className="text-left text-lg font-semibold">Queue</p>
      </div>
      <div className="scrollbar-sky w-full flex-1 space-y-2 overflow-y-auto px-4 pt-2">
        {tracks?.map(track => <QueuedTrack track={track} key={track.id} />)}
      </div>
    </>
  );
};

export default Queue;
