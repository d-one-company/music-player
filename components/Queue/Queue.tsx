'use client';

import QueuedTrack from './QueuedTrack';
import { tracks } from '@/lib/tracks';

const Queue = () => {
  return (
    <div className="flex max-h-[calc(100%-320px)] flex-col overflow-y-auto">
      <p className="pb-2 text-left text-lg font-semibold">Queue</p>
      <div className="flex flex-col space-y-6 pt-8">
        {tracks?.map(track => <QueuedTrack track={track} key={track.title} />)}
      </div>
    </div>
  );
};

export default Queue;
