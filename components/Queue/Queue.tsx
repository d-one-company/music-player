'use client';

import { tracks } from '@/lib/tracks';
import QueuedTrack from './QueuedTrack';

const Queue = () => {
  return (
    <div className="flex max-h-[calc(100%-320px)] w-full max-w-full flex-col overflow-y-auto px-4">
      <p className="pb-2 text-left text-lg font-semibold">Queue</p>
      <div className="flex flex-col space-y-2 pt-8">
        {tracks?.map(track => <QueuedTrack track={track} key={track.id} />)}
      </div>
    </div>
  );
};

export default Queue;
